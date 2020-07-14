import { StorageService } from './../../shared/services/storage/storage.service';
import { MessageService } from './../../shared/services/message/message.service';
import { LoginService } from './../../shared/services/login/login.service';
import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title: string;
  hide = true;
  loginForm: FormGroup;
  errorLogin: boolean;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private messajeService: MessageService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.errorLogin = false;
    this.title = 'Sistema Ticket';
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userAuth = {
        username: this.loginForm.get('username').value,
        pass: this.loginForm.get('pass').value,
      };
      this.loginService.login(userAuth).subscribe((data) => {
        if (data.status === 200) {
          this.storageService.setUserSession(data.body);
          this.errorLogin = false;
          this.router.navigate(['menu']);
        } else if (data.status === 204) {
          this.errorLogin = true;
          setTimeout(() => { this.errorLogin = false; }, 4000);
        }
      });
    }
  }
}
