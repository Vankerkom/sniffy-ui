import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hex',
})
export class HexPipe implements PipeTransform {
  transform(value: number, maxPaddingLength: number = 2): string {
    const paddingLength = maxPaddingLength || 2;

    return value.toString(16).padStart(paddingLength, '0').toUpperCase();
  }
}
