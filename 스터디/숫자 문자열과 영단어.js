function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr)
        answer = arr.join(i);
     
    }

    return Number(answer);
}
console.log(solution("one4seveneight"))

//join()메서드는 배열의 모든 요소를 연결함
//const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"