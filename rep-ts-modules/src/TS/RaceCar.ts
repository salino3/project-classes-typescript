import { Car, ICar } from "./Page2";

//! class RaceCar
class RaceCar extends Car implements ICar {
  protected _s0_100: number;
  protected _kmH: number;

  constructor(
    color: string,
    brand: string,
    kmH: number,
    s0_100: number,
    wheels: number = 4
  ) {
    super(color, brand, wheels);

    this._kmH = kmH;
    this._s0_100 = s0_100;
  }

  get kmH() {
    return this._kmH;
  }

  set kmH(newKmH: number) {
    this._kmH = newKmH;
  }

  get s0_100() {
    return this._s0_100;
  }

  set s0_100(newS0_100: number) {
    this._s0_100 = newS0_100;
  }
}

let race1 = new RaceCar("yellow", "Alfa Romeo", 300, 2.9);



export {race1}
