//0이라는 것의 대한 개념 1등에 가깝게 => 0이 당첨 숫자랑 맞는다는 가정, 꼴등에 가깝게 => 0은 그냥 0으로 두어서 당첨이 안되 게
//lottos: 내가 산 숫자, win_nums: 당첨 숫자 , result [최고등수, 최저등수]
function solution(lottos, win_nums) {
    var answer = [];
    //받은 lottos 숫자와 win_nums랑 비교
    //최대한 논리와 간결하게
    //변수 선언, 값 할당 최소화
    let zero = lottos.length;
    let num= 0;
    lottos = lottos.filter((a)=>a!=0);
    zero-=lottos.length;  //처음 입력 값 length - 0을 제외한 length = 0에 대한 length (개수)
    
    for(let i=0;i<lottos.length;i++)
    {
        for(let j=0;j<win_nums.length;j++)
        {
            if(lottos[i]==win_nums[j])
            {num++;
            break;
             //로또 숫자는 중복된 숫자가 아니므로 break문으로 연산을 줄임
            }
        }
    }
    //1등 6개, 2등 5개, ... 즉 7에서 갯수빼면 등수로 반환됨(이게 맞나?)
   
    if(num==0)
        {   if(zero==0)
            answer.push(6)
            else
            answer.push(7-zero)
            answer.push(6)
        }
    else
        { 
            answer.push(7-num-zero)
                answer.push(7-num)
        }

    return answer;
}

console.log(solution([44,1,0,0,31,25],[31,10,45,1,6,9]))

//찾은 깔끔한 답

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
//당첨순위를 적고 filter를 통해서 찾는 것 실행문에 includes메소드를 이용하는 것 정말 깔끔하다