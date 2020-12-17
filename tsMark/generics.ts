// 泛型
function echo<T>(arg: T): T {
  return arg
}
// const str:string = result: 'str'
const result: Boolean = echo(true)

// 多个泛型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['str', 12])
result2[1]


function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
  length: number 
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const strs = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])
// echoWithLength()
// :T 定义类型
class Queue<T>{
  private data = [];
  push(item:T){
    return this.data.push(item)
  }
  pop():T{
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed())
console.log(queue.pop())
// 接口和 泛型 的结合使用
interface KeyPair<T, U> {
  key: T,
  value:U
}
let kp1: KeyPair<number, string> = {key:1, value: 'string'}
let kp2:KeyPair<string, number> = {key:'str', value:2 }
// 定义一个数组的子为数字类型
let arr: number[] = [1,2,3]
// 同上
let arrTwo:Array<number> = [1,2]
