function solution(numbers) {
    let answer = Array.from({length:numbers.length},()=>-1)
    let stack = []
   for (let i = 0; i<numbers.length; i++) {
       while (stack && numbers[stack[stack.length-1]] < numbers[i] ) { //1 2 3 4
           answer[stack.pop()] = numbers[i]
       }
       console.log(answer)
       stack.push(i)  [0,1]
   }
   return answer
}
// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다
// 스택 활용 최대한 해보는 것