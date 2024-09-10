import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {DecimalPipe, NgIf} from "@angular/common";
import {CurrencyApiResponse} from "../../models/CurrencyApiResponse";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    DecimalPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public rates: CurrencyApiResponse | null = null;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data;
    })
  }
}
