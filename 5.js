function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    const person = queue.shift();
    
    if (person % 2 === 0) {
      result.push(person);
    } else {
      queue.push(person);
      console.log(queue)
    }
  }
  return result;
}
console.log(solution([1, 3, 4], [6, 5, 8], 3));


// result 배열이 k명 보다 많아진다면 while문 종료
// person 이 짝수라면 result배열에 push하고 아니면 queue에서 shift 하고 queue에 다시 push
// 3개가되면 while문종료하고 result 배열반환
