class Counter {
  constructor() {
    this.data={}
  }
  add(num) {
    if (this.data[num] === undefined) {
      this.data[num] = 1;
    } else {
      this.data[num] += 1;
    }
  }
  get(num) {
    if (this.data[num] === undefined) {
      return 0;
    } else {
      return this.data[num];
    }
  }
}

function solution(weights) {
  const counter = new Counter();
  weights.sort((a, b) => a - b);
  console.log(weights);
  let result = 0;
  for (const weight of weights) {
    result += counter.get(weight);
    counter.add(weight);
    counter.add((weight * 4) / 3);
    counter.add(weight * 1.5);
    counter.add(weight * 2);
  }
  return result;
}
console.log(solution([100, 180, 200]));
//맞을 수 있는 합을 생각해 보자 그리고 그것을 더하자
