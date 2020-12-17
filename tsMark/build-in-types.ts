//  <T>  指的是使用泛型
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')


Math.pow(2, 2)


let body = document.body

let allLis = document.querySelectorAll('li')
allLis.keys()
document.addEventListener('click', () => {

})
// 定义 接口   里面定义数据项及类型
interface IPerson {
  name: string
  age: number
}
let zhz: IPerson = { name: 'zhz', age: 26 }
//   type 类型别名
//  TypeScript高级类型-Partial
type IPartial = Partial<IPerson>
let zhz2: IPartial = { name: 'zhz' }
type IOmit = Omit<IPerson, 'name'>
let zhz3: IOmit = { age: 20 }

//  Partial 类型的定义   参考文档  https://blog.csdn.net/roamingcode/article/details/104111165
/**
 * Make all properties in T optional
 */
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

