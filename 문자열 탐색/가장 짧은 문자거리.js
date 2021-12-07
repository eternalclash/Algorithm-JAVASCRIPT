function solution (s,w)
{   let answer=[];
   let distance =0;
   for(let i=0;i<s.length;i++)
   {
       if(s[i]==w)
       {
           distance =0;
           answer.push(distance)
       }
       else
       {   
           distance++;

           answer.push(distance)
       }
   }
   for(let i=s.length-1;i>=0;i--)
   {
       if(s[i]==w)
       {
           distance =0;
           
       }
       else
       {   
           distance++;

           if(answer[i]>distance)
           answer[i]=distance
       }
   }
   return answer;
}
console.log(solution("teachermode" ,"e"))