import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
  if (typeof value !== 'string') return value;
    const words = value.split(' ');
  if (words.length < 2) return value;
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    return words.join(' ');
  }

}
