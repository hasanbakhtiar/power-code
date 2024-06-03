// var diqqet =(student:string,age:number = 20):void=>{
//     console.log(`Ay ${student}, diqqetini topla`);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// }
// var telefonaBaxma=()=>{
//     return diqqet("Peri");
// }
// telefonaBaxma();
var Car = /** @class */ (function () {
    function Car(brand, color, year) {
        this.infoBrand = brand;
        this.infoColor = color;
        this.infoYear = year;
    }
    Car.prototype.showData = function () {
        return this.infoBrand;
    };
    return Car;
}());
var myCar = new Car("BMW", "white", 1990);
// console.log(myCar.infoBrand);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, color, year) {
        return _super.call(this, brand, color, year) || this;
    }
    return Moto;
}(Car));
var myMoto = new Moto("Yamaha", "red", 2020);
