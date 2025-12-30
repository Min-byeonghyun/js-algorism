function solution(n, speeds) {
  let left = 1; // 최소 가능한 시간
  let right = Math.max(...speeds) * n; // 최악의 경우 시간
  let answer = right;

  while (left <= right) {
    // left가 right보다 크다면 더이상 좁힐게없으니까 종료
    let mid = Math.floor((left + right) / 2); // 현재 가정한 시간

    let total = 0;
    for (let time of speeds) {
      total += Math.floor(mid / time); // 각 기계가 mid 시간 동안 만들 수 있는 개수를 누적
    }
    if (total >= n) {
      // mid 시간으로 n개 생산이 가능하므로, 더 짧은 시간도 가능한지 확인
      answer = mid; // 정답 후보 저장
      right = mid - 1; // 더 짧은 시간 탐색
    } else {
      // mid 시간으로는 n개 생산이 불가능하므로, 더 많은 시간이 필요
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(8, [5, 9]));
console.log(solution(6, [7, 10]));
