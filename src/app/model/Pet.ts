export interface Pet {
  id: number,
  name: string,
  kind: string,
  image: string,
  profileText: string,
  popularity: number,
}

enum Kind {
  CAT = 'cat',
  DOG = 'dog',
  CHICKEN = 'chicken',
}
