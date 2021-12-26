function solution(nums) {
    var answer = 0;
    let arr= []
    for(let i=0;i<nums.length;i++)
    {
        if(!arr.includes(nums[i]))
        arr.push(nums[i])
    }
    answer =arr.length>nums.length/2 ? nums.length/2 : arr.length
    return answer;
}
console.log(solution([3,1,2,3]))