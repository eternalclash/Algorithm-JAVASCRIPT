
function timeToNum(n) {
    return Number(n.split(":")[0])*60+Number(n.split(":")[1])
}
function solution(book_time) {
    book_time = book_time.map((e,idx)=>{
        return [timeToNum(e[0]),timeToNum(e[1])]
    })
    let arr = Array.from({length:timeToNum("23:59")+10},()=>0)
    for (book of book_time) {
        let [start,last] = book
        for (start; start<=last+9;start++) arr[start]++
    }
    return Math.max(...arr)
}

// 호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다. 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
// 예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.

// 시간에 최대한 겹치는 것이 정답