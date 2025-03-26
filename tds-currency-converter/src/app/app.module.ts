import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CurrencyConverterEffect } from './store/currency-converter/currency.effects';
import { CurrencyConverterReducer } from './store/currency-converter';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './enviroments/enviroment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CurrencyConverterModule,

    StoreModule.forRoot({}, {}),

    StoreModule.forFeature('currencyConverter', CurrencyConverterReducer),

    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CurrencyConverterEffect]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
