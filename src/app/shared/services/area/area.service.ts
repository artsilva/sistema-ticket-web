import { Area } from './../../models/area';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  url: string = environment.urlApi;
  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.url}/areas`).pipe(
      map(
        area => {
          return area.map((item: Area) => {
            const areaResponse: Area = { id: item.id, description: item.description, selected: false };
            return areaResponse;
          });
        })
      );
  }

  getAreasByQuantity(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.url}/quantity-areas`);
  }

}
