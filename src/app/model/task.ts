export class Task {
  id?: number;
  title: string;
  services_id: number;
  services_person_id: number;


  constructor(title: string, services_id: number, services_person_id: number) {

      this.title = title;
      this.services_id = services_id;
      this.services_person_id = services_person_id;
  }
}
