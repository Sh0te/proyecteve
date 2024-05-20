import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrl: './log-form.component.scss'
})
export class LogFormComponent {
  constructor(private userService: ClienteService, private router: Router) { }
  userLog = {
    dni: null,
    password: null
  }

  onSubmit() {
    this.userService.login(this.userLog).subscribe(
      success => {
        console.log(success)
        if (success.success) {
          this.router.navigate(['/evebody']);
        } else {
          alert('DNI o contraseña incorrectos');
        }
      }
    );
  }
}
