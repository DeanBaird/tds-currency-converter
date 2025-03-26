import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterContainerComponent } from './container/currency-converter-container.component';
import { CurrencyConverterComponent } from './component/currency-converter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyConverterContainerComponent,
    CurrencyConverterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CurrencyConverterContainerComponent, CurrencyConverterComponent],
})
export class CurrencyConverterModule {}
