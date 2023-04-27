import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  toshow = '0';
  data=this.toshow;
  writeToInput(value:string){
    if(this.toshow =='0')this.toshow = '';
    this.toshow = this.toshow + value;
  }
  addSign(value:string){
    var lastchar = this.toshow.charAt(this.toshow.length -1);
    if(lastchar === '-' || lastchar === '+' || lastchar === '/' ||lastchar === '*'){
      this.toshow = this.toshow.substring(0,this.toshow.length-1);
    }
    this.toshow +=value;
  }
  equal(){
    this.toshow = eval(this.toshow);
  }
  clearLast(){
    if(this.toshow.length>0 && this.toshow!=='0'){
        this.toshow = this.toshow.substring(0,this.toshow.length-1);
        console.log(this.toshow);
    }
  }
  clearall(){
    this.toshow = "0";
  }
}
