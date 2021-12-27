function solution(s) {
    var answer = '';
    s=s.split("")
    console.log(s[0].charCodeAt())
    s.sort((a,b)=>b.charCodeAt()-a.charCodeAt())
    answer=s.join("")
    return String(answer);
}
console.log(solution("Zbcdefg"))