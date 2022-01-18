import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {


    if(!value)
    {
           return 0
    }
    return value * 1.60934;
  }

}
