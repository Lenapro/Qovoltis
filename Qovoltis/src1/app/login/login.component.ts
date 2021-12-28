import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
hide = true
  
  user: User = new User();
 
  emailFormControl = new FormControl('', [
    Validators.required, 
    Validators.email]);

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm){

  }
  email ?: boolean;
  password ?: boolean;

  login(){
    console.log(this.user)
    this.userService.connexion_user(this.user.email, this.user.password).subscribe((data: User)=>{
      console.log(data)
      if (data.id){
        localStorage.setItem('id_user', data.id.toString())
        this.router.navigate(['index'])
      }
      else {
        this.password = false;
      }
    })
  }
  

}

