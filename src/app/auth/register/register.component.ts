import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    /* this.registrationForm = new FormGroup(
      {
        username: new FormControl('David', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        cpassword: new FormControl(null, [Validators.required]),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      this.passwordMatchingValidator
    );
    */
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      cpassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    });
  }
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('cpassword').value
      ? null
      : {
        notmatched: true,
      };
  }

  //Getter methods for form control
  get username() {
    return this.registrationForm.get('username') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get cpassword() {
    return this.registrationForm.get('cpassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  userData(): User {
    return this.user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    };
  }
  onSubmit() {
    //console.log(this.registrationForm.value);
    //  this.user = Object.assign(this.user, this.userData());
    // localStorage.setItem('CurrentUser', JSON.stringify(this.user));
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
  }
}
