function solution(new_id) {
    let answer = new_id
    .toLowerCase() //소문자로 변환
    .replace(/[^\w-_.]/g,'') //2단계 나머지 모든 문자 제거 
    .replace(/\.{2,}/g,'.') // .{2,} .이 최소 2개 이상, 3단계 clear
    .replace(/^\.|\.$/g,'') //마침표 앞 뒤, 4단계 clear
    .replace(/^$/,'a') //5단계 clear
    .slice(0,15).replace(/\.$/,'') //\.$=>마지막 . 제거 //6단계 clear
    const length = answer.length;
     return length> 2 ? answer: answer + answer.charAt(length - 1).repeat(3 - length);

 }
// 4번째줄 알파벳,숫자,-,_,.만 포함 역으로 생각하자
 //g 전역검색
 //[^내용]이 내용과 맞지 않은 것들로
 // \w 문자,영어,숫자 매칭됌 (특수는안됌)
 // -_. 포함해야하므로

 //5번째줄 .이 두개 연속이면 . 하나
 //  \특수문자 => 특수문자를 단순문자로 판단함
 //  {n,m} n~m번 반복 m이 없으면 n이상 반복

 //6번째 줄 .이 처음이나 끝에 위치하면 제거
 // ^문자열 =>입력의 시작 문자열 배치
 // 문자열$ => 입력의 끝 문자열 배치
 // | =>or이라는 듯
 
 //7번째줄, 8번쨰 줄은 6번째 줄 응용

 //10번쨰줄, answer.charAt(length-1)=>맨마지막 글자, .repeat(3-length) 3글자가 될때까지 반복 length+x=3
