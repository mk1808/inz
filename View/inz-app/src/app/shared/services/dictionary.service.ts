import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private rest:RestService) { }


  public getCategories(): Observable<String[]> {
   
    return this.rest.get<String[]>('/api/categories');
  }

  public getCountries(): Observable<String[]> {
   
    return this.rest.get<String[]>('/api/countries');
  }

  public getTags(): Observable<String[]> {
   
    return this.rest.get<String[]>('/api/tags');
  }


}