import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @ViewChild('f') signUpForm!: NgForm;
  title = 'Template-Driven-Form-Submission';
  genders = ['Male','Female','Others'];
  submitted = false;
  user = {
    username:"",
    password:"",
    email:"",
    phone:"",
    answer:"",
    gender:"",
    job:"",
    jobDesccription:"",
    salary:"",
  }
   
  onSubmit(){
   this.submitted
    this.user.username = this.signUpForm.value.userData.username;
    this.user.password = this.signUpForm.value.userData.password;
    this.user.email = this.signUpForm.value.inportanInfo.email;
    this.user.phone = this.signUpForm.value.inportanInfo.phone;
    this.user.answer = this.signUpForm.value.otherInfo.answer;
    this.user.gender = this.signUpForm.value.otherInfo.gender;
    this.user.job= this.signUpForm.value.jobInfo.job;
    this.user.jobDesccription = this.signUpForm.value.jobInfo.jobDesccription;
    this.user.salary = this.signUpForm.value.jobInfo.salary;
  }
}
