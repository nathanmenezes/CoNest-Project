import { Component } from '@angular/core';
import {Ong} from "../../../model/ong";
import {OngService} from "../../../service/ong.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ong-register',
  templateUrl: './ong-register.component.html',
  styleUrls: ['./ong-register.component.scss']
})
export class OngRegisterComponent {

  constructor(private service:OngService, private route:Router) {
  }

  ong: Ong = {
    name: '',
    description: '',
    tourLink: '',
    category: '',
    cnpj: ''
  }

  onSubmit() {
    if(this.ong.name.length == 0 || this.ong.description.length == 0 || this.ong.tourLink.length == 0 || this.ong.category.length == 0 || this.ong.cnpj.length == 0){
      alert("Preencha todos os campos antes de ir para o próximo passo!")
    }else{
      console.log('Form submitted', this.ong);
      this.service.saveOng(this.ong).subscribe(resp =>{
        console.log(resp);
        this.route.navigate(['/']);
      },
        error => alert(error.error.body))
    }
  }

  protected readonly window = window;
}
