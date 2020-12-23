import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'taskNameFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (((val.taskname.toLocaleLowerCase().includes(args)) ||
                    val.taskname.includes(args)));
      return rVal;
    })

  }

}