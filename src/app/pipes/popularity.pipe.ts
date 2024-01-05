import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularity',
  standalone: true
})
export class PopularityPipe implements PipeTransform {

  transform(popularity: number): string {
    if (popularity < 1) {
      return 'Freezing';
    }

    if (popularity < 3) {
      return 'Normal';
    }

    if (popularity < 5) {
      return 'Popular';
    }

    return 'Sizzling hot!';
  }

}
