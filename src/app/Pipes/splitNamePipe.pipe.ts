import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitName',
  standalone: true,
})
export class SplitNamePipe implements PipeTransform {
  transform(fullName: string): { firstName: string; lastName: string } {
    const [first, ...rest] = fullName.split(' ');
    return {
      firstName: first || '',
      lastName: rest.join(' ') || '',
    };
  }
}
