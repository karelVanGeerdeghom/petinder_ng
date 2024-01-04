import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import {Pet} from "../model/Pet";

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
}
