import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/Educacion.model';
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
    this.cargarEducacion();
    }

    cargarEducacion(){
    this.datosEducacion.obtenerDatos().subscribe(data => {console.log(data);
      this.miEducacion = data;
    });
    }

    onDelete(id?:number){
      if(id != undefined){
        this.datosEducacion.eliminarDatos(id).subscribe(
          data => {
            this.cargarEducacion();
            this.router.navigate(['']);
        }, err =>{
          alert("No se pudo borrar")
        })
      }
      
  } 

  


}
