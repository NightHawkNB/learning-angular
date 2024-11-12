import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DashboardLayoutComponent } from './container/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './pages/login/login.component';
import {ChangePasswordComponent} from "./pages/change-password/change-password.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "dashboard",
    component: DashboardLayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "employee", component: EmployeeComponent },
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
