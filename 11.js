function solution(m, v) {
  m.sort((a, b) => a - b);
  v.sort((a, b) => a - b);

  let employee = 0; // 직원
  let gift = 0; // 선물
  let result = 0; // 만족한 직원수

  while (employee < m.length && gift < v.length) {
    if (m[employee] <= v[gift]) {
      result++;
      employee++;
      gift++;
    } else {
      gift++;
    }
  }

  return result;
}

console.log(solution([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));
console.log(solution([5, 10, 15], [5, 5]));
console.log(solution([2, 4], [1, 2, 3]));
