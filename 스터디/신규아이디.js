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