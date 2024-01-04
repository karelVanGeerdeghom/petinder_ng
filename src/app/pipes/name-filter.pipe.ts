import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {
  transform(pets: Pet[] | null, name: string | undefined): Pet[] | null {
    if (pets !== null && name !== undefined) {
      return pets.filter(pet => pet.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);
    }

    return pets;
  }
}
