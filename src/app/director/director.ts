export class Director {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: any;
  biography: string;

  constructor(
    id: string,
    name: string,
    photo: string,
    nationality: string,
    birthDate: any,
    biography: string
  ) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.nationality = nationality;
    this.birthDate = birthDate;
    this.biography = biography;
  }
}
