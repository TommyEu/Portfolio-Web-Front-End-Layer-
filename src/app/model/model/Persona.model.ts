export class Persona{
    idacerca_de: number;
    name: string;
    img: string;
    coverImg: string;
    info: string;
    title: string;
    ubication:string;

    constructor(idacerca_de:number, name:string, img: string, coverImg: string, info:string, title:string, ubication:string){
        this.idacerca_de = idacerca_de;
        this.img = img;
        this.coverImg = coverImg;
        this.name = name;
        this.info = info;
        this.title = title;
        this.ubication = ubication;
    }
}