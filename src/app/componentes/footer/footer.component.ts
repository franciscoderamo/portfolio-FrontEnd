import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PortfolioService } from 'src/app/services/data.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  person!: Person;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personService.profile(1).subscribe(data =>{
      this.person = data;
    });
  }

}
