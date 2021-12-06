function solution (line) {
    let answer=0;
    let sum =0;
  for(let i=0;i<line.length;i++)
  {
      if(line[i]>answer)
      {
          sum+=1;
          answer=line[i]
      }
  }
  return sum;
}
console.log(solution([130,135,148,140,145,150,150,153]))