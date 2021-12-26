function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9]

    var answer = -1;
    let a=arr.filter(a=>numbers.includes(a)==0)
    console.log(a)
    answer=a.reduce((acc,cur)=>acc+cur)
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]))

//달다 너무 달아