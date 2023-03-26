export class Skill {
  id?: number;
  title: string;
  porcentage: number;
  icon: string;
  skill_group_id: number;
  person_id: number;


  constructor(title: string, porcentage: number, icon: string, skill_group_id: number, person_id: number) {

      this.title = title;
      this.porcentage = porcentage;
      this.icon = icon;
      this.skill_group_id = skill_group_id;
      this.person_id = person_id;
  }
}
