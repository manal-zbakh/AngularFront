import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
clients:any;
  constructor(private router: Router,private http:HttpClient) {

   }

  ngOnInit(): void {
   this.getAll()
  }
  onContinue1(): void{
    this.router.navigateByUrl('g-client');
}
getAll(){
  this.http.get("http://localhost:9191/client/all").subscribe(
    (success)=>{
      console.log(success)
      this.clients=success
    },
    (erreur)=>{}
  )
}
delete(id:string){
  this.http.get("http://localhost:9191/client/delete/"+id).subscribe(
    (success)=>{
      console.log(success)
      this.clients=success
      this.getAll();
    },
    (erreur)=>{}
  )

}
edit(id:string){
  this.router.navigate(['U-client',id])
}
}
