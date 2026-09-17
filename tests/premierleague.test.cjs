// Run with: node tests/premierleague.test.cjs (no dependencies or browser required).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'premierleague/index.html'), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script); // Check the entire shipping script, including startup.
const data = new Map([['super_lig_state_standalone_v1', 'untouched'], ['serie_a_state_standalone_v1', 'untouched']]);
const element = () => ({style:{},classList:{toggle(){},contains(){return false;}},innerHTML:'',textContent:''});
let seed = 124981;
const math = Object.create(Math);
math.random = () => {seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const ctx = vm.createContext({
  console, Math:math, setTimeout:()=>1, clearTimeout(){},
  document:{getElementById:element,querySelector:()=>null},
  localStorage:{getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v),removeItem:k=>data.delete(k)},
  alert(){throw new Error('Unexpected alert');},confirm:()=>true,
});
// Only suppress presentation side effects; real simulation, save, cup and season code runs.
const noUI = ['renderFavSelect','buildFixtures','renderStandings','renderHistoryTab','renderWeekSummary',
  'renderTrophies','showChampionBanner','showAwardsModal','syncSimControlsUI','syncEuroTabVisibility',
  'checkLeaderChange','renderEuro','renderTactics','updateFixtureValues','showSaveIndicator'];
const exposed = `
  ${noUI.map(n=>n+' = function(){};').join('\n')}
  globalThis.api = {
    get state(){return state;},get history(){return history;},get titles(){return titles;},
    setState(s){state=s;invalidateStandings();invalidatePlayers();},
    init(){history=[];titles=baselineTitles();customTeams={};legends={};state=initState(freshInitialTeams(),'2026-27',[]);invalidateStandings();invalidatePlayers();},
    computeStandings,computeEuroQualification,euroZoneMap,handleSeasonAction,advanceToNextSeason,
    playDueCupRounds,euroQualiPlayDue,euroPlayDue,ensureEuro,saveNow,loadState,
    entExpGoals,importSaveFile,fullReset,
    initial:INITIAL_TEAMS,pool:PROMOTION_POOL,foreign:EURO_CLUBS,
    keys:[STORAGE_KEY,HISTORY_KEY,TITLES_KEY,CUSTOM_KEY,LEGENDS_KEY,THEME_KEY]
  };
})();`;
vm.runInContext(script.slice(0,script.indexOf('  /* ============ OLAY DİNLEYİCİLERİ'))+exposed,ctx);
const a = ctx.api;
const plain = x => JSON.parse(JSON.stringify(x));
function fixtures(state){
  assert.equal(state.teams.length,20);
  assert.equal(state.fixtures.length,38);
  assert.equal(new Set(state.teams.map(t=>t.name)).size,20);
  const games=new Set(),home=new Array(20).fill(0),away=new Array(20).fill(0);
  for(const week of state.fixtures){
    assert.equal(week.length,10);
    assert.equal(new Set(week.flat()).size,20,'Each club plays once per week');
    for(const [h,v] of week){assert.notEqual(h,v);assert(!games.has(h+':'+v));games.add(h+':'+v);home[h]++;away[v]++;}
  }
  assert.equal(games.size,380);
  assert(home.every(n=>n===19));assert(away.every(n=>n===19));
}
a.init(); fixtures(a.state);
assert.equal(a.state.cup.guests.length,44);
assert.equal(a.state.cup.rounds[0].matches.length,32);
const initialNames=new Set(a.initial.map(t=>t.name));
assert.equal(a.foreign.filter(c=>initialNames.has(c[0])||a.pool.includes(c[0])).length,0,'No domestic club in the foreign pool');
assert(a.keys.every(k=>k.startsWith('premier_league_')));

// Equal points: overall goal difference must override a head-to-head win.
const original=a.state;
a.setState({teams:original.teams,fixtures:[[[0,1],[0,2],[1,3]]],results:[[[1,0],[0,5],[6,0]]]});
assert(a.computeStandings().findIndex(r=>r.idx===1)<a.computeStandings().findIndex(r=>r.idx===0));
// Same points and GD: overall goals scored are the next criterion.
a.setState({teams:original.teams,fixtures:[[[0,2],[0,3],[1,4],[1,5]]],results:[[[1,0],[0,1],[3,2],[2,3]]]});
assert(a.computeStandings().findIndex(r=>r.idx===1)<a.computeStandings().findIndex(r=>r.idx===0));
a.setState(original);
const table=a.initial.map(t=>({name:t.name}));
for(const winner of [table[0].name,table[5].name,table[11].name,'Leicester City']){
  const q=a.computeEuroQualification(table,winner);
  assert.equal(q.ucl.length,5);assert.equal(q.uel.length,2);assert(q.ueclPO);
  const qualified=[...q.ucl,...q.uel,q.ueclPO].map(x=>x.name);
  assert.equal(new Set(qualified).size,8);
  const zones=a.euroZoneMap(table.map(t=>t.name),winner);
  assert.deepEqual(Object.keys(zones).sort(),qualified.sort());
  if(winner===table[11].name)assert(q.uel.some(e=>e.name===winner&&e.viaCup));
}
assert.equal(a.computeEuroQualification(table,null).uel.length,1,'Unknown cup winner does not allocate its place yet');
const neutral=a.entExpGoals(-1,-2,[{strength:70},{strength:70}],true);
assert.equal(neutral.he,neutral.ae,'Neutral venue removes both explicit and base home advantages');

for(let season=0;season<3;season++){
  fixtures(a.state);
  a.handleSeasonAction();
  assert(a.computeStandings().every(r=>r.P===38));
  assert(a.state.cup.champion);
  assert.deepEqual(plain(a.state.cup.rounds.map(r=>r.matches.length)),[32,16,8,4,2,1]);
  assert(a.state.cup.rounds.every(r=>r.done));
  assert(a.state.cup.rounds.slice(-2).every(r=>r.matches.every(m=>m.neutral)));
  const previous=a.state.teams.map(t=>t.name), relegated=a.computeStandings().slice(-3).map(t=>t.name);
  a.advanceToNextSeason();
  assert.equal(a.history.length,season+1);
  assert.equal(a.state.teams.filter(t=>previous.includes(t.name)).length,17);
  assert(a.state.teams.every(t=>!relegated.includes(t.name)));
  assert(a.state.euro);
  a.euroQualiPlayDue();
  // The one Conference League tie is due at week 2; complete two league weeks.
  a.state.results[0]=a.state.fixtures[0].map(()=>[1,0]);
  a.state.results[1]=a.state.fixtures[1].map(()=>[1,0]);
  a.euroQualiPlayDue();
  assert(a.state.euro.comps,'European competitions start after the qualifying tie');
  const allNames=[];
  for(const [key,comp] of Object.entries(a.state.euro.comps)){
    assert.equal(comp.league.ids.length,36);
    assert.equal(comp.league.matchdays.length,key==='uecl'?6:8);
    const seen=new Set();const counts=new Map();
    for(const md of comp.league.matchdays){
      assert.equal(md.length,18);assert.equal(new Set(md.flatMap(m=>[m.h,m.a])).size,36);
      for(const m of md){
        const pair=[m.h,m.a].sort((x,y)=>x-y).join(':');assert(!seen.has(pair));seen.add(pair);
        for(const [id,venue] of [[m.h,0],[m.a,1]]){const c=counts.get(id)||[0,0];c[venue]++;counts.set(id,c);}
      }
    }
    assert([...counts.values()].every(c=>c[0]===c[1]));
    allNames.push(...comp.league.ids.map(id=>id>=0?a.state.teams[id].name:comp.guests[-id-1].name));
  }
  assert.equal(new Set(allNames).size,allNames.length,'No club appears in two European competitions');
}
a.saveNow();assert.deepEqual(plain(a.loadState()),plain(a.state));
assert.equal(data.get('super_lig_state_standalone_v1'),'untouched');
assert.equal(data.get('serie_a_state_standalone_v1'),'untouched');
// Foreign save is rejected before confirmation or overwriting state.
let alerted=false,confirmed=false;
ctx.alert=()=>{alerted=true;};ctx.confirm=()=>{confirmed=true;return true;};
ctx.FileReader=class {readAsText(){this.result=JSON.stringify({app:'superlig-sim',state:a.state});this.onload();}};
const before=JSON.stringify(a.state);
a.importSaveFile({});assert(alerted);assert(!confirmed);assert.equal(JSON.stringify(a.state),before);
// Static entrypoint, manifest and local references exist.
const manifest=JSON.parse(fs.readFileSync(path.join(root,'premierleague/manifest.webmanifest')));
assert.equal(manifest.scope,'./');assert.equal(manifest.start_url,'./index.html');
for(const asset of ['index.html','sw.js','icon.svg', 'manifest.webmanifest'])assert(fs.existsSync(path.join(root,'premierleague',asset)));
assert(html.includes("register('sw.js', {scope:'./'})"));
for(const file of ['sw.js','superlig-sw.js','premierleague/sw.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'));
console.log('PASS: 20 clubs, 380 fixtures, tie-breaks, FA Cup, neutral venues, 3 season transitions, European schedules, save isolation, syntax and assets.');
