import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  form: FormGroup;
  person: Person[] = [];

  constructor(private formBuilder: FormBuilder, private personService: PersonService) {
    this.form = this.formBuilder.group({
      id: [''],
      nombreperfil: ['', [Validators.required]],
      tituloperfil: ['', [Validators.required]],
      acercaDeMi: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      banner: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.personService.getPerson().subscribe(
      data => {
        this.person = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.personService.seePerson(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete')
      }
    )
  }

  // esto es solo para hacer pruebas en local
  onImagenSeleccionada(e: any) {
    let nombreImagen = e.target.files[0].name
    let url = 'assets/img/' + nombreImagen;
    this.form.patchValue({ imagen: url });
    console.log(url);
  }

  guardar() {
    let per = this.form.value;

    if (per.id == '') {
      this.personService.addPerson(per).subscribe(
        data => {
          alert("Persona añadida");
          this.cargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.personService.editPerson(per).subscribe(
        data => {
          alert("Persona modificada");
          this.cargarPersona();
          this.form.reset();
        }
      )
    }
  }

  delete(id: number) {
    this.personService.deletePerson(id).subscribe(
      {
        next: data => {
          alert("Se elimino satisfactoriamente");
          this.cargarPersona()
        },
        error: err => {
          console.error(err)
          alert("No se pudo eliminar")
        }
      }
    )
  }
}
