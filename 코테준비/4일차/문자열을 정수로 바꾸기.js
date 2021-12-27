function solution(s) {
    var answer = 0;
    s=s.split("")

    console.log(s)
    answer = s[0]== "-" ? Number(s.join("")) :  Number(s.join(""))
    return answer;
}
console.log(solution("1234"))