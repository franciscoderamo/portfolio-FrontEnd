export class Studies {
  id?: number;
  carrer: string;
  institution: string;
  start: Date | string | undefined;
  end: Date | string | undefined;
  person_id: number;


  constructor(carrer: string, institution: string, start: Date, end: Date, person_id: number) {

      this.carrer = carrer;
      this.institution = institution;
      this.start = start;
      this.end = end;
      this.person_id = person_id;
  }
}
