function solution(strings, n) {
    return strings.sort().sort((a,b) => a.charCodeAt(n) - b.charCodeAt(n));
}
//문자열은 덧셈만

function outer() {
    let name = 'kyle';
    if (true) {
      let city = 'seoul';
      return function inner() {
        console.log(city);
      };
    }
  }