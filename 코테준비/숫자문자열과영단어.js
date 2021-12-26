function solution(s) {
  let number = ["zero","one","two","three","four","five","six","seven","eight","nine"]

  for(let i=0;i<number.length;i++)
  { 
    if(s.includes(number[i]))     //s=one4sevenone
    {
      s=s.replace(number[i],i)   //s=14sevenone
      if(s.includes(number[i]))
        {
          i-=1;
          
        }
    }
  }
  return Number(s)


}
console.log(solution("one4sevenone"))

//배열 만들기 운영이 괜찮은 거 같다 
//반복문 재귀를 이용해서 풀면 된다 
// zero~nine을 돌려서 있으면 replace로 바꾸고 바꾼다음에도 존재하면 i를 전에 숫자로 밀기