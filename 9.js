function solution(tickets) {

  tickets.sort((a,b) => a[1] - b[1]) // 하차시각 기준으로 오름차순으로 정렬
  
  let inspections = 1; // 초기 단속횟수
  let inspectionsTime = tickets[0][1]; // 첫 승객 하차시간


  // 모든 승객을 순회하면서 현재 단속 시간(inspectionsTime)보다 해당 승객의 승차 시각 (tickets[i][0])이 늦다면
  // 기존 단속시간으로 잡을수없으므로 단속횟수를 늘리고 기준시간을 갱신
  for(let i =0; i < tickets.length; i++) {
    if(tickets[i][0] > inspectionsTime) {
      inspections ++;
      inspectionsTime = tickets[i][1];
    }
  }
  return inspections;

}

console.log(solution([[8, 10], [3, 7], [1, 5], [2, 6]]));
console.log(solution([[1, 2], [3, 4], [5, 6]]));

