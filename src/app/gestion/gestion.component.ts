import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onContinue1(): void{
    this.router.navigateByUrl('g-client');
}
  onContinue2(): void{
  this.router.navigateByUrl('g-immobilier');
}
  onContinue3(): void{
  this.router.navigateByUrl('g-contract');
}
onContinue4():void {
  this.router.navigateByUrl('g-account');
}

}
