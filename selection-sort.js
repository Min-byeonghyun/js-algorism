function selectionSort(array) {
  const n = array.length;

  for(let i = 0 ; i < n ; i ++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i ) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }
  return array;
}

console.log(selectionSort([77, 41, 6, 4, 3, 2]));

/**
 * i번째 값을 최솟값이라고 가정한다
 * i+1부터 끝까지 순회하면서 더 작은 값이 있으면 minIndex를 갱신한다
 * 순회가 끝나면, i번째 값과 진짜 최솟값(minIndex)을 swap한다
 * 다음 회차에서는 i를 하나 증가시켜 같은 과정을 반복한다
 * 모든 회차가 끝나면 정렬된 array를 반환한다
 */
