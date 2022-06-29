import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Details } from 'src/app/models/details';
import { ServicesService } from 'src/app/services/services.service';

const emailrevision =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  datos!: FormGroup;
  dataset: Details = new Details();
  contador = 0;
  maxlongi = 500;
  contenido_textarea = '';

  constructor(
    private router: Router,
    private service: ServicesService,
    private httpcliente: HttpClient
  ) {
    this.datosForms();
  }

  datosForms(){
    this.datos = new FormGroup({
      fname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(emailrevision),
      ]),
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // console.log("Ando por aquí.....");
    this.service.enviarMail(this.datos.value).subscribe((data) => {
      alert('Email Sent successfully...!!!');
      // this.router.navigate(["contacto"]);
      this.datos.controls['fname'].setValue('');
      this.datos.controls['email'].setValue('');
      this.datos.controls['comment'].setValue('');
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

  envioCorreo() {
    Notiflix.Loading.standard('Sending...-');

    // console.log('ESTOY AQUIIIII');
    // console.log(this.datos.value);
    this.service
      .enviarMail(this.datos.value) //!  QUEDÉ AQUÍ
      .subscribe((data: any) => {
        alert('Email sent successfully...!!!');
        //  this.router.navigate(["ordenes/addordens"]);
        // this.router.navigate(["cliente"]);
        this.datosForms();
        Notiflix.Loading.remove();
      });

    // let params = {
    //   namef:this.datos.value.fname,
    //   correo:this.datos.value.email,
    //  mensaje:this.datos.value.comment
    // }



    //this.service.enviarMail(this.params)

    // this.httpcliente.post('http://localhost:8080/testapp/getdetails',params).subscribe(resp=>{
    //   console.log(resp);
    // });

  }

  onKey(event: any) {
    this.contador = event.target.value.length;
    if (this.contador > this.maxlongi) {
      event.target.value = this.contenido_textarea;
      this.contador = event.target.value.length;
    } else {
      this.contenido_textarea = event.target.value;
    }
  }
}
// interface Details {
//   fname: string;
//   email: string;
//   comment: string;

// }
