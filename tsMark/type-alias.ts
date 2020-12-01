
// type alise  类型别名
let sum: (x: number, y: number) => number


const result = sum(1, 2)

type PlusType = (x: number, y: number) => number

let sum2: PlusType

const result2 = sum2(2, 3)

type StrOfnum = string | number

let result3: StrOfnum = '123'

result3 = 123

const str: 'name' = 'name'

const number: 1 = 1 
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere:Directions = 'Left'

interface IName {
  name: string
}

type IPerson = IName & {age: number}
let person: IPerson = {name: '12', age: 123}