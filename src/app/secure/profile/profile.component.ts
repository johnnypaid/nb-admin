import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
    });
    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: '',
    });

    this.authService.user().subscribe((res) => {
      this.infoForm.patchValue(res);
    });
  }

  infoSubmit(): void {
    this.authService
      .updateInfo(this.infoForm.value)
      .subscribe((res) => Emitters.authEmitter.emit(res));
  }

  passwordSubmit(): void {
    this.authService
      .updatePassword(this.passwordForm.value)
      .subscribe((res) => console.log(res));
  }
}
