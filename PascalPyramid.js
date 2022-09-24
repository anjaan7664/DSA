function pyramid(arr) {
    let length = 0
    let temp = 0

    while (true) {
        if (length >= arr.length) {
            break
        }
        temp++
        length = length + temp
    }
    let start = 0;
    for (let i = 1; i <= temp; i++) {
        let str = ''
        for (let j = start; j < start + i; j++) {

            str = str + arr[j] + ','
            if (j >= arr.length - 1) {
                break
            }
        }
        start = start + i
        console.log(str)
    }

}
pyramid([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
