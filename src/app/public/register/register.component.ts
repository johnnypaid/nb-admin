import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
    });
  }

  submit(): void {
    // console.log(this.form.value);

    this.authService.register(this.form.value).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
