/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

// web api
// Conectarnos al servidor
// window
// 	.fetch(url)
// // procesar la respuesta, y convertirla en JSON
// 	.then(res => res.json())
// // JSON -> Data -> Renderizar info browser
// 	.then(resJson => {
	// 		resJson.data.forEach(item => {
		// 			// console.log(item.name);
		// 		});
		// 	});
		
		
// Conectarnos al servidor Con Async y await
async function recolectandoDatosApi(){
	let response = await fetch(url);
	let dataJson = await response.json()
	const todosLosItems= [];
	console.log("fetch: ", response);	
	console.log("convertimos a json:", dataJson);	
	console.log("length =",dataJson.length);
	dataJson.data.forEach(item => {
		// crear imagen
		const image = document.createElement("img");
		// crear Titulo
		const title = document.createElement("h2")
		// crear Precio
		const price = document.createElement("div");
		// Creo un contenedor para guardar todo lo anterior
		const container = document.createElement("div");
		container.appendChild(image, title, price);

		todosLosItems.push(container);
	});

	document.body.append(...todosLosItems);

}

recolectandoDatosApi()