// interface
interface Person {
  readonly id: number;   // readonly   只可读
  name: string;
  age?: number;   // ? 表示可选可不选
  [propName: string]: any // 可以添加任意属性   任意值 
}
let zhz: Person = {
  id: 1,
  name: 'zhz',
  age: 25,
  bbb: 1,
  cc: 1
}
// zhz.id = 2