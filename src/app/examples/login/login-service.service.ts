import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  URL = "http://localhost/FerreBD/";

  constructor(private http: HttpClient) { }

  loginUsuario(login) {
    return this.http.post(`${this.URL}login.php`, JSON.stringify(login));
  }
}
