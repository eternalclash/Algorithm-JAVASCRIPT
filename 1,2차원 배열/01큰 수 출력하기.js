function solution(n,a) {
    let arr = [];
    for (x of a)
    {
        if(x>=n)
         arr.push(x)
    }
    return arr;
}
const text= [7,3,9,5,6,12]
console.log(solution(6,text))