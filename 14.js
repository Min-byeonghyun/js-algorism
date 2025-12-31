// DFS
function solution(n, stations) {
  let answer = 0;

  let visited = Array.from({ length: n }, () => 0);

  function dfs(station) {
    visited[station] = 1; 
  
    for(let i=0; i <n; i++) {     // [1,0,1]
      if(stations[station] [i] === 1 && visited[i] === 0) {
        dfs(i)
      }
    }
  }

  for(let i=0; i < n; i++) {
    if(visited[i] === 0) {
      dfs(i);
      answer++;
    }  
  }
  return answer
}

console.log(
  solution(3, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
console.log(
  solution(4, [
    [1, 1, 1, 0],  
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);

// stations[station] [i] === 1 연결되어있는거 찾는 조건
// visited[i] === 0  조건이 들어간 이유는 이 i번은 네트워크에 아직 포함되지 않았음.