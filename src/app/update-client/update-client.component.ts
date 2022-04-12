import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  id:any
  client:any={};
  constructor(private router: Router,private router1: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id=this.router1.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9191/client/by/"+this.id).subscribe(
      (success:any)=>{
        console.log(success)
        this.client=success;
      },
      (error)=>{

      }
    );

  }
  onContinue1(): void{
    this.router.navigateByUrl('L-clients');
}
update(form:NgForm){
  console.log(" ---------------------------------------- ")
console.log(form.value)
form.value['id']=this.id;
this.http.post("http://localhost:9191/client/save",form.value).subscribe(
  (success:any)=>{
    console.log(success)

    this.client=success;
    this.router.navigateByUrl("L-clients");
  },
  (error)=>{

  }
);
}


}
