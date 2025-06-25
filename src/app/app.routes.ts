import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoverPasswordComponent } from './pages/auth/recover-password/recover-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DASHBOARD_ROUTES } from './dashboard/dashboard.routes';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'dashboard', 
    component: DashboardComponent,
    children: DASHBOARD_ROUTES },
  { path: 'pages/auth/login', component: LoginComponent },
  { path: 'pages/auth/register', component: RegisterComponent },
  { path: 'pages/auth/recover-password', component: RecoverPasswordComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
