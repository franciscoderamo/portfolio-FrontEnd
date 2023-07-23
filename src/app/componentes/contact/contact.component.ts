import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact!:Person;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personService.profile(1).subscribe(data =>{
      this.contact=data;
    });
  }

}
