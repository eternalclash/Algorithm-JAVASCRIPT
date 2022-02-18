// const getCombination = (arr,n) => {
//     const result = [];
//     if(n === 1) return arr.map(e =>[e]);
//     arr.forEach((e,index,origin)=>{
//         const rest = origin.slice(index+1)
//         const combination = getCombination(rest, n - 1)
//         console.log(combination)
//         const attached = combination.map(combi => [e,...combi]);
//         result.push(...attached)
//     })
//     return result;
// }
// console.log(getCombination(['a','b','c'],2))
console.log([['b'], ['c']].map(combi => ['a',...combi]))