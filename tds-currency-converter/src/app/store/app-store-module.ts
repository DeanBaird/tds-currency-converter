import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyConverterModule } from './currency-converter/currency.module';

@NgModule({
  imports: [CommonModule, CurrencyConverterModule],
})
export class AppStoreModule {}
