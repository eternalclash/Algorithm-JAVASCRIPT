function solution(a,b) { 
let arr = [];
for(let i =0 ;i<a.length;i++)
{
    if(a[i]<b[i])
    {
       if(a[i]==1&&b[i]==3)
       {
        arr.push("A")
        continue;
       }
   
       arr.push("B")
    }
    else if (a[i]==b[i])
    {
       arr.push("D")
    }
    else
    {
        if(a[i]==3&&b[i]==1)
        {
            arr.push("B")
            continue;
        }
    
        arr.push("A")
    }
} 
return arr;
}
console.log(solution([2,3,3,1,3],[1,1,2,2,3]))
//1:가위,2:바위,3:보