import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { convert, currencyList } from '../currencies.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent {
  @Input() currencyForm: FormGroup = new FormGroup({});
  @Input() currencies: currencyList[] | undefined;
  @Input() convertedValue: number | null | undefined = 0;
  @Input() convertedValueCurrencyObject: currencyList | null = null;
  @Output() convertValue = new EventEmitter<{ formValue: convert }>();

  emitConvertValue(): void {
    this.convertValue.emit({ formValue: this.currencyForm.value });
  }

  validateDecimals(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (
      (event.key === '.' && value.includes('.')) ||
      (value.length >= 20 && event.key !== 'Backspace')
    ) {
      event.preventDefault();
    }
  }

  enforceTwoDecimals(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (value.includes('.')) {
      const [whole, decimal] = value.split('.');
      if (decimal.length > 2) {
        input.value = `${whole}.${decimal.substring(0, 2)}`;
      } else {
        this.emitConvertValue();
      }
    } else {
      this.emitConvertValue();
    }
  }
}
