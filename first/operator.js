// equal to operator works differently in javascript

let a = 5;
let string_a = "5";

// if (a == string_a){ 
//     console.log("double equal",a == string_a);
// }

console.log("double equal || a = ", a, " || string_a = ", string_a, "||", a == string_a); // it compares only value 
console.log("triple equal || a = ", a, " || string_a = ", string_a, "||", a === string_a); // different data type

// == double equal -> only check for value, doesn't check for data type

// === triple equal -> this also checks for data type

// module % is reminder

// a++ -> a , ++ -> (a = a+1)
// ++a -> ++ (a = a+1) , a

// a = 5;

console.log(a++);
console.log(a);

// a = 6;

console.log(++a);
console.log(a);

// a = 7;

// logical operators -> && || ! 

// terninary operator is nothing but if else
let result = (a == 8) ? 10 : 20;
console.log(result);