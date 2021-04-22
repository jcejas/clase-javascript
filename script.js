//alert("estoy usando este script!");

function AddClass(){
	console.log("Boton ADD");
	var titulo = document.querySelector("h1");

	titulo.classList.add("title");
}

function RemoveClass(){
	console.log("Boton REMOVE");
	var titulo = document.querySelector("h1");

	titulo.classList.remove("title");
}

function ToggleClass(){
	console.log("Boton TOGGLE");
	var titulo = document.querySelector("h1");

	titulo.classList.toggle("title");
}