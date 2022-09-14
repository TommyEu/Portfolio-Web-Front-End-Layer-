import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any //definicion de variable para databinding
  constructor(private datosPortfolio:PortfolioService) { }//inyectando el servicio "portfolio"

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{console.log(data);//me suscribo al metodo obtenerDatos
      this.miPortfolio = data;//le asignamos el valor de nuestro json      //para luego, mediante una funcion flecha
                                                                          //imprimir los datos del .json
    });
  }

}
