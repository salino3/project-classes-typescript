//! interface Car
export interface ICar {
  _wheels: number;
  // with interfaces only public params
};

//! class Car
export class Car implements ICar {
  // access modifiers -- private, protected, public and #ejemplo
  // '#' ejemplo <- it means accessible only inside the class, with some method for example but the param value is not accessible
  protected _color: string;
  protected _brand: string;
  public _wheels: number = 4;

  constructor(color: string, brand: string, wheels: number = 4) {
    this._color = color;
    this._brand = brand;
    this._wheels = wheels;
  }

  get wheels() {
    return this._wheels;
  }
  set wheels(newWheels: number) {
    this._wheels = newWheels;
  }

  get color() {
    return this._color;
  }
  set color(newColor: string) {
    this._color = newColor;
  }

  get brand() {
    return this._brand;
  }
  set brand(newBrand: string) {
    this._brand = newBrand;
  }

  public ShowCar() {
    console.log(
      `This ${this.brand} car has ${this.wheels} wheel${
        this.wheels != 1 ? "s" : ""
      }, and is ${this.color} color `
    );
  }
  
  public WhatsUp(answer: string) {
    console.log("Do you have a deflated wheel?");
    if (answer.toLowerCase().trim() === "yes") {
      this.Help();
    } else if (answer.toLowerCase().trim() === "no") {
      console.log("No thanks it`s all good!");
    } else {
      console.log("Sorry I didn't understand, can you repeat?");
    }
  }

  private Help() {
    console.log("Yes please! help me to change the wheel");
  }
};

let car1 = new Car("red", "FIAT");

function greet() {
  console.log("Buenas tardes!");
};

export { greet, car1 };