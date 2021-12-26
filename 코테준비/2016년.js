function solution(a, b) {
    const date= ["FRI","SAT","SUN","MON","TUE","WED","THU",]
    var answer = '';
    const month=[31,29,31,30,31,30,31,31,30,31,30,31]
    let sum=-1;
    for(let i =0; i<a-1;i++)
        {   
            sum+=month[i]
        }
    sum+=b;
    console.log(sum)
    console.log(sum%7)
    answer=date[sum%7]
    return answer;
}
console.log(solution(5,24))