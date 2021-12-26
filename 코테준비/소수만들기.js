function solution(nums) {
    var answer = 0;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(let i=0;i<nums.length;i++)
      for(let j=i+1;j<nums.length;j++)
        for(let k=j+1;k<nums.length;k++)
        {  let p=2 //나눌 인수
           let sum=nums[i]+nums[j]+nums[k];
           while(true)
           {
               if(sum%p==0)
               break;
               else
               {
                   if(p>sum/2)
                   {  console.log(sum)
                       answer++;
                       break;
                   }
                   p++;
               }
           }
        }
    
    return answer;
}
console.log(solution([1,2,3,4]))

//이건 좀 빡셌다 일단 조합하는 건 반복문 개수랑 비례 변수를 하나씩 증가시키면 된다
//소수구하기는 마지막 반복문에서 무한루프를 통해서 나타냈다

// 15/8= 1 나머지는 7
// 15/9= 1 나머지는 6
// 15/15= 1 나머지는 0 소수의 개념 1과 자기 자신만 가지는 수