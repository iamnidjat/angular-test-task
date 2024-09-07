import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CurrencyService} from "../../services/currency.service";
import {HeaderComponent} from "../header/header.component";
import {CurrencyApiResponse, Rates} from "../../models/CurrencyApiResponse";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    HeaderComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  public currencies: string[] = ['UAH', 'USD', 'EUR', 'AZN'];
  public rates: Rates | null = null;
  public amount1: number = 1; // default amount
  public amount2: number = 1; // default amount
  public currency1: string = 'UAH'; // default currency
  public currency2: string = 'USD'; // default currency

  constructor(private currencyService: CurrencyService) {}

  public convert(source: string): void {
    if (source === 'first') {
      this.amount2 = this.convertCurrency(this.amount1, this.currency1 as keyof Rates, this.currency2 as keyof Rates);
    }
    else {
      this.amount1 = this.convertCurrency(this.amount2, this.currency2 as keyof Rates, this.currency1 as keyof Rates);
    }
  }

  public convertCurrency(amount: number, from: keyof Rates, to: keyof Rates): number {
    if (from === to) {
      return amount;
    }

    const rateFrom = from === 'UAH' ? 1 : this.rates![from];
    const rateTo = to === 'UAH' ? 1 : this.rates![to];

    return (amount / rateFrom) * rateTo;
  }

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data.rates;
      this.convert('first');
    });
  }
}
