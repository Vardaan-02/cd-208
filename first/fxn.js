// named functoin
function fxn() {
    console.log("Vardaan Named");
}

// varibale = fxn
let named_fxn = () => {
    console.log("Vardaan Unnamed")
}

// named_fxn is a variable which has a function written in it

// name(params);
fxn();

named_fxn() // here we have called the function inside named_fxn variable

console.log(named_fxn);