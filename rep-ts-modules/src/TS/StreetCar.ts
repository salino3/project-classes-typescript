import { Car, ICar } from "./Page2";

//! class StreetCar
class StreetCar extends Car implements ICar {
  protected _seating: number;
  protected _doors: number;

  constructor(
    color: string,
    brand: string,
    seating: number,
    doors: number,
    wheels: number = 4
  ) {
    super(color, brand, wheels);

    this._seating = seating;
    this._doors = doors;
  }

  get seating() {
    return this._seating;
  }

  set seating(newSeating: number) {
    this._seating = newSeating;
  }

  get doors() {
    return this._doors;
  }

  set doors(newDoors) {
    this._doors = newDoors;
  }
}

let street1 = new StreetCar("black", "Audi", 5, 5);

//! class AlfaRomeo
class AlfaRomeo extends StreetCar implements ICar {
  #isNew: boolean = true;
  protected _model: string;

  constructor(
    color: string,
    seating: number,
    doors: number,
    model: string,
    isNew: boolean,
    wheels: number = 4,
    brand: string = "Alfa Romeo"
  ) {
    super(color, brand, wheels, seating, doors);

    this.#isNew = isNew;
    this._model = model;
  }

  get isNew() {
    return this.#isNew;
  }

  set isNew(newIsNew: boolean) {
    this.isNew = newIsNew;
  }

  get model() {
    return this._model;
  }

  set model(newModel: string) {
    this._model = newModel;
  }

  public displayIsNew() {
    this.IsNew();
  }

  protected IsNew() {
    if (this.#isNew) {
      console.log(
        "this car it's a NEW model from " +
          this.brand +
          " company, the model is " +
          this._model
      );
    } else {
      console.log("this car it's a OLD model from " + this.brand + " company");
    }
  }
  // En ese caso, el método protegido en la clase hija restringirá el acceso al método 
  // sobrescrito a la clase hija y sus subclases.
  // parece que los override deben ser public por no tener conflictos con cllases hijas
  public override ShowCar() {
    console.log(
      `This ${this.brand} car has ${this.wheels} wheel${
        this.wheels ? "s" : ""
      }, the model is ${this.model} and is ${this.color} color `
    );
  }
};

let alfa1 = new AlfaRomeo("green", 5, 5, "Giulietta", false);
let alfa2 = new AlfaRomeo("darkblue", 3, 5, "Mito", true);
  
//! class newModelsAF (Alfa Romeo)
class newModelAF extends AlfaRomeo implements ICar {
  #isNew: boolean = true;
  private _price: number;

  constructor(
    color: string,
    seating: number,
    doors: number,
    model: string,
    price: number,
    isNew: boolean,
    wheels: number = 4,
    brand: string = "Alfa Romeo"
  ) {
    super(color, seating, doors, model, isNew, wheels, brand);

    this.#isNew = isNew;
    this._price = price;
  }

  get isNew() {
    return this.#isNew;
  }

  set isNew(newIsNew: boolean) {
    this.isNew = newIsNew;
  }

  get price() {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
  }

  public displayIsNew() {
    this.IsNew();
  }

  protected IsNew() {
    super.IsNew();
  }

  


};

let newModelAF1 = new newModelAF("White", 5, 5, "X25", 30.000, true );

export { street1, alfa1, alfa2, newModelAF1 };