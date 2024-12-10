/**
 * Score 170
 * 1839 ops/s
 * Complejidad cognitiva: 3
*/
function cyberReindeer(road, time) {
  const minTime = Math.min(time, 5);
  let currentRoad = `.${road.slice(1)}`;
  const firstFenceAt = road.indexOf('|');
  const race = [road];
  for(let i=1; i<minTime; i+=1){
    const min = Math.min(i, firstFenceAt-1);
    race.push(
      `${currentRoad.substring(0,min)}S${currentRoad.substring(min+1)}`
    );
  }
  currentRoad = currentRoad.replaceAll('|', '*');
  for(let i=firstFenceAt; i<time-minTime+firstFenceAt; i+=1){
    race.push(
      `${currentRoad.substring(0,i)}S${currentRoad.substring(i+1)}`
    );
  }
  return race;
}
