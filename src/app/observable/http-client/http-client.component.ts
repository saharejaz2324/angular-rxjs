import { Component, OnInit } from '@angular/core';
import { Country } from '../../classes/country';
import { ApiCountryCallService } from '../../services/api-country-call.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  constructor(private _apiService: ApiCountryCallService) {}

  ngOnInit(): void {
    console.log('httpClient');
    this.searchCapital();
  }
  countries: any;
  searchCapital() {
    this._apiService
      .searchCountryByItsName('united')
      .subscribe((data: Country[]) => {
        console.log('component', data);
        this.countries = data;
      });
  }
}
