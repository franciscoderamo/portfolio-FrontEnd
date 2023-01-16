import { Component, OnInit } from '@angular/core';
// Service
//import { AuthService } from 'src/app/servicios/auth.service';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  //email = '';
  //password = '';

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ //, public authService: AuthService
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  // login(){
  //   // El servicio authService. login ya redirecciona
  //   // en caso de inicio de sesión positivo
  //   this.authService.login(this.email, this.password)
  // }

  ngOnInit() {}

  get Username(){
    return this.form.get("username");
  }

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
   return this.form.get("email");
  }

  get UsernameValid(){
    return this.Username?.touched && !this.Username?.valid;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }

  }
}
