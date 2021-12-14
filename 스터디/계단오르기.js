
function findMax(a,b){
    if(a>b)
    return a;
    else
    return b;
}
function solution (s) {
  let arr =Array.from({length:s.length},()=>0)  //({length지정},()=>0==값지정)
  arr[0] = s[0];
  arr[1] = findMax(s[0]+s[1],s[1])
  arr[2] = findMax(s[0]+s[2],s[1]+s[2])
  for (let i=3 ; i<s.length ; i++)
   {
       arr[i]= findMax(arr[i-2]+s[i],arr[i-3]+s[i-1]+s[i])
   }

return arr[arr.length-1]
}

console.log(solution([10,20,15,25,10,20]))