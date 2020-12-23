import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SocketService } from 'src/app/services/socket.service';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: any;
  constructor(private formBuilder: FormBuilder,private socketService: SocketService,private modalService: NgbModal,private router: Router,
    private authService:AuthService, private guard: AuthGuard) { }
  closeResult: string;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:[null, Validators.required],
      password: [null, Validators.required]
    })
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        this.guard.loggedIn=true;
        this.socketService.name = res.userName;
        this.router.navigate(['chat']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }
}
