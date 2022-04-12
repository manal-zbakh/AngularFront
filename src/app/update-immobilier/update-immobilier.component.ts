import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-immobilier',
  templateUrl: './update-immobilier.component.html',
  styleUrls: ['./update-immobilier.component.css']
})
export class UpdateImmobilierComponent implements OnInit {
  id:any
  immobilier:any={};
  client:any={};
  constructor(private router: Router,private router1: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id=this.router1.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9191/immobilier/"+this.id).subscribe(
      (success:any)=>{
        console.log(success)
        this.immobilier=success;
      },
      (error)=>{

      }
    );
  }
  onContinue1(): void{
    this.router.navigateByUrl('L-immobiliers')

}
addclient(myform:any){
  myform.value['id']=this.id;
  myform.value['client']=this.client;
  this.http.post("http://localhost:9191/immobilier/save/",myform.value).subscribe(
    (res:any)=>{
      console.log(res)


    },
    (error:any)=>{
      console.log(error)
    }
  )
  console.log(myform.value)
}

get(id:string){
  console.log(id)
  this.http.get("http://localhost:9191/client/code/"+id).subscribe(
    (res:any)=>{
      console.log(res)
      this.client=res

    },
    (error:any)=>{
      console.log(error)
    }
  )
}
}
