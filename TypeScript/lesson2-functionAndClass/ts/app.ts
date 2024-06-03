// var diqqet =(student:string,age:number = 20):void=>{
//     console.log(`Ay ${student}, diqqetini topla`);
    
// }

// var telefonaBaxma=()=>{
//     return diqqet("Peri");
// }
// telefonaBaxma();



class Car {

    // public | protected | private
    private infoBrand:string;
    public infoColor:string;
    public infoYear:number;
    
    
    constructor(brand:string,color:string,year:number){
        this.infoBrand=brand;
        this.infoColor=color;
        this.infoYear=year;
    }

    public showData(){
        return this.infoBrand;
    }
}

const myCar = new Car("BMW","white",1990);
// console.log(myCar.infoBrand);


class Moto extends Car{
    constructor(brand:string,color:string,year:number){
        super(brand,color,year);
    }

    // newData(){
    //     return this.infoBrand;
    // }
}
const myMoto = new Moto("Yamaha","red",2020);
