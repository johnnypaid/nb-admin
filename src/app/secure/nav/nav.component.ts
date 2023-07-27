import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  logout(): void {
    this.authService.logout().subscribe((res) => console.log(res));
  }
}
