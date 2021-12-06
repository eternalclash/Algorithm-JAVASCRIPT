function solution (a) {
    let check = 0;
    let sum = 0;
   for(let i=0 ;i<a.length;i++)
   {
       if(a[i]==0)
       {
           check =0;
       }
       else{
           check+=1;
           sum+=check;
        
       }
   }
   return sum;
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]))