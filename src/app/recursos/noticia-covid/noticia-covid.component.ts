import { NoticiaCovidService } from './noticia-covid.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/covid-model';
import { Covid } from 'src/app/core/model/covid-modul';

@Component({
  templateUrl: './noticia-covid.component.html',
  styleUrls: ['./noticia-covid.component.css']
})
export class NoticiaCovidComponent implements OnInit {

  products: Product[] = [];
  responsiveOptions: any;
  dados: Covid = new Covid;

  constructor(private noticiaCovidService: NoticiaCovidService) {


    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


  ngOnInit(): void {
  	this.noticiaCovidService.getProductsSmall().then(products => {
			this.products = products;
      this.carregardados();
		});
    }

    carregardados(){
      this.noticiaCovidService.obterdados()
      .then(dados => this.dados = dados );

      }
  }
