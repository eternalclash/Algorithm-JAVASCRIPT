function solution (a,b,v) {
  let day= (v-b-1)/(a-b)+1
  return day;
}
console.log(solution(100,99,1000000000))