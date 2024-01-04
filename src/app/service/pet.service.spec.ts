import { TestBed } from '@angular/core/testing';

import { PetService } from './pet.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pet } from '../model/Pet';
import { firstValueFrom } from 'rxjs';

describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    service = TestBed.inject(PetService);
  });

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get pets', async () => {
    const pets$ = service.getPets();
    const petsPromise = firstValueFrom(pets$);

    const httpTesting = TestBed.inject(HttpTestingController);
    const req = httpTesting.expectOne({
      method: 'GET',
      url: `${environment.backendUrl}/pets`,
    }, 'Request to get the pets');

    const petsResult: Pet[] = [
      {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', profileText: 'test', popularity: 1},
      {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', profileText: 'test', popularity: 2}
    ];
    req.flush(petsResult);

    expect(await petsPromise).toEqual(petsResult);

    httpTesting.verify();
  });
});
