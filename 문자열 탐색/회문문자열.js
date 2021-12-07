function solution(s) {
    let answer=true;
  for(let i=0;i<s.length/2;i++)
  {
      if(s[i]==s[s.length-1-i])
      {
        continue;
     
      }
      
      answer=false;
  }
  if(answer)
  return console.log("YES")
  else
  return(console.log("NO"))
}
solution("goog")
