import { Component } from '@angular/core';
import { UserService } from '../../service/user.service.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.scss'
})
export class SignFormComponent {
  constructor(private userService: UserService, private router: Router) { }
  user = new User(
    undefined, undefined, undefined, "", "", "", 0, "", 0, "", "", ""
  );

  passwordconfirm = "";

  passwordsMatch(): boolean {

    if (this.user.password === this.passwordconfirm) {
      return true;
    } else {
      alert('Asegurate de que la contraseña sea la misma');
      return false;
    }
  }

  insert() {
    if (this.passwordsMatch()) {
      console.log(this.user)
      this.userService.insertUsers(this.user).subscribe(resultado => {
        if (!resultado['insert']) {
          alert('Error al insertar los datos del usuario');
        } else {
          this.router.navigate(['/evebody'])
        }
      })
    } else {
      console.log('Asegurate de que la contraseña sea la misma');
    }
  }
}
