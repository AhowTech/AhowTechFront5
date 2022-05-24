import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/AhowTech/sendmail1'; // Vendedor

}
