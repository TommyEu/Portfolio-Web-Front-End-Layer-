import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    miEducacion:any
    constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data => {console.log(data);
      this.miEducacion = data;
    });
  }

}
