import { FormControl } from '@angular/forms';

// import { isString } from 'lodash';
import * as _ from 'lodash';
export function StartingWithAlphaValidator(control: FormControl): { [key: string]: boolean } {
  const isString = _.isString(control.value);
  // invalid "123" "123a"
  // valid  "a123"
  // \d - 0-9
  const isFirstAlpha = control.value.length > 0 &&
                       !control.value[0].match(/\d/);
  // invalid true
  const valid = isString && isFirstAlpha;

  if (!valid) {
    return { 'firstAlphaError': true };
  }
  // return  { key : true};
}
