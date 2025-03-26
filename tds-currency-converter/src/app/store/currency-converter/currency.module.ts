import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CurrencyConverterEffect } from './currency.effects';
import { CURRENCY_CONVERTER_FEATURE_KEY, CurrencyConverterReducer } from '.';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      CURRENCY_CONVERTER_FEATURE_KEY,
      CurrencyConverterReducer
    ),
    EffectsModule.forFeature([CurrencyConverterEffect]),
  ],
})
export class CurrencyConverterModule {}
