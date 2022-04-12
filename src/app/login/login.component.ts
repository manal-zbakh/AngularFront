import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
 authenticate(myfrom:NgForm){
this.auth.auth(myfrom.value).subscribe(
 (res:any)=>{
 console.log(res)
 localStorage.setItem('token',res.message)
 this.route.navigateByUrl("/gestion")

  }
)
}
}
