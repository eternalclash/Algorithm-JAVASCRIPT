function solution(cap, n, deliveries, pickups) {
    let give = 0 ;
    let get = 0 ;
    let answer = 0;
    for (let i = deliveries.length-1; i >= 0 ; i--) {
       if(deliveries[i]!=0 || pickups[i]!=0) {
          let count = 0
          while(give < deliveries[i] || get < pickups[i]) {
             count++
             give += cap;
             get += cap;
          }

          give -= deliveries[i]
          get -= pickups[i]
          answer = answer + (i+1)*count*2
       }
     }
    return answer
}

//이게 왜 level2?
//아이디어가 없다면 단순 그리디로 풀어야 할 것 같았던 문제이다
//맨 뒤에 있는 집부터 배달,수거할 수 있는 capacity와 비교하여 최소 거리를 계산해야 했던 문제이다