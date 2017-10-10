import { Pipe, PipeTransform } from '@angular/core';

// po dodaniu pure do obiektu w dalszym ciągu można dodawać servery na klik oi filtrować je
// w nmiędzyczasie. By Default nie ma takiej opcji, bo zagrożone jest to loss of performance
// dodaję pure tyklo wtedy kiedy zależy mi na tym by po wykonaiu filtrowania móc w dalszym ciągu
// na bieżąco operować filtrem na nowych nadchodzących danych


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
