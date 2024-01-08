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
  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this._url);
  }

  addPet(petDto: PetDto): Observable<Pet> {
    return this.http.post<Pet>(this._url, petDto);
  }

  deletePet(pet: Pet): Observable<any> {
    return this.http.delete(`${this._url}/${pet.id}`);
  }

  sendWhatsAppMessage(whatsAppMessage: WhatsAppMessage): void {
    this.http.post(`${this._url}/sendText`, whatsAppMessage).subscribe();
  }

  increasePopularity(pet: Pet): void {
    this.http.get(`${this._url}/${pet.name}/incrementPopularity`).subscribe();
  }
}
