console.log("Hello World");

// GOAL
// let head = head_tag_in_html_file; // head

// let body = body_tag_in_html_file; // body

// methods for bring tag as variable from html to javascript
// 1. getElementById(id) 
// 2. getElementByClassName(class)
// 3. getElementByTagName(class)
// 4. querySelector()
// 5. querySelectorAll()


// getElementById
const heading = document.getElementById("Heading_1");

heading.innerText = "Vardaan";

console.log(heading);

// id is unique -> getElementById gets Unique Tag associated to the id

// getElementByClassName
const paragraph = document.getElementsByClassName("para");

// console.log(paragraph);

// paragraph[0].innerText = "This is cd=208 course";
// paragraph[1].innerText = "Second Para";

// classname is not unique -> getElementByClassName return an array || return HTML Collection which is nothing but a array of html tags


// getElementByTagName
const paragraph_2 = document.getElementsByTagName("p");

// console.log(paragraph_2);

// paragraph_2[0].innerText = "Tag Name";
// paragraph_2[1].innerText = "Javascript tutorial";

// querySelector

const new_heading_by_class = document.querySelector(".class1");
const new_heading_by_class_all = document.querySelectorAll(".class1");
const new_heading_by_id = document.querySelector("#id1");

console.log(new_heading_by_class);
console.log(new_heading_by_class_all[0]);
console.log(new_heading_by_id);


// Experiment
const body = document.getElementsByTagName("body")[0];
// body.innerHTML = "";
body.innerHTML += "<p> new info </p>";
console.log(body);