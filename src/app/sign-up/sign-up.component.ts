import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent {
  @ViewChild('f') signupForm: NgForm;
  displayForm = true;
  firstName = '';

  constructor() { }

  onSubmit(){
    this.displayForm = false;
    this.firstName = this.signupForm.value['fname'];
  }

  onReset(){
    this.signupForm.reset();
  }

}
