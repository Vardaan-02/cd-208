let numbers = [1, 2, 3, 4, 5];

let fruits = ["Mango", "Apple", "Banana"]

let array = ["Vardaan", 21, "Male", true, NaN, Infinity]; // Data type not restricted

console.log(fruits[0]); // -> Mango
console.log(fruits[1]); // -> Apple
console.log(fruits[2]); // -> Banana

console.log(fruits); // JS allows you to print whole array

console.log(fruits.length, numbers.length);

fruits.push("Grapes"); // adds element

console.log(fruits);

fruits.pop(); // remove last element

console.log(fruits);

fruits.shift(); // remove first element

console.log(fruits);

// Basic For Loop
for (let i = 0 ; i < array.length ; i++){
    console.log(array[i]);
}

let a = 0;

// Basic While Loop
while ( a <= 5 ){
    console.log(a++);
}

// Basic Do While Loop
do{
    console.log(a++);
}
while (a < 10);

// for...of Loop (Traversal in array)
for (let element of array){
    console.log(element);
}

// forEach -> method
fruits.forEach((value)=>{
    console.log(value);
}) // you can pass functions as params
