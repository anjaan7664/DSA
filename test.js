function pivot(arr, start, end) {
  let pivot = arr[start]
  let swapIndex = start
  for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
          swapIndex++
          [arr[i],arr[swapIndex]] = [arr[swapIndex], arr[i]]
      }

  }
  [arr[swapIndex],arr[start]] = [arr[start], arr[swapIndex]]
  return swapIndex

}

function mergeSort(arr, start=0, end=arr.length) {
  if (start < end) {

      let swapIndex = pivot(arr, start, end)
      mergeSort(arr, start, swapIndex - 1)
      mergeSort(arr, swapIndex + 1, end)
  }
  return arr
}

mergeSort([3, 5, 4, 6, 2, 1])
// 3,4,
//1,2