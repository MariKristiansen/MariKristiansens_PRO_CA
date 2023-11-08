//----------Classes----------

//Parent
class Vehicle {
    constructor(vehicleSpec) {
        this.wheels = vehicleSpec.wheels;
        this.doors = vehicleSpec.doors;
        this.color = vehicleSpec.color;
    }
    description() {
        return ("This vehicle is " + this.color + ", with " + this.wheels + "x wheels, and " + this.doors + "x doors.");
    } 
};


//Child 1
class Car extends Vehicle {
    constructor(vehicleSpec) {
        super(vehicleSpec);
        this.topSpeed = vehicleSpec.topSpeed;
    }
    getTopSpeed() {
        return ("Top speed of this car: " + this.topSpeed + " km/h.");
    }
};


//Child 2
class Truck extends Vehicle {
    constructor (vehicleSpec) {
        super(vehicleSpec);
        this.maxLoadWeight = vehicleSpec.maxLoadWeight;
    }
    getMaxLoadWeight() {
        return ("Max load weight of this truck: " + this.maxLoadWeight + " kg.");
    }
};


//Vehicle Factory will create Vehicles of different types
class VehicleFactory {
    create(type, vehicleSpec) {
        switch(type) {
            case 'Car':
                return new Car(vehicleSpec);
            case 'Truck':
                return new Truck(vehicleSpec);
        }
    }
};

//----------Car Implementation----------

//Create JSON string from schema
const json_car = {"wheels": 4, "doors": 5, "color": "black"};
const carString = JSON.stringify(json_car);


//Convert JSON string to JS Object
const js_car = JSON.parse(carString);


//Add topSpeed to the JS Obj
js_car.topSpeed = 200;


//Create CarFactory and a Car
const carFactory = new VehicleFactory();
const newCar = carFactory.create('Car', js_car);

console.log(newCar.description());
console.log(newCar.getTopSpeed());


//----------Truck Implementation----------

//Create JSON string from schema
const json_truck = {"wheels": 12, "doors": 2, "color": "white"};
const truckString = JSON.stringify(json_truck);


//Convert JSON string to JS Object
const js_truck = JSON.parse(truckString);


//Add maxLoadWeight to the JS Obj
js_truck.maxLoadWeight = 100000;


//Create TruckFactory and a Truck
const truckFactory = new VehicleFactory();
const newTruck = truckFactory.create('Truck', js_truck);//Added the object

console.log(newTruck.description());
console.log(newTruck.getMaxLoadWeight());