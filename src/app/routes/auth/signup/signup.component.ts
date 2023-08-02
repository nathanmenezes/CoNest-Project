import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = {
    nickname: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf:''
  };
  showPassword = "password";
  hide: any;

  onSubmit() {
    console.log('Form submitted', this.user);
    // Aqui você pode adicionar lógica para enviar os dados para o servidor
  }
}
