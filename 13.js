function checkGlass(glass, mid, k) {
  let brokenCount = 0;

  for (let i = 0; i < glass.length; i++) {
    if (glass[i] <= mid) {
      brokenCount++;
    } else {
      brokenCount = 0;
    }

    if (brokenCount >= k) {
      return false;
    }
  }
  return true;
}

function solution(glass, k) {
  let start = 1; // 최소 사람수
  let end = 200000000;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (checkGlass(glass, mid, k)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

console.log(solution([5, 3, 1, 2, 1, 3, 5], 3));
console.log(solution([4, 2, 2, 1, 4], 2));

/**
 * 한줄 요약
 * 사람 수를 기준으로 이분 탐색하면서,
 * 해당 인원이 지나갔을 때,
 * 연속 k개의 유리판이 깨지는지 판정한다.
 */
