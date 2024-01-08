import { Component, OnInit } from '@angular/core';
import { PetService } from "../service/pet.service";
import { Pet } from "../model/Pet";
import { CommonModule } from "@angular/common";
import { map, Observable } from "rxjs";
import { FormsModule } from "@angular/forms";
import { NameFilterPipe } from "../pipes/name-filter.pipe";
import { PopularityPipe } from "../pipes/popularity.pipe";
import {SortFilterPipe} from "../pipes/sort-filter.pipe";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, NameFilterPipe, PopularityPipe, SortFilterPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  public pets!: Pet[];
  public selectedPet: Pet | undefined;
  public searchText: string | undefined;
  public name: string | undefined;

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet): void {
    this.selectedPet = pet;
  }

  deletePet(pet: Pet): void {
    this.selectedPet = undefined;
    this.petService.deletePet(pet).subscribe(any => {
      this.getPets();
    });
  }

  sendWhatsAppMessage(pet: Pet): void {
    if (this.name) {
      this.petService.sendWhatsAppMessage({
        name: this.name,
      });
      this.petService.increasePopularity(pet);
    }
  }
}
