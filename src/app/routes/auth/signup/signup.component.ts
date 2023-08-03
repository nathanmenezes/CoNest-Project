import { Component } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: User ={
    nickname: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf: ''
  };
  showPassword = "password";
  hide: any;
  step: number = 1;

  constructor(private service: UserService, private cookieService: CookieService, private router: Router) {
  }

  onSubmit() {
    if(this.user.email.length == 0 || this.user.password.length == 0 || this.user.nickname.length == 0){
      alert("Preencha todos os campos antes de ir para o próximo passo!")
    }else{
      console.log('Form submitted', this.user);
      this.service.saveUser(this.user).subscribe(resp =>{
        console.log(resp);
        this.cookieService.set('jwtToken', resp.token);
        this.step++;
      },
        error => alert(error.error.body))
    }
  }

  nextStep() {
    if(this.step != 2 && this.step < 3){
      if(this.user.cpf.length == 0 || this.user.firstName.length == 0 || this.user.lastName.length == 0){
        alert("Preencha todos os campos antes de ir para o próximo passo!")
      }else{
        this.step++;
      }
    }
  }
}
