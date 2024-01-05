import { Routes } from '@angular/router';
import { ProfileGalleryComponent } from "./profile-gallery/profile-gallery.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  {path: '', component: ProfileGalleryComponent},
  {path: 'add', component: ProfileComponent}
];
