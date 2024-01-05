import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Pet } from "../model/Pet";
import {WhatsAppMessage} from "../model/WhatsAppMessage";
import {PetDto} from "../model/PetDto";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.url);
  }

  addPet(petDto: PetDto): Observable<Pet> {
    return this.http.post<Pet>(this.url, petDto);
  }

  deletePet(pet: Pet): void {
    this.http.delete(`${this.url}/${pet.id}`).subscribe();
  }

  sendWhatsAppMessage(whatsAppMessage: WhatsAppMessage): void {
    this.http.post(`${this.url}/sendText`, whatsAppMessage).subscribe();
  }

  increasePopularity(pet: Pet): void {
    this.http.get(`${this.url}/${pet.name}/incrementPopularity`).subscribe();
  }
}
