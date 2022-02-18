function solution(record) {
    var answer = [];
    let obj = {};
    for (let i = 0 ; i<record.length ; i++)
        {
           let [msg,id,name]=record[i].split(" ");
            if(msg=="Enter")
                {
                    answer.push([id,'님이 들어왔습니다.'])
                }
            if(msg=="Leave")
                {
                    answer.push([id,'님이 나갔습니다.'])
                    continue;
                }
            obj[id]=name;
        }
  
      answer = answer.map((e,idx)=>obj[e[0]]+e[1])
    return answer;
}