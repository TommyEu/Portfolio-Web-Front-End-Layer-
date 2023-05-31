import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exp } from 'src/app/model/Exp.model';
import { ExpService } from 'src/app/servicios/exp.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  miExp: Exp[] = [];
  constructor(private expServ: ExpService, private router:Router) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(){
    this.expServ.getAllExp().subscribe(data => {console.log(data);
      this.miExp = data;
    });
    }

    onDelete(id?:number){
      if(id != undefined){
        this.expServ.deleteExp(id).subscribe(
          data => {
            this.cargarEducacion();
            this.router.navigate(['']);
        }, err =>{
          alert("No se pudo borrar")
        })
      }
      
  } 

}
