function solution(tickets) {

  tickets.sort((a,b) => a[1] - b[1])
  
  let inspections = 1; // 초기 단속횟수
  let inspectionsTime = tickets[0][1];

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

// 2번째 배열요소로 오름차순 정렬 해서 첫번쨰 값부터 시작
// inspections = 단속 횟수를 측정하는 변수를 선언
// 2번째 요소를 inspectionTime 단속시간으로 맞추고
// 만약 이 TICKETS배열의 첫번째 요소가 inspectionsTime보다 크다면 inspections를 올리고 inspectionTime을 바꿈