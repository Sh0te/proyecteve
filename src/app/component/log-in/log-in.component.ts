import { Component } from '@angular/core';
import { UserService } from '../../service/user.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  constructor(private userService: UserService, private router: Router) { }
  singIn = true;
  title = false
  changeSingIn() {
    this.singIn = !this.singIn;
  }
  changeTitle() {
    this.title = !this.title;
  }
  ngOnInit(): void {
  }
}
