import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Details } from 'src/app/models/details';
import { ServicesService } from 'src/app/services/services.service';

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
      email: new FormControl('',[Validators.required,Validators.email]),
      comment: new FormControl('',Validators.required),
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


}
// interface Details {
//   fname: string;
//   email: string;
//   comment: string;

// }
