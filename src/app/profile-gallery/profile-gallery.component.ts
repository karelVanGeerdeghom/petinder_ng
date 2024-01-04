import { Component, OnInit } from '@angular/core';
import { PetService } from "../service/pet.service";
import { Pet } from "../model/Pet";
import { CommonModule } from "@angular/common";
import { map, Observable } from "rxjs";
import { FormsModule } from "@angular/forms";
import { NameFilterPipe } from "../pipes/name-filter.pipe";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, NameFilterPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  public pets$!: Observable<Pet[]>;
  public selectedPet: Pet | undefined;
  public searchText: string | undefined;

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.pets$ = this.petService.getPets().pipe(
      map(pets => pets.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  selectPet(pet: Pet): void {
    this.selectedPet = pet;
  }
}
