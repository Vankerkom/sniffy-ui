import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectionRange'
})
export class SelectionRangePipe implements PipeTransform {

  transform(index: number, startIndex: number, endIndex: number): boolean {
    const smallestIndex = Math.min(startIndex, endIndex);
    const largestIndex = Math.max(startIndex, endIndex);

    return smallestIndex >= 0 && largestIndex >= 0 && index >= smallestIndex && index <= largestIndex;
  }

}
