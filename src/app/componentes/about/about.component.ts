import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { Experience } from 'src/app/model/experience.model';
import { PersonService } from 'src/app/services/person.service';
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person!: Person;
  experience: Experience [] = [];
  constructor(private personService:PersonService, private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.personService.profile(1).subscribe(data =>{
      this.person = data;
    }),
    this.experienceService.all().subscribe(data =>{
      this.experience = data;
    });

  }

}
