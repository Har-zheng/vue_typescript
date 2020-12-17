// class Anmal {
//   constructor(parameters) {
    
//   }
// }
interface Radio {
  switchRadio(trigger:boolean):void;  // 不返回任何值
}
interface Battery{
  checkBatteryStatus():void;
}
// 定义一个类对应接口  
// 和之前的 extends相比 implements 可定进行多个接口的对应
class Car implements Radio {
  switchRadio(trigger:boolean){

  }
}

interface RadioWithBattery extends Radio{
  checkBatteryStatus():void;
}

class Cellphone implements Radio,Battery{
  switchRadio(trigger:boolean){

  }
  checkBatteryStatus(){

  }
}