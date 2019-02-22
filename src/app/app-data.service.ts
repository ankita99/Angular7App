import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './classes/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private _httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]>{

        return this._httpClient.get<Employee[]>("https://jsonplaceholder.typicode.com/users");
  }
}
