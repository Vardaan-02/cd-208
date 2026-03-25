console.log("My name is Vardaan");

let a = 5; // reassignment possible
const constant = 21; // no reassignment
var name = "vardaan"; // legacy, not preferable

a = "cd-208";

a = false;

// constant = 56; // no red line because no complier

console.log(constant);

{
    let course = "cd-308";
    console.log(course);
}

// Data Types - interger, decimal, NaN, decimal, string, char, object, array


// Objects
const obj = {
    name: "vardaan",
    age: 21,
    gender: "Male",
    fxn: ()=>{
        console.log("Hello World");
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.fxn());
