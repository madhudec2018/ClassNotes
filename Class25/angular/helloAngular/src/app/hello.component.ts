import { Component } from '@angular/core';

// meta data --> information this is a angular component
// mvc -- model, view, controller
// mvvm -- gang of four book (Object Oriented)

@Component({
    selector: 'hello',
    template: `<h1>hello {{name}} {{ 10 + 5}}</h1>
    <p>This is my component </p>`
})
export class HelloComponent {
    name: string;
   // string name java
   // name string c#
    constructor() {
        this.name = `Tarak`;
    }
}


// function Car() {
//
//  this.carName = 'BMW';
// }

// Car.prototype.drive = function() {
//  console.log('driving');
// }

// var car = new Car();

// car.drive();

// var secondCar = new Car();
// secondCar.name = 'Audi'


