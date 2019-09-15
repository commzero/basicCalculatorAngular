import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(

    private http: HttpClient

  ) { }

    getAllOperations() {

      return this.http.get<any>(environment.apiUrl + 'operations');

    }

    addOperation(body: any) {

      return this.http.post(environment.apiUrl + 'operations', body);

    }

    deleteOperation(id: number) {

      return this.http.delete(environment.apiUrl + `operations/${id}`);
      
    }

}
