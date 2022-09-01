function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i] // 4
        let j = i - 1; // 2
                             9   >  4
        while(j >= 0 && arr[j] > currentVal){
            arr[j+1] = arr[j]
            j--
        }
        
        arr[j+1] = currentVal
      
        
    }
    return arr
}
insertion([2, 1, 9, 76, 4])
// 1 2 9 4
//