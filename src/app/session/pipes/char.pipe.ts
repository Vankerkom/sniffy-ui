import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'char'
})
export class CharPipe implements PipeTransform {

  transform(value: number): string {
    return (value >= 0x20) ? String.fromCharCode(value) : '.';
  }

}
