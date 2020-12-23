import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByUser'
})
export class FilterByUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // alert(args);
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (((val.email.includes(args))));
      return rVal;
    })

  }
}
