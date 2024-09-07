export type Rates = {
  UAH: number;
  USD: number;
  EUR: number;
  AZN: number;
}

export type CurrencyApiResponse = {
  rates: Rates;
}
