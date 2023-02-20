import { greet, car1 } from "./Page2";
import { street1, alfa1, alfa2, newModelAF1 } from "./StreetCar";
import { race1 } from "./RaceCar";


// greet();
car1.ShowCar();
car1.WhatsUp(" yes  ");

console.log("race1---------------------");
race1.ShowCar();
race1.WhatsUp(" nO  ");

console.log("street1---------------------");
street1.ShowCar();
street1.WhatsUp(" YeS  ");

console.log("alfa1---------------------");
alfa1.ShowCar();
alfa1.WhatsUp(" YeS  ");
alfa1.displayIsNew(); 

console.log("alfa2---------------------");
alfa2.ShowCar();
alfa2.WhatsUp(" YeS  ");
alfa2.displayIsNew(); 

console.log("newModelAF1---------------------");
newModelAF1.ShowCar();
newModelAF1.WhatsUp(" YeS  ");
newModelAF1.displayIsNew(); 
