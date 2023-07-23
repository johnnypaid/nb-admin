import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({ email: '', password: '' });
  }

  submit(): void {
    // get cookies from backend - withCredentials: true, http only & frontend cannot access it
    this.authService.login(this.form.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
