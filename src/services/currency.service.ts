import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyApiResponse} from "../models/CurrencyApiResponse";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/UAH';

  constructor(private http: HttpClient) {}

  public getRates(): Observable<CurrencyApiResponse> {
    return this.http.get<any>(this.apiUrl);
  }
}
