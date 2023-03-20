import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/model/Persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: Persona = new Persona(0,"","","","","","");//Lo inicializamos con sus datos nulos
  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.traerInfo().subscribe(data => {this.persona = data});
  }

}
