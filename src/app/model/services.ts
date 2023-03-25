export class Services {
  id?: number;
  name: string;
  person_id: number;


  constructor(name: string, person_id: number) {

      this.name = name;
      this.person_id = person_id;
  }
}
