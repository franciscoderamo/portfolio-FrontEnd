import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from 'src/app/model/services.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {

  services: Services = null;

  constructor(private servicesService: ServicesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicesService.see(id).subscribe(data =>{
      this.services = data;
    }, error => {
      alert("Error al modificar los datos del servicio.");
    })
  }

  onUpdate(){
    // capture the Service ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicesService.edit(id, this.services).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos del servicio.");
      }
    )
  }

}
