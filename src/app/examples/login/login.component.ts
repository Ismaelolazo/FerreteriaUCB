import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
 
    login = {
        usuario: null,
        contrasena: null
    }
    data : Date = new Date();
    focus;
    focus1;

    constructor(private loginService: LoginServiceService, private router: Router) { }


    loginUsuario() {
        this.loginService.loginUsuario(this.login).subscribe (
          datos => {
            if(datos['resultado'] == 'OK') {
              alert(datos['mensaje']);
              // Después de un inicio de sesión exitoso
              this.router.navigate(['/examples/profile']);
            } else {
              alert(datos['mensaje']);
            }
          }
        );
      }
    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
