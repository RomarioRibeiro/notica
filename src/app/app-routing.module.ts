import { NoticiaCovidComponent } from './recursos/noticia-covid/noticia-covid.component';
import { NoticiaPrevisaoComponent } from './recursos/noticia-previsao/noticia-previsao.component'
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    component: NoticiaCovidComponent
  },
  {
    path: "noticia-previsao",
    component: NoticiaPrevisaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
