import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  ngOnInit(): void {
      
  }
  


  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
      this.form=this.formBuilder.group(
      {
        email:['juanmanuelpaker@gmail.com',[Validators.required, Validators.email]],
        password:['argentinaprograma',[Validators.required, Validators.minLength(8)]],
        //deviceInfo:this.formBuilder.group({
        //  deviceId:[],
        //  deviceType:[],
        //  notificationToquen:[]
        })
      }
  get Email()
  {
      return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }

  OnEnviar(event: Event)
  {
    event.preventDefault;
    this.autenticacionService.InicioSesion(this.form.value).subscribe( (data: any)=> {
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/porfolio']);
    })
  }
}


