import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      let username = this.loginForm.value.username!;
      localStorage.setItem('username', username);

      this.loginService.authorizationHeader().subscribe(data => {
        console.log(data);
      });

      this.loginService.noHeader().subscribe(data => {
        console.log(data);
      });
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
