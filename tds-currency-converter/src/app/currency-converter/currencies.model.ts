export interface currencies {
  currency: currencyList;
  response: currencyList[];
}

export interface currencyList {
  id: number;
  name: string;
  short_code: string;
  code: number;
  precision: number;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  decimal_mark: string;
  thousands_separator: string;
}


export interface convert {
  from: string;
  to: string;
  amount: number;
}

export interface convertResponse {
  response: {};
  timestamp: number;
  date: Date;
  from: string;
  to: string;
  amount: number;
  value: number;
}

