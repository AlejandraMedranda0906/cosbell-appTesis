/*import { Component, inject } from '@angular/core'; //INICIOOOO
//import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
//import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';*/   //FINAAL



/* @Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html'
 // styleUrls: ['./login.component.css'],
 //imports: [ReactiveFormsModule]
})

export class LoginComponent {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router)

  email: string = '';
  password: string = '';
  error: string = '';

*/


/*@Component({        //INICIO DEL QUE SI SERVIA
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onLogin() {
    this.formLogin.markAllAsTouched();

    if (this.formLogin.invalid) {
      return;
    }

    this.authService.login(this.formLogin.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        alert('Inicio de sesión exitoso');

        // Redirección exacta según los roles del backend
        switch (res.role) {
          case 'ADMIN':
            this.router.navigate(['/admin']);
            break;
          case 'EMPLOYEE':
            this.router.navigate(['/empleado']);
            break;
          case 'CLIENT':
            this.router.navigate(['/cliente']);
            break;
          default:
            alert('Rol no reconocido');
            break;
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error de login: ' + (err.error?.message || 'Error desconocido'));
      }
    });
  }
}*/   //esteee es el final de que si servia




/*   constructor(private authService: AuthService, private router: Router) {}
// intento de logica
  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        const role = res.role;
        if (role === 'ADMIN') this.router.navigate(['/dashboard/admin']);
        else if (role === 'CLIENTE') this.router.navigate(['/dashboard/client']);
        else if (role === 'EMPLEADO') this.router.navigate(['/dashboard/employee']);
        else this.error = 'Rol no reconocido';
      },
      error: () => {
        this.error = 'Credenciales incorrectas';
      }
    });
  } */



    /* INTENTO 222222      import { Component, OnInit } from "@angular/core";
import { UserService } from "./app/services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data) {
    this.user.changeData(data);*/
  
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onLogin() {
    this.formLogin.markAllAsTouched();

    if (this.formLogin.invalid) {
      return;
    }

    this.authService.login(this.formLogin.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        alert('Inicio de sesión exitoso');

        // Redirección exacta según los roles del backend
        switch (res.role) {
          case 'ADMIN':
            this.router.navigate(['/dashboard-admin']);
            break;
          case 'EMPLOYEE':
            this.router.navigate(['/dashboard-employee']);
            break;
          case 'CLIENT':
            this.router.navigate(['/dashboard-client']);
            break;
          default:
            alert('Rol no reconocido');
            break;
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error de login: ' + (err.error?.message || 'Error desconocido'));
      }
    });
  }
}
