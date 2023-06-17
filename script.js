const fruit = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruitsList = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry ', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime ', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange 🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Tomato 🍅', 'Yuzu'];

	
	

function search(str) {
	let results = [];
	let input = str.toLowerCase().includes(input.toLowerCase());
	

	showSuggestions(results);
	//TODO

   }

function searchHandler(e) {
	// TODO filter
	let input = e.target.value.toLowerCase();

	if(input.length > 0){
		results = fruitsList.filter( letters => {
			return letters.toLowerCase().includes(input);
		});
		console.log(results);
		return results;
	}
}


function showSuggestions(results) {
	// TODO
	fruit.value = results;
	useSuggestion();
}

function useSuggestion(e) {
	// TODO
	fruit.value = e.target.innerHTML;
    suggestions.innerHTML = '';
}




fruit.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// I'm not finished, please forgive me.




// fruit.addEventListener('keyup', (e) => {
// 	let results = [];
// 	let input = e.target.value.toLowerCase();
 

// 	if(input.length > 0){
// 			results = fruitsList.filter( letters => {
// 				return letters.toLowerCase().includes(input);
// 			});
// 		}
// 		console.log(results);
// 		//display(results);
// 		})

//let results = [];
//let input = fruit.value;

// fruit.addEventListener('keyup', (e) => {
// 	const fruitString = e.target.value;
// 	const filteredFruit = fruitsList.filter( (fruits) => {
// 		return fruits.toLowerCase().includes(input.toLowerCase());
// 	});
// 	console.log(filteredFruit);
// });






// fruit.addEventListener('keyup', (e) => {
// 	let results = [];
//     let input = e.target.value.toLowerCase();
 

// 	if(input.length > 0){
// 			results = fruitsList.filter( letters => {
// 				return letters.toLowerCase().includes(input);
// 			});
// 		}
// 		console.log(results);
// 		//display(results);
// 		})

//https://www.youtube.com/watch?v=pdyFf1ugVfk&list=WL&index=7	
//https://www.youtube.com/watch?v=wxz5vJ1BWrc
//https://www.tutorialspoint.com/how-to-create-html-list-from-javascript-array