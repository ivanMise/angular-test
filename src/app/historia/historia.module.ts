import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaHistoriaComponent } from "../lista-historia/lista-historia.component";
import { ListaItemHistoriaComponent } from "../lista-item-historia/lista-item-historia.component";
import { MaterialModule } from '../material/material.module';
import { PostService } from '../shared/services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { HistoriaDetailComponent } from '../historia-detail/historia-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
    
  ],
  declarations: [ListaHistoriaComponent,
    ListaItemHistoriaComponent,
    HistoriaDetailComponent],
  providers: [PostService]
})
export class HistoriaModule { }
