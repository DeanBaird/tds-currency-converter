import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrencyConverterService } from '../../services/currency-converter/currency-converter-service';
import {
  catchError,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';
import * as currencyConverterActions from '../../store/currency-converter/currency.actions';

@Injectable()
export class CurrencyConverterEffect {
  constructor(
    private actions$: Actions,
    private currencyConverterService: CurrencyConverterService
  ) {}

  fetchCurrencies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyConverterActions.fetchCurrencies),
      switchMap(() =>
        this.currencyConverterService.getCurrencies().pipe(
          switchMap((currencies) =>
            of(currencyConverterActions.fetchCurrenciesSuccess({ currencies }))
          ),
          catchError((error) =>
            of(
              currencyConverterActions.fetchCurrenciesFailure({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  postCurrencyConverter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyConverterActions.postConvertCurrency),
      switchMap((action) =>
        this.currencyConverterService
          .postCurrencyConvertor(action.payload)
          .pipe(
            takeUntil(
              this.actions$.pipe(ofType(currencyConverterActions.clearStore))
            ),
            switchMap((convertedResponse) => [
              currencyConverterActions.postConvertCurrencySuccess({
                convertedResponse,
              }),
            ]),
            catchError((error) =>
              of(
                currencyConverterActions.postConvertCurrencyFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });
}
