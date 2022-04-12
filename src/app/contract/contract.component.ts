import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contrat:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:9191/ethereum/getmy").subscribe(
      (res)=>{
        console.log(res)
        this.contrat=res
      },
      (error)=>{}
    )
  }

}
