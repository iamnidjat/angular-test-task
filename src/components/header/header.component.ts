import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public rates: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data;
    })
  }
}
