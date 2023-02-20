var topKFrequent = function(nums, k) {
    let obj = {}
    for (num of nums) {
        if(obj[num]) obj[num]++
        else obj[num] = 1
    }
    let arr = Object.entries(obj).sort((a,b)=>b[1]-a[1])
    console.log(arr)
    let answer =[]
    let count = 0
    for (a of arr) {
       if(count < k) answer.push(a[0])
       count++
    }
    return answer
};