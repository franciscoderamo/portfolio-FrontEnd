export class Portfolio {
  id?: number;
  title: string;
  image: string;
  description: string;
  link: string;
  idService: number;
  //services_person_id: number;


  constructor(title: string, image: string, description: string, link: string, idService: number) { //services_person_id: number

      this.title = title;
      this.image = image;
      this.description = description;
      this.link = link;
      this.idService = idService;
      //this.services_person_id = services_person_id;
  }
}
