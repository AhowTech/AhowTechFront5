import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Details } from 'src/app/models/details';
import { ServicesService } from 'src/app/services/services.service';

const emailrevision = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  datos!: FormGroup;
  dataset: Details = new Details();



  constructor(private router:Router, private service:ServicesService, private httpcliente:HttpClient) {
    this.datos = new FormGroup({
      fname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(emailrevision)]),
      comment: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
    });

  }

  ngOnInit(): void {}

  onSubmit() {
   // console.log("Ando por aquí.....");
    this.service.enviarMail(this.dataset).subscribe(data=>{
      alert("Email Sent successfully...!!!")
     // this.router.navigate(["contacto"]);
      this.dataset.fname = '';
      this.dataset.email = '';
      this.dataset.comment = '';
    });

    // this.https.post<Details>('http://localhost:8080/testapp/getdetails',this.dataset)
    //   .subscribe((res) => {
    //     this.dataset = res;
    //     console.log("Esto es:   " + this.dataset);
    //     alert('Email Sent successfully');
    //     this.dataset.fname = '';
    //     this.dataset.email = '';
    //     this.dataset.comment = '';
    //   });
  }

  envioCorreo(){
    Notiflix.Loading.standard('Cargando..-');
    let params = {
      namef:this.datos.value.fname,
      correo:this.datos.value.email,
     mensaje:this.datos.value.comment
    }

    console.log(params);
    this.httpcliente.post('http://localhost:8080/testapp/getdetails',params).subscribe(resp=>{
      console.log(resp);
    });

  }

  valida_longitud(){
    let contenido_textarea = "";
    let num_caracteres_permitidos = 500;
    let num_caracteres = document.forms[0].comment.value.length;

   if (num_caracteres > num_caracteres_permitidos){
      document.forms[0].comment.value = contenido_textarea
   }else{
      contenido_textarea = document.forms[0].comment.value
   }

   if (num_caracteres >= num_caracteres_permitidos){
      document.forms[0].caracteres.style.color="#ff0000";
   }else{
      document.forms[0].caracteres.style.color="#000000";
   }

   this.cuenta();
  }

  cuenta(){
    document.forms[0].caracteres.value=document.forms[0].comment.value.length
  }


}
// interface Details {
//   fname: string;
//   email: string;
//   comment: string;

// }
