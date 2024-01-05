import { Component } from '@angular/core';
import { PetService } from "../service/pet.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Validators } from '@angular/forms';
import { NgIf } from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public profileForm = this.formBuilder.group({
    id: ['8', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]],
    name: ['Kamiel', [Validators.required]],
    kind: ['Dog', [Validators.required]],
    image: ['images/kamiel.jpg', [Validators.required]],
    profileText: ['Woof!', [Validators.required]],
    popularity: ['9', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(9)]],
  });

  constructor(private formBuilder: FormBuilder, private petService: PetService, private router: Router) {}

  onSubmit() {
    if (this.profileForm.valid) {
      let pet = {
        id: parseInt(this.profileForm.value.id!),
        name: this.profileForm.value.name!,
        kind: this.profileForm.value.kind!,
        image: this.profileForm.value.image!,
        profileText: this.profileForm.value.profileText!,
        popularity: parseInt(this.profileForm.value.popularity!),
      }

      this.petService.addPet(pet).subscribe();
      this.profileForm.reset();
    }
  }

  get id() {
    return this.profileForm.get('id');
  }

  get name() {
    return this.profileForm.get('name');
  }

  get kind() {
    return this.profileForm.get('kind');
  }

  get image() {
    return this.profileForm.get('image');
  }

  get profileText() {
    return this.profileForm.get('profileText');
  }

  get popularity() {
    return this.profileForm.get('popularity');
  }
}
