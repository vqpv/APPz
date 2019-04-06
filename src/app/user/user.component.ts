import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {

  constructor() { }

  checkNum: string;
  isenabled: boolean;
  
  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onVerifyChange(e) {
    if (this.checkNum.length == 13 ) {
        this.isenabled = true;
    }
    else {
        this.isenabled = false;
    }
}
checkIsEnabled() {
  return !this.isenabled;
}
  ngOnInit() {
  }

}
