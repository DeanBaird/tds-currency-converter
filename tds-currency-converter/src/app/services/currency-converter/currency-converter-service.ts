import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  convert,
  convertResponse,
  currencies,
} from '../../currency-converter/currencies.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  apiKey = 'pzPpPfkCfDGBEA0ZGiWq7qhooTjllCMK';

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<currencies> {
    return this.http.get<currencies>(
      `https://api.currencybeacon.com/v1/currencies?api_key=${this.apiKey}`
    );
  }

  postCurrencyConvertor(payload: convert): Observable<convertResponse> {
    return this.http.get<convertResponse>(
      `https:api.currencybeacon.com/v1/convert?api_key=${this.apiKey}&from=${payload.from}&to=${payload.to}&amount=${payload.amount}`
    );
  }
}
