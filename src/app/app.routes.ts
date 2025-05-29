import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 

  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard-admin',
    loadComponent: () => import('./dashboard/admin/admin.component').then(m => m.AdminComponent)
  },
  {
    path: 'dashboard-employee',
    loadComponent: () => import('./dashboard/employee/employee.component').then(m => m.EmployeeComponent)
  },



  {
    path: 'dashboard-client',
    loadComponent: () => import('./dashboard/client/client.component').then(m => m.ClientComponent)
  }
];

/* {
        path: '',
        component: LayoutComponent
        children:
        [{path: 'dashboard', 
        component: DashboardComponent}]

    },*/