import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {  }

   // Lista os usuários
   async list() {
    return await this.http.get(this.url).toPromise();
  }
}
