import { ActionReducerMap } from '@ngrx/store';
import {
  CURRENCY_CONVERTER_FEATURE_KEY,
  CurrencyConverterReducer,
  CurrencyConverterState,
  initialCurrencyState,
} from './currency-converter';

export interface State {
  [CURRENCY_CONVERTER_FEATURE_KEY]: CurrencyConverterState;
}

export const initialState = {
  [CURRENCY_CONVERTER_FEATURE_KEY]: initialCurrencyState,
};

export const reducers: ActionReducerMap<State> = {
  [CURRENCY_CONVERTER_FEATURE_KEY]: CurrencyConverterReducer,
};
