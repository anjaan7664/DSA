function sorting(arr) {
  
    for (let i = arr.length; i > 0; i--) {
    
        for (let j = 0; j < i - 1; j++) {
            total++
            if (arr[j] > arr[j + 1]) {
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        if (swap === false) {
            console.log('break')
            break;
        }
    }
    return arr
}
// sorting([34,5,2,5,67,5,45])
sorting([1, 2, 3, 4, 7, 5, 6, 8, 9, 10, 11])

