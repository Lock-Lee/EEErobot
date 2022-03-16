import { Injectable, OnInit } from '@angular/core';
const Microgear: any = window;
var microgear = Microgear.Microgear.create({
  key: 'ytTiLr96001CS7E',
  secret: 'Sx7pxAKVUqzBsWC5cd6qzSU1a',
  alias: 'Ionic' /*  optional  */,
});
@Injectable({
  providedIn: 'root'
})
export class MicrogearService implements OnInit{
  public status_con
  constructor() {
     microgear.connect('RobotCarEEE');

  microgear.on('connected', () => {
    microgear.subscribe('/RobotCar/+');
  });
  this.present() } 
   ngOnInit(){
    this.present()
  
  }
  public  present  =  () => {
    microgear.on('present', (event) => {
     
      this.status_con = String(event.type)
    
      
    });
    return  this.status_con
  };
  message = (value) => {
    microgear.on('message', (topic, msg) => {
      value({ topic: topic, message: msg });

      console.log(msg);
    });
  };

  publish = (topic, message) => {
    microgear.publish('/RobotCar' + topic, message);
  };
}

