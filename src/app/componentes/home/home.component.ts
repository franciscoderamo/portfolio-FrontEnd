import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  person!: Person;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personService.profile(1).subscribe(data =>{
      this.person = data;
    });
  }

}
