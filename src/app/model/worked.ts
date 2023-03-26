export class Worked {
  id?: number;
  job: string;
  bussines: string;
  start: Date | string | undefined;
  end: Date | string | undefined;
  person_id: number;


  constructor(job: string, bussines: string, start: Date, end: Date, person_id: number) {

      this.job = job;
      this.bussines = bussines;
      this.start = start;
      this.end = end;
      this.person_id = person_id;
  }
}
