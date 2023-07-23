export class Services {
  id?: number;
  name: string;
  icon: string;
  //person_id: number;


  constructor(name: string, icon: string) {//person_id: number

      this.name = name;
      this.icon = icon;
      //this.person_id = person_id;
  }
}
