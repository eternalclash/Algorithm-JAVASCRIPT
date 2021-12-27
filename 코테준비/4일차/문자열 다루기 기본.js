function solution(s) {
    var answer = true;
    if(!isNaN(s)&&!s.includes("e")&&(s.length==4||s.length==6))
        return true;
    else
        return false;

}
console.log(solution("4e445"))

//e를 지수 e로 판단하기 때문에 isNaN에서 false로 나온다