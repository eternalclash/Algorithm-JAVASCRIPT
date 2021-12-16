function solution(n,k)
{
  let arr= Array.from({length:n},()=>new Array(n))  //1차원길이, 그 다음 요소안에 또 배열
  let answer=Array.from({length:n*n},()=> 0)
  let c = 0
  for(let i=0;i<n;i++)
  {  
      for(let j=0;j<n;j++)
      {
        arr[i][j]=(i+1)*(j+1)
        answer[c]=arr[i][j];
        c++
      }
    
  }
  answer.sort(function(a,b){return a-b})
  return answer[k-1]
  
}

console.log(solution(3,7))