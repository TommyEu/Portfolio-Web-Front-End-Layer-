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
    miEducacion:any
    constructor(private datosEducacion:EducacionService, private router:Router) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data => {console.log(data);
      this.miEducacion = data;
    });
  } 

  onAdd(){
    this.datosEducacion.crearDatos(this.miEducacion).subscribe(data => {
      alert("Educacion añadida correctamente");
      this.router.navigate(['']);
    }, err =>
    {
      alert('falló');
      this.router.navigate(['']);
    } )
  }


}
