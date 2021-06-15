import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Country } from '../classes/country';

@Injectable()
export class ApiCountryCallService {
  constructor(private httpClient: HttpClient) {}

  httpResponse: any;
  responseData: any;

  searchCountryByItsName(countryName: string): Observable<Country[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append(
      'X-RapidAPI-Key',
      '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
    );
    // this.httpResponse = this.httpClient.get('https://restcountries-v1.p.rapidapi.com/capital/' + countryName, {headers: headers});
    this.httpResponse = this.httpClient.get(
      'https://restcountries.eu/rest/v2/name/' + countryName
    );
    (this.responseData = this.httpResponse.pipe(
      map(res => {
        console.log('service : ', res);
      })
    )),
      catchError(error => {
        return error;
      });
    console.log('httpResponse', this.httpResponse);

    return this.httpResponse;
  }
}
