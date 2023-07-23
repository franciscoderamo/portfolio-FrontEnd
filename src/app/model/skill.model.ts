export class Skill {
  id?: number;
  title: string;
  porcentage: number;
  idSkillGroup: number;
  //person_id: number;


  constructor(title: string, porcentage: number, idSkillGroup: number) {//person_id: number

      this.title = title;
      this.porcentage = porcentage;
      this.idSkillGroup = idSkillGroup;
      //this.person_id = person_id;
  }
}
