import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  registerForm: any;
  constructor(private formBuilder: FormBuilder,private modalService: NgbModal,private router: Router,private authService:AuthService) { }
  closeResult: string;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName:[null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    })
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  onFormSubmit(form: NgForm) {
    this.authService.register(form)
      .subscribe(res => {
        this.router.navigate(['login']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
}
