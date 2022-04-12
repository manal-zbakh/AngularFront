import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-immobiliers',
  templateUrl: './list-immobiliers.component.html',
  styleUrls: ['./list-immobiliers.component.css']
})
export class ListImmobiliersComponent implements OnInit {
immobiliers:any
  constructor(private router: Router,private http:HttpClient) {

  }

  ngOnInit(): void {
this.getAll()
  }
  onContinue1(): void{
    this.router.navigateByUrl('g-immobilier');
  }
  getAll(){
    this.http.get("http://localhost:9191/immobilier/all").subscribe(
      (res)=>{
        console.log(res)
        this.immobiliers=res
      },
      (error)=>{}
      );
  }
  delete(id:string){
  this.http.get("http://localhost:9191/immobilier/delete/"+id).subscribe(
    (res)=>{
      console.log(res)
      this.getAll()
    },
    (error)=>{}
  )
  }
  edit(id:string){
    this.router.navigate(['U-immobilier',id])
  }


}
