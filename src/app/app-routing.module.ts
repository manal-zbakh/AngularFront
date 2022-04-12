import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionContractComponent } from './gestion-contract/gestion-contract.component';
import { GestionImmobilierComponent } from './gestion-immobilier/gestion-immobilier.component';
import { GestionComponent } from './gestion/gestion.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListContractsComponent } from './list-contracts/list-contracts.component';
import { ListImmobiliersComponent } from './list-immobiliers/list-immobiliers.component';
import { LoginComponent } from './login/login.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateImmobilierComponent } from './update-immobilier/update-immobilier.component';

const routes: Routes = [
  {path:'navbar', component:HeaderComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'contact', component:ContractComponent},
  {path:'gestion', component:GestionComponent },
  {path:'g-immobilier', component:GestionImmobilierComponent },
  {path:'g-contract', component:GestionContractComponent },
  {path:'g-client', component:GestionClientComponent },
  {path:'L-clients', component:ListClientsComponent },
  {path:'L-immobiliers', component:ListImmobiliersComponent },
  {path:'L-contracts', component:ListContractsComponent },
  {path:'U-client/:id', component:UpdateClientComponent},
  {path:'U-immobilier/:id', component:UpdateImmobilierComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
