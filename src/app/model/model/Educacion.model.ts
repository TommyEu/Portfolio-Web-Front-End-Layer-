export class Educacion {
  id: number;
  name: string;
  career: string;
  initialDate: number;
  finalDate: number;
  img: string;

  constructor(name:string, career:string, initialDate:number, finalDate:number, img:string){
    this.name = name;
    this.career = career;
    this.initialDate = initialDate;
    this.finalDate = finalDate;
    this.img = img;
  }
}
