import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Details } from 'src/app/models/details';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {

  dataset: Details = new Details();

  constructor(private router:Router, private service:ServicesService) {}

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
}
// interface Details {
//   fname: string;
//   email: string;
//   comment: string;

// }
