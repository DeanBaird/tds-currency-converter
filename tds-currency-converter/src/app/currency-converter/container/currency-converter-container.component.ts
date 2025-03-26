import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/';
import { CurrencyActions } from '../../store/currency-converter';
import { Observable, take } from 'rxjs';
import { convert, currencyList } from '../currencies.model';
import {
  convertedAmountCurrencySelector,
  convertedAmountSelector,
  currenciesSelector,
} from '../../store/currency-converter/currency.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-converter-container',
  templateUrl: './currency-converter-container.component.html',
  styleUrl: './currency-converter-container.component.css',
})
export class CurrencyConverterContainerComponent implements OnInit {
  currencies$: Observable<currencyList[] | undefined>;
  convertedAmount$: Observable<number | undefined>;
  convertedValueCurrencyObject$: Observable<currencyList | null>;

  currencyForm!: FormGroup;
  constructor(private store: Store<State>, private formBuilder: FormBuilder) {
    this.currencies$ = this.store.pipe(select(currenciesSelector));
    this.convertedAmount$ = this.store.pipe(select(convertedAmountSelector));
    this.convertedValueCurrencyObject$ = this.store.pipe(
      select(convertedAmountCurrencySelector)
    );

    this.currencyForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01),]],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(CurrencyActions.fetchCurrencies());
  }

  getConvertedValue(event: { formValue: convert }): void {
    if (this.currencyForm.valid) {
      this.store.dispatch(
        CurrencyActions.postConvertCurrency({ payload: event.formValue })
      );
    } else if (this.convertedAmount$) {
      this.convertedAmount$.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.store.dispatch(CurrencyActions.clearStore());
        }
      });
    }
  }
}
