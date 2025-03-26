import { createAction, props } from '@ngrx/store';
import {
  convert,
  convertResponse,
  currencies,
} from '../../currency-converter/currencies.model';

export const fetchCurrencies = createAction('Fetch all currencies');

export const fetchCurrenciesSuccess = createAction(
  'Fetch all currencies Success',
  props<{ currencies: currencies }>()
);

export const fetchCurrenciesFailure = createAction(
  'Fetch all currencies Failure',
  props<{ error: string }>()
);

export const postConvertCurrency = createAction(
  'Post convert currency',
  props<{ payload: convert }>()
);

export const postConvertCurrencySuccess = createAction(
  'Post convert currency Success',
  props<{ convertedResponse: convertResponse }>()
);

export const postConvertCurrencyFailure = createAction(
  'Post convert currency Failure',
  props<{ error: string }>()
);

export const clearStore = createAction('clear converted amount store');
