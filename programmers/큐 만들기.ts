// 두 개의 포인터를 활용하여 큐를 만들자
// 큐를 구현하기 위해 클래스 생성
// 큐의 크기는 투 포인터를 활용하여 나타냄 rear-front+1을 만족하는 것을 알 수 있음
interface IQueue{
    [key:string] : number
}
class Queue {
     storage:IQueue;
     front:number;
     rear:number;
    constructor(){
        this.storage = {}
        this.front = 0;
        this.rear= 0;
    }
    size():number {
        if (this.storage[String(this.rear)] === undefined) {
            return 0
        }
        else {
            return this.rear - this.front + 1
        }
    }
    add(value:number):void {
        if (this.size() === 0) {
            this.storage['0'] = value;
        }
        else {
            this.rear +=1;
            this.storage[String(this.rear)] = value;
        }
    }
    popleft() {
        let temp:number;
        if (this.front === this.rear) {
            temp = this.storage[String(this.front)]
            delete this.storage[String(this.front)]
            this.front = 0;
            this.rear = 0;
        }
        else {
            temp = this.storage[String(this.front)];
            delete this.storage[String(this.front)];
            this.front +=1
        }
        return temp ;
    }
}

const queue = new Queue()
queue.add(3)
queue.add(5)
queue.popleft()
console.log(queue)

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ test: string; }'.
// 객체 인터페이스를 지정할 때 key,value의 타입을 지정해주면 된다