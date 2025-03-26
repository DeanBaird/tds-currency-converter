import { createReducer, on } from '@ngrx/store';
import * as currencyConverterActions from '../../store/currency-converter/currency.actions';
import {
  convertResponse,
  currencies,
} from '../../currency-converter/currencies.model';

export const currencyConverterKey = 'currencyConverter';

export interface State {
  currencies: currencies | null;
  convertedResponse: convertResponse | null;
  error: string | null;
}
export const initialState: State = {
  currencies: null,
  convertedResponse: null,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(currencyConverterActions.fetchCurrencies, (state) => ({
    ...state,
    error: null,
  })),

  on(currencyConverterActions.fetchCurrenciesSuccess, (state, action) => ({
    ...state,
    currencies: action.currencies,
    error: null,
  })),

  on(currencyConverterActions.fetchCurrenciesFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),

  on(currencyConverterActions.postConvertCurrency, (state) => ({
    ...state,
    error: null,
  })),

  on(currencyConverterActions.postConvertCurrencySuccess, (state, action) => ({
    ...state,
    convertedResponse: action.convertedResponse,
    error: null,
  })),

  on(currencyConverterActions.postConvertCurrencyFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),

  on(currencyConverterActions.clearStore, (state) => ({
    ...state,
    convertedResponse: null,
    error: null,
  }))
);
