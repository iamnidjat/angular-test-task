import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {CurrencyApiResponse} from "../models/CurrencyApiResponse";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/UAH';
  private cachedRates: CurrencyApiResponse | null = null; // our cached rates

  constructor(private http: HttpClient) {}

  public getRates(): Observable<CurrencyApiResponse> {
    // if rates are already cached, we return them
    if (this.cachedRates) {
      return of(this.cachedRates);
    }

    // otherwise we fetch them
    return this.http.get<CurrencyApiResponse>(this.apiUrl).pipe(
      map((data) => {
        this.cachedRates = data; // caching the data
        return data;
      })
    );
  }
}
