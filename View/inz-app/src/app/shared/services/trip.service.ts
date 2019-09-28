import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Trip, Place, PositionInTrip } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private cookie:CookieService,private rest:RestService) { }

  public getTrips(): Observable<Trip[]> {
   
    return this.rest.get<Trip[]>('/api/trips');
}

public getTrip(id:number): Observable<Trip> {
   
  return this.rest.get<Trip>('/api/trips/'+id);
}

public getPlacesForTrip(id:number): Observable<Place[]> {
   
  return this.rest.get<Place[]>('/api/positionInTrip/trip/'+id);
}

public getRegionsFiltered(region:string): Observable<String[]> {

  return this.rest.get('/api/trips/filter' + '?region=' + region);
}

public getTripsByDuration(from:number, to:number): Observable<String[]> {

  return this.rest.get('/api/trips/duration' + '?from=' + from + "&to=" + to);
}


public getTripsFiltered(from:number, to:number,region:string, tags:String[] ): Observable<Trip[]> {
  let allTags = '&tags=' + tags.map(m => m).join('&tags=');
  return this.rest.get('/api/trips/all-filters' + '?from=' + from + "&to=" + to +
  "&region=" + region + allTags);
}

public getTripsByUser(id:number): Observable<Trip[]> {

  return this.rest.get('/api/trips/user/' + id);
}

public createTrip(trip: Trip): Observable<Trip> {
  return this.rest.post('/api/trips', trip);
}

public addPlaceToTrip(position: PositionInTrip): Observable<PositionInTrip> {
  return this.rest.post('/api/positionInTrip', position);
}



}
