export class Task {
  id?: number;
  title: string;
  idService: number;
  //person_id: number;


  constructor(title: string, idService: number) { //person_id: number

      this.title = title;
      this.idService = idService;
      //this.person_id = person_id;
  }
}
