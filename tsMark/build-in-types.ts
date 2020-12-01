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

interface IPerson {
  name: string
  age: number
}
let zhz: IPerson = { name: 'zhz', age: 26 }
type IPartial = Partial<IPerson>
let zhz2: IPartial = {name :'zhz'}
type IOmit = Omit<IPerson, 'name'>
let zhz3: IOmit = {age:20}

