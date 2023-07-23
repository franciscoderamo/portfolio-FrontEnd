import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  name: string = '';
  resume: string = '';
  description: string = '';
  about: string = '';
  image: string = '';
  whatsapp: number;
  github: string = '';
  linkedin: string = '';
  email: string = '';
  ubication: string = '';
  country: string = '';
  curriculum: string = '';

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const person = new Person(this.name, this.resume, this.description, this.about, this.image, this.whatsapp, this.github, this.linkedin, this. email, this.ubication, this.country, this.curriculum);
    this.personService.new(person).subscribe(data => {
        alert("Persona añadida");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
