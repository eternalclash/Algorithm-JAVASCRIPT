

function solution (s) {
  s= s.replace(/[^\(\)\[\]]/g, "");  //괄호있는거만 남기기

  s=s.split(""); //괄호들 배열로 쪼개기
  console.log(s) 
  if(s.length==0)
  return console.log("Yes1") //괄호가 없으면 YES
  stack = [] ; //괄호들을 따로 넣어서 찾기
  
  for(let i =0 ;i<s.length;i++)
   {
      if(s[i]=="(" || s[i]== "[") {  //왼쪽 괄호일때
        
          stack.push(s[i])  //선입 선출 먼저 들어온 놈을 먼저 뺴야되는 구조
      }
      else  {  //괄호들만 있어서 ")", "]" 이것밖에 없음 오른쪽 괄호일 때
          if(stack[stack.length-1]=="["&&s[i]=="]") //스택의 마지막 인덱스
          stack.pop()
          else if(stack[stack.length-1]=="("&&s[i]==")")
          stack.pop()
          else
          return console.log("No2")
      }
   }
   
   
   if(stack.length==0) //스택이 비어있으면
   {
       return console.log("Yes3")
   }
   else //비어있지 않으면
   {
       return console.log("No4")
   }
  
}

// console.log(solution("abcdef//"))
solution("So when I die (the [first] I will see in (heaven) is a score list).")
solution("[ first in ] ( first out ).")
solution("Half Moon tonight (At least it is better than no Moon at all].")
solution("A rope may form )( a trail in a maze.")
solution("Help( I[m being held prisoner in a fortune cookie factory)].")
solution("([ (([( [ ] ) ( ) (( ))] )) ]).")
solution(".")