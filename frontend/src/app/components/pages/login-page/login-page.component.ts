import { Component, OnInit } from '@angular/core';                    // Import Statements: Import required modules and services.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({                                                         // Define a component for the login page.
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;                                            // 'loginForm' Property: Represents the form used for user login.
  isSubmitted = false;                                              // 'isSubmitted' Property: Keeps track of whether the form has been submitted.
  returnUrl = '';                                                   // 'returnUrl' Property: Stores the URL to redirect the user after successful login.
  constructor(                                                      // Constructor: Set up the component and inject necessary services.
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {                                               // 'ngOnInit' Method: Initialization hook, configures the login form and captures the 'returnUrl' from query parameters.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;  //This line captures the 'returnUrl' query parameter for post-login redirection to the original page.
  }

  get fc() {                                                     // 'fc' Getter: Shortcut to access form controls in the template.
    return this.loginForm.controls;
  }

  submit() {                                                     // 'submit' Method: Handles form submission, validates the form, and triggers user login.
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService
      .login({ email: this.fc.email.value, password: this.fc.password.value })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }
}
