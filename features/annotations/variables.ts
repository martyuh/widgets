//variable declaration with a type annotation
//colon and the word is the type annotation
//syntax indicates that the value of type 'number, string, boolean, etc..., is the only type that can be assigned to apple
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in nobjects;
let now: Date = new Date();

//array 
//indicates that it will be an array with nothing but string,number,boolean,etc... elements inside of it.
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

//classes
class Car {

}
//variable car is referring only to an instance of Car
let car: Car = new Car();

//object literal
//assign a type annotation to indicate the property by listing the name and type inside curly braces, use a semicolon to separate the names and types
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//function
//type annotation within the parameters 
//type annotation assigned to the variable to indicate the arguments that it will take and the values that it will return
//everything to the right of the = sign is the function, to the left is the description of the function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

//inference
//if everything is on one line inference will assign the type