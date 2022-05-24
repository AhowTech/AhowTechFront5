import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  dataset: Details = {
    fname: '',
    email: '',
    comment: '',
  };

  constructor(private https: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log("Ando por aquí.....");
    this.https.post<Details>('http://localhost:8080/testapp/getdetails',this.dataset)
      .subscribe((res) => {
        this.dataset = res;
        console.log("Esto es:   " + this.dataset);
        alert('Email Sent successfully');
        this.dataset.fname = '';
        this.dataset.email = '';
        this.dataset.comment = '';
      });
  }
}
interface Details {
  fname: string;
  email: string;
  comment: string;

}
