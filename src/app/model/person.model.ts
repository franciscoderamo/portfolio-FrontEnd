export class Person{
  id!: number;
  name: string;
  resume: string;
  description: string;
  about: string;
  image: string;
  whatsapp: number;
  github: string;
  linkedin: string;
  email: string;
  ubication: string;
  country: string;
  curriculum: string;

  constructor(name: string, resume: string, description: string, about: string, image: string, whatsapp: number, github: string, linkedin: string, email: string, ubication: string, country: string, curriculum: string){
      this.name = name;
      this.resume = resume;
      this.description = description;
      this.about = about;
      this.image = image;
      this.whatsapp = whatsapp;
      this.github = github;
      this.linkedin = linkedin;
      this.email = email;
      this.ubication = ubication;
      this.country = country;
      this.curriculum = curriculum;
  }
}
