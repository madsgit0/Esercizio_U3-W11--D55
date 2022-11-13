import { AuthService } from './auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  template: `
  <form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Favorite food</mat-label>
    <input matInput placeholder="Ex. Pizza" value="Sushi">
  </mat-form-field>

  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Leave a comment</mat-label>
    <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
  </mat-form-field>
</form>

    <form class="m-5" #f="ngForm" (ngSubmit)="onSubmit()">
  <div class="mb-3">
    <label for="firstname" class="form-label">Firstname</label>
    <input type="text" ngModel name="firstname" class="form-control" id="firstname" >
  </div>
  <div class="mb-3">
    <label for="lastname" class="form-label">Lastname</label>
    <input type="text" ngModel name="lastname" class="form-control" id="lastname">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" ngModel name="email" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" ngModel name="password" class="form-control" id="password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<h3 *ngIf="error">{{ error }}</h3>

  `,
  styles: [

  ]
})
export class RegisterPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.form.value);
    this.authService.signup(this.form.value).subscribe(
      data => {
        console.log(data)
        this.error = undefined;
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err)
        this.error = err
      });
  }

}