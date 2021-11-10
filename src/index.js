/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/
const baseUrl = "https://platzi-avo.vercel.app/"; 

const appNode = document.querySelector('#app');

const formatPrice = (price) => {
	
	const newPrice = new window.Intl.NumberFormat('en-EN', {
		style: 'currency',
		currency: 'USD',
	}).format(price)

	return newPrice;
};
// API intl (internacionalizacion en ingles);
// 1 - format dat
// 2 - format monedas

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
	let response = await fetch(`${baseUrl}api/avo`);
	let dataJson = await response.json()
	const todosLosItems= [];
	console.log("fetch: ", response);	
	console.log("convertimos a json:", dataJson);	
	console.log("length =",dataJson.length);
	dataJson.data.forEach(item => {
		// crear imagen
		
		const image = document.createElement("img");
		
		//asigno la url de la API como src de la etiqueta
		image.src = `${baseUrl}${item.image}`;

		// crear Titulo
		const title = document.createElement("h2")
		
		//asigno el name de la API como contenido de la etiqueta
		title.textContent = item.name;
	
		// Agrego una clase a title
		title.className = "muy-grande";

		// crear Precio
		const price = document.createElement("div");
		
		//asigno el precio de la API como contenido de la etiqueta
		price.textContent = formatPrice(item.price);


		// Creo un contenedor para guardar todo lo anterior
		const container = document.createElement("div");
		container.append(image, title, price);

		todosLosItems.push(container);
	});

	appNode.append(...todosLosItems);

}

recolectandoDatosApi()