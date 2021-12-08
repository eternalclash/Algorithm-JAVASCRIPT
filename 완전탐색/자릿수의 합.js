function solution (s)
{  let answer=1;
    let find= 0;
   for(let i=0;i<s.length;i++)
   {
       if(answer<s[i]/100+(s[i]/100)%10+s[i]%10)
       {
        answer=Math.floor(s[i]/100)+Math.floor((s[i]/10)%10)+Math.floor(s[i]%10)

        find=s[i]
       }
       
   }
   return find;
}
console.log(solution([128,460,503,40,521,137,123]))