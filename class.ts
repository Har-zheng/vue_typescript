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