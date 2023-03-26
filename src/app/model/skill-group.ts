export class SkillGroup {
  id?: number;
  category: string;
  ages: number;
  icon: string;
  person_id: number;


  constructor(category: string, ages: number, icon: string, person_id: number) {

      this.category = category;
      this.ages = ages;
      this.icon = icon;
      this.person_id = person_id;
  }
}
