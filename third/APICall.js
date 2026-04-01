// API call

async function getData() {
    // proimse handling
    const promise = fetch('https://jsonplaceholder.typicode.com/posts/2'); // return a promise
    promise
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        });


    // async await
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    console.log(await data.json());
}

getData();