import { Constants } from './../../shared/utils/Constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string;
  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Sistema Ticket';
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('valid');
      this.router.navigate(['menu']);
    }
  }
}
