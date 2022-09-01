function sort(arr) {
    for (let j = arr.length; j > 0; j--) {
        let noSwaps = true;

        for (let i = 0; i < j - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i],arr[i + 1]] = [arr[i + 1], arr[i]]
                noSwaps = false
            }

        }
        if (noSwaps)
            break;
    }
    return arr
}

sort([3, 35, 4, 66, 32, 3])
