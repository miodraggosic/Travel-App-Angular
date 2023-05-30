import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { take } from 'rxjs';
import { SignUp } from 'src/app/models/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z]+/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z]+/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormGroup(
      {
        newPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\S+$/),
        ]),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: this.checkPassword() }
    ),
    role: new FormControl('user'),
    country: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    const user: SignUp = this.userForm.value;
    this.auth
      .signUp(user)
      .pipe(take(1))
      .subscribe(() => {});
  }

  private checkPassword() {
    return (control: AbstractControl): ValidationErrors | null => {
      const getNewPassword = control.get('newPassword');
      const getConfirmPassword = control.get('confirmPassword');

      const isSame =
        getNewPassword?.value === getConfirmPassword?.value ? true : false;

      return isSame ? null : { notSame: true };
    };
  }
}
