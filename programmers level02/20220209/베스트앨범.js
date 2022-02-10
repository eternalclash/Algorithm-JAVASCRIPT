function solution(genres, plays) {
    var answer = [];
    let obj = {};
    let count = {};
    for (let i = 0 ; i<genres.length; i++)
        { 
           if(obj[genres[i]])
               {  
                   obj[genres[i]].push([i,plays[i]])
                   count[genres[i]]+=plays[i]
               }
            else
                {   obj[genres[i]]=[]
               obj[genres[i]].push([i, plays[i]])
               count[genres[i]]=plays[i]
                }
    }

    let countArr = [];
    for (let key in count)
    {
        countArr.push([key,count[key]])
        }

    countArr.sort((a, b) => b[1]-a[1])
  
    for (let j = 0; j < countArr.length; j++)
    {
        obj[countArr[j][0]].sort((a, b) => b[1] - a[1])
        answer.push(obj[countArr[j][0]][0][0])
        if(obj[countArr[j][0]][1][0])
        answer.push(obj[countArr[j][0]][1][0])
        }
  

    return answer; 
}
solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])