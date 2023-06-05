import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  
})
export class InveServiceService {
  
  url = "http://localhost/FerreBD/";
  constructor(private http: HttpClient) { }

  mostrarTodos(){

    return this.http.get(`${this.url}mostrarTodos.php`);

  }
  agregar(items){
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(items));
  }
  eliminar(id_item:number){
    return this.http.get(`${this.url}eliminar.php?id_item=${id_item}`);
  }
  seleccionar(id_item:number){
    return this.http.get(`${this.url}seleccionar.php?id_item=${id_item}`);
  }
  update(usuario){
    return this.http.post(`${this.url}update.php`, JSON.stringify(usuario));
  }
}
