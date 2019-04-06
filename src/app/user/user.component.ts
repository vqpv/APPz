import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {

  constructor() { }

  checkNum: string;
  isEnabled: boolean;
  showSelected: boolean = false;

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onVerifyChange(event: any) {
    if (this.checkNum.length == 13 ) {
        this.isEnabled = true;
    }
    else {
        this.isEnabled = false;
    }
}
checkIsEnabled() {
  return !this.isEnabled;
}
   ToggleButton() {
      this.showSelected = !this.showSelected;
   }

  ngOnInit() {
  }

}
