import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studies } from 'src/app/model/studies.model';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-edit-studies',
  templateUrl: './edit-studies.component.html',
  styleUrls: ['./edit-studies.component.css']
})
export class EditStudiesComponent implements OnInit {

  studies: Studies = null;

  constructor(private studiesService: StudiesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.studiesService.see(id).subscribe(data =>{
      this.studies = data;
    }, error => {
      alert("Error al modificar los datos del estudio.");
    })
  }

  onUpdate(){
    // capture the Experience ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.studiesService.edit(id, this.studies).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos del estudio.");
      }
    )
  }
}
