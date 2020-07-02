import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'char'
})
export class CharPipe implements PipeTransform {

  transform(value: number): string {
    console.log(String.fromCharCode(value).length);
    return (value >= 0x20) ? String.fromCharCode(value) : '.';
  }

}
