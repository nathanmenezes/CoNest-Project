import { Component } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
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
    if(this.user.email.length == 0 || this.user.password.length == 0){
      alert("Preencha todos os campos para fazer login!")
    }else{
      console.log('Form submitted', this.user);
      this.service.login(this.user).subscribe(resp =>{
          console.log(resp);
          this.cookieService.set('jwtToken', resp.token);
          this.router.navigate(['/']);
        },
        error => alert(error.error.body))
    }
  }
}
