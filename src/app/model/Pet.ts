export interface Pet {
  id: number,
  name: string,
  kind: string,
  image: string,
  profileText: string,
  popularity: number,
}

export enum Kind {
  CAT = 'cat',
  DOG = 'dog',
  CHICKEN = 'chicken',
}
