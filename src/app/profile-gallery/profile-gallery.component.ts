import { Component, OnInit } from '@angular/core';
import { PetService } from "../service/pet.service";
import { Pet } from "../model/Pet";
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  pets$!: Observable<Pet[]>;
  constructor(private petService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.pets$ = this.petService.getPets();
  }
}
