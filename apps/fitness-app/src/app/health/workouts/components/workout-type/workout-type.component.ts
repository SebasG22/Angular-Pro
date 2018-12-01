import { Component, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkoutTypeComponent),
  multi: true
};

@Component({
  selector: 'angpro-workout-type',
  providers: [TYPE_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss']
})
export class WorkoutTypeComponent implements ControlValueAccessor {

  selectors = ['strength', 'endurance'];

  value: string;

  private onTouch: Function;
  private onModelChanges: Function;

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  registerOnChange(fn: Function) {
    this.onModelChanges = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  setSelected(value: string) {
    this.value = value;
    this.onModelChanges(value);
    this.onTouch();
  }
}
