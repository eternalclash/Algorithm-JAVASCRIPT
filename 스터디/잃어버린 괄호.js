function solution (s) {
//    s=s.split("-")
   s=s.split("-")   //["50","50+40","30"]
   let sum=0;
   for(let i = 0 ; i<s.length;i++)
   {
       if(s[i].indexOf("+")>0)
       if(i!=0)
       {  let arr = [];
           arr=(s[i].split("+"))
           for(let j=0; j<arr.length;j++)
             arr[j]=Number(arr[j])
             s[i]=(-1)*arr.reduce((acc,curr)=>acc + curr,0)
        
       }  
       else{
        let arr = [];
        arr=(s[i].split("+"))
        for(let j=0; j<arr.length;j++)
          arr[j]=Number(arr[j])
          s[i]=arr.reduce((acc,curr)=>acc + curr,0)
       }
       else
       if(i==0)
       { 
         s[i]=Number(s[i])

       }  
       else
       { 
        s[i]=(-1)*Number(s[i])
      
      }  
   }
   return s.reduce((acc,curr)=>acc+curr,0)
}

console.log(solution("55-50+40-70"))
console.log(solution("10+20+30+40"))
console.log(solution("00009-00009"))