import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/model/Educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {    
    miEducacion: Educacion[] = [];
    constructor(private datosEducacion:EducacionService, private router:Router) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data => {console.log(data);
      this.miEducacion = data;
    });
  } 

  


}
