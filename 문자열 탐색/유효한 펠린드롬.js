function solution(s) {
    let answer = "YES"
    s=s.toLowerCase().replace(/[^a=z]/g, ''); //소문자로 안되어있는 것은 다 빈문자로 처리
    for(let i=0 ;i<s.length/2;i++)
    {
        if(s[i]!=s[s.length-1-i])
        {
            answer="NO"
            break;
        }
    }
    return answer
}
let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));