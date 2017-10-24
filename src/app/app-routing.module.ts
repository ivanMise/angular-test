import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ListaHistoriaComponent } from "./lista-historia/lista-historia.component";
import { HistoriaDetailComponent } from "./historia-detail/historia-detail.component";
import { ListaItemHistoriaComponent } from "./lista-item-historia/lista-item-historia.component";

const routes: Routes = [
  {path: '',    redirectTo:'login',    pathMatch:'full'  },
  {path:'login', component:LoginComponent},
  {path:'stories', component:ListaHistoriaComponent},
  {path:'edit/:id', component:HistoriaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
