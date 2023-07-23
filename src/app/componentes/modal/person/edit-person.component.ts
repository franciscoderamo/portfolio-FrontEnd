import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person!: Person;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.profile(1).subscribe(data =>{
      this.person = data;
    }, error => {
      alert("Error al modificar los datos personales");
    })
  }

  onUpdate(){
    // capture the Person ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.edit(id, this.person).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos personales");
      }
    )
  }

}
