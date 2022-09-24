function pivot(arr, start=0, end=arr.length) {
    let pivot = arr[start]
    let swapIndex = start
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex],arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    [arr[start],arr[swapIndex]] = [arr[swapIndex], arr[start]]
    return swapIndex

}
function sorting(arr, left=0, right=arr.length - 1) {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        sorting(arr, left, pivotIndex - 1)
        sorting(arr, pivotIndex + 1, right)
    }
    return arr

}
sorting([10, 4, 8, 2, 1, 5, -3, 55])
// 
