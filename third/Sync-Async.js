function b(){
    setTimeout(()=>{
        console.log("My name is Vardaan");
    }, 2000 /*    (ms)   */);
}

b(); // The thread will not wait here
console.log("I am 21 years old"); // here console.log() did not wait for setTimeout


let count = 0;
function a(){
    while(count < 1000000000){
        count++;
    }
    console.log("I am inside a");
}

a(); // The tread will wait here
console.log(count); // here console.log() waited for while loop