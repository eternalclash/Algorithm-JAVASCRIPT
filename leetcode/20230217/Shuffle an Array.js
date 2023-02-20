var Solution = function(numbers) {
    this.numbers = numbers
}

Solution.prototype.reset = function () {
    return this.nums
}

Solution.prototype.shuffle = function () {
    const shuffled = this.nums.slice()
    const n = shuffled.length;
    const swap = (arr,i,j) => {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    for (let i = 0; i < n; i++) 
       swap(shuffled, i , Math.floor(Math.random() * n))
    return shuffled
}