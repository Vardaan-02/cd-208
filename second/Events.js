const counter = document.querySelector("#counter");

function add1() {
    counter.innerText++;
}

const subtract1 = () => {
    counter.innerText--;
}

const add_1_button = document.querySelector("#add1");
const sub_1_button = document.querySelector("#sub1");

add_1_button.addEventListener('click', add1);
sub_1_button.addEventListener('click', subtract1);

const div = document.querySelector("#test");
const button = document.querySelector("#testbutton");

// div.addEventListener('click', (event)=>{
//     event.target // the actual element which caused the event
//     event.type // tells type of event
//     event.preventDefault() // stops the default behaviour of browser
//     event.stopPropagation(); // stops event to propogate to parent
// })

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

div.addEventListener('click', (event) => {
    div.style.backgroundColor = getRandomColor();
})

// as button is a child of div, when event lisnter of button is called it also calls the event listner of its parent i.e. div and we dont want that becuase it will lead to a random color of div whereas we want balck
// event.stopPropogation lets you stop the event at source the event is not propogated to the parent.

button.addEventListener('click', (event) => {
    div.style.backgroundColor = "black";
    event.stopPropagation();
})