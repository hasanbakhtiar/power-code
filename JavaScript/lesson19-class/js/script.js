const input = document.querySelector("input");


input.onkeydown = () => {
    input.style.transition = "1s";
    input.style.height = "70px";
    input.style.backgroundColor = "red";
}


input.onkeyup = () => {
    input.style.transition = "1s";
    input.style.height = "30px";
    input.style.backgroundColor = "white";
}

const btn  = document.querySelector('button');
btn.onmouseup = ()=>{
    btn.innerHTML = 'Start'
}
btn.onmousedown = ()=>{
    btn.innerHTML = 'changed'
}



// class Car{
//     constructor(model,year,color){
//         this.infoModel = model;
//         this.infoYear = year;
//         this.infoColor = color;
//     }
//     calculateSpeed(km,hour){
//         return `model:${this.infoModel} | speed:${Math.round(km/hour)}km/h | price: $${this.price}`
//     }
// }
// Car.prototype.price = 30000;

// const myCar = new Car("BMW X5",2020,"black");
// console.log(myCar.calculateSpeed(400,3));
// console.log(myCar.price);


// class Moto extends Car{
//     constructor(model,year,color){
//         super(model,year,color);
//     }
// }
// Moto.prototype.start = ()=>{
//     return 'start is active';
// }
// Moto.prototype.price = 5000;
// const myMoto = new Moto("Yamaha",1990,"red");
// console.log(myMoto.start());
// console.log(myMoto.calculateSpeed(1000,6));