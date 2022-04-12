import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-immobilier',
  templateUrl: './gestion-immobilier.component.html',
  styleUrls: ['./gestion-immobilier.component.css']
})
export class GestionImmobilierComponent implements OnInit {
client:any
nom=""
constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  onContinue1(): void{
    this.router.navigateByUrl('L-immobiliers');
   }
  getClient(code:string){
    this.http.get("http://localhost:9191/client/code/"+code).subscribe(
      (res:any)=>{
        console.log(res)
        this.client=res
        this.nom=res.nom + ' '+res.prenom
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  addclient(myform:any){
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

}
// codeClient
