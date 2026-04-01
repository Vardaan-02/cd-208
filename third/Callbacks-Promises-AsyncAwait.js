console.log("Hello World");

// ISSUE with async programming
// simulation 
// function dbcall() {
//     setTimeout(() => {
//         console.log("Db call Successfull");
//         return { id: 10, username: "Vardaan" };
//     }, 1000);
// }

// const data = dbcall(); // The thread did not wait here;
// console.log(data); // printed

// How to fix this issue
// 1. Callback
// 2. Promise
// 3. Async Await

// Fix 1 : Callback
// function dbCall(callback){
//     setTimeout(() => {
//         console.log("Db call Sucessfull");
//         callback({id : 10, username: "vardaan"});
//     }, 1000);
// }

// function callback(data){
//     console.log("data", data);
// }

// dbCall(callback);

// Fix 2 : Promise
function dbcall_promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // success
            console.log("Db call sucessful");
            resolve({id : 10, username : "vardaan"}); // callback

            // failure
            reject("Error");
        }, 2000)
    })
}

// const promise = dbcall_promise();
// console.log(promise); // promise handle -> resolve / reject


// const para = document.getElementsByTagName('p')[0];

// using a promise
// promise
// .then((data) => { // similar to try
//     console.log(data);
//     para.innerText = "id : " + data.id + "  username : " + data.username;
    // try created an error -> catch
    // then proimse created an error -> catch
// })
// .catch((error)=>{ // similar to catch
//     para.innerText = error;
// })

// console.log("Hello world after promise");


// Fix 3 : async await
async function fxn(){
    const data = await dbcall_promise();
    console.log(data);
}

fxn();