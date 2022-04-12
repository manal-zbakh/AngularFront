import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Pipe } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent implements OnInit {
  contarts:any[]=[];
  res:any
  searchText:any
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:9191/ethereum/all").subscribe(
      (res:any)=>{
        this.contarts=res
        this.res=res
        console.log(res)
      },
      (error)=>{}
    )
  }
  onContinue1(): void{
    this.router.navigateByUrl('g-contract');
}
  search(value:string){
    if(value==null){
      this.res=this.contarts
    }
    else {
        this.res=this.contarts.filter(val =>{
        console.log(val.immobilier.codeImmobilier);
        return (val.immobilier.codeImmobilier.includes(value) || val.owner.nom.includes(value))  ;
        })
    }
    console.log(this.res)

}

}
