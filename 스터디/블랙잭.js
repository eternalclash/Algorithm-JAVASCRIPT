function solution (arr,num) {
   let sum=0;
   for(let i=0 ;i<arr.length;i++)
    for(let j=0; j<arr.length;j++)
      for(let k=0; k<arr.length;k++)
      {
          if(j==k||k==i||i==j)
          continue

          if(arr[i]+arr[j]+arr[k]>sum&&arr[i]+arr[j]+arr[k]<num)
          sum=arr[i]+arr[j]+arr[k]
      }
      return sum
}

console.log(solution([93,181,245,214,315,36,185,138,216,295],500))