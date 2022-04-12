import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  onContinue1(): void{
    this.router.navigateByUrl('L-clients');
}
test(input:NgForm){
  console.log("input : ")
  console.log(input.value)
  this.http.post("http://localhost:9191/client/save",input.value).subscribe(
    (res:any)=>{
     console.log(res)
    }
  )

}
}
