import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/* GLOBAL VARIABLES */

// const listItem = document.querySelectorAll(".list-item");
// const box = document.querySelectorAll(".box");
// //input from add item input
// const input = document.querySelector("input").value;


// /* ADD ITEM BUTTON CLICK EVENT */

<<<<<<< Updated upstream
=======
let addBtn = document.querySelector("[type=image]");
let input = document.querySelector(".add-item");

addBtn.addEventListener("click", function(e) {
	e.preventDefault();
	createItem(input.value);
	console.log(input.value);
});

// List Item Template

function createItem(newItem) {
	const template = `<div class="list-item">
		<p>${newItem}</p>
		</div>`;
		console.log(template);
		document.querySelector(".items-container").innerHTML += template;}

//Function that creates item to be added
//function appendItem(item) {
//	createItem(input.value)
  //create div + parent of div + class list-item + input.value
  // document.createElement("div");



>>>>>>> Stashed changes
// //grabs add item button
// const addItemBtn = document.getElementById("add-item-btn");

// //sub-function to write new list item into HTML
// function newListItem(input) {
//   listItem.innerHTML = input;
//   //appendChild(listItem)
// }

// //event to add new item with click
// addItemBtn.addEventListener("click", function(
//   newListItem(input);
// ))




/* DELETE BUTTON CLICK EVENT */
