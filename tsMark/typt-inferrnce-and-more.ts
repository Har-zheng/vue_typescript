
// 类型推断 ts会根据第一次赋值时的类型进行默认断言
let str = 'str'
str = '8'

// 联合类型
let numOfStr: string | number

numOfStr.toString()

// 类型断言
function getLength(input: string | number): number {
  const str = input as string // 断言
  if(str.length){
    return str.length
  }else{
    const number = input as number
    return number.toString().length
  }
}



function getLength2(input: string | number): number {
 if(typeof input === 'string'){
   return input.length
 }else{
   return input.toString().length
 }
}

