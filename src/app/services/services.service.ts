import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()

export class ServicesService {


  constructor(private http: HttpClient) { }
  Url = 'http://localhost:3000/sendmail'; // Vendedor

  sendMenssage(body:any){
    return this.http.post(this.Url,body);
  }

}
