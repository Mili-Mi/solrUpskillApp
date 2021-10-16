export class Product{
public pid:number;
public pname:string;
public pdescription:string;
public pquantity:number;
public pprice:number;
public pcategory:string;
public imagepath:string;
constructor( pid:number,pname:string,pdescription:string,pquantity:number, pprice:number,
 pcategory:string,imagepath:string){
    this.pid =pid;
    this.pname =pname;
    this.pdescription=pdescription;
    this.pquantity=pquantity;
    this.pprice=pprice;
    this.pcategory=pcategory;
    this.imagepath=imagepath;
}
}