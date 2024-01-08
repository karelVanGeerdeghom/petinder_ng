import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'sortFilter',
  standalone: true,
  pure: false
})
export class SortFilterPipe implements PipeTransform {
  transform(pets: Pet[] | null): Pet[] | null {
    if (pets !== null) {
      return pets.sort((a, b) => a.name.localeCompare(b.name));
    }

    return pets;
  }
}
