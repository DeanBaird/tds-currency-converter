import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  currencyConverterKey as CURRENCY_CONVERTER_FEATURE_KEY,
  State as CurrencyConverterState,
} from '../currency-converter/currency.reducers';

export const selectCurrencyConverterFeature =
  createFeatureSelector<CurrencyConverterState>(CURRENCY_CONVERTER_FEATURE_KEY);

export const currenciesSelector = createSelector(
  selectCurrencyConverterFeature,
  (state) => state?.currencies?.response
);
export const convertedAmountSelector = createSelector(
  selectCurrencyConverterFeature,
  (state) => state?.convertedResponse?.value
);

export const convertedAmountCurrencySelector = createSelector(
  selectCurrencyConverterFeature,
  (state) => {
    const responseArray = state?.currencies?.response || [];
    const targetShortCode = state?.convertedResponse?.to;

    return (
      responseArray.find(
        (currency) => currency.short_code === targetShortCode
      ) || null
    );
  }
);
