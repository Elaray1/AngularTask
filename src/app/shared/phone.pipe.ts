import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phonePipe'
})


export class PhonePipeComponent implements PipeTransform {
  transform(value: any, times: number): any {
    value = +value;
    if (!(!isNaN(parseFloat(value)) && isFinite(value))) return 'Not a phone number!'
    if (value == null || value == '') return console.log(value = '');
    value = '(' + value;
    if (value.length <= 2) return value;
    value = value.substring(0, 3) + ')' + value.substring(3);
    if (value.length > 7) {
      value = value.substring(0, 7) + '-' + value.substring(7);
    }
    if (value.length > 10) {
      value = value.substring(0, 10) + '-' + value.substring(10);
    }
    if (value.length > 13) value = value.substring(0, 13);
    return value;
  }
}
