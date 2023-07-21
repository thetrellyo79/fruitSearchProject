const fruit = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruitsList = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry ', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime ', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange 🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Tomato 🍅', 'Yuzu'];


function searchHandler(e) {
	// TODO 
	let input = e.target.value.toLowerCase();  // makes the input lowercase
	
	if(input.length > 0){
		results = fruitsList.filter( letters => { // lowercases input and filters them according to the results
			return letters.toLowerCase().includes(input);
		});
		 console.log(results); // shows the filtered results in the console
		 suggestions.innerHTML = '';  // if search box is empty, nothing will show up under results
	}

	showSuggestions(results); // shows the result(s)
}


function showSuggestions(results) {
	// TODO
	results.forEach(item => {   // for each result
	const li = document.createElement('li') // a li will be created
	li.innerText = item; // the text in the search bar is equal to the item(s) that it match in the results
	suggestions.appendChild(li); // the result will be appended to the li
	});
}
	
function useSuggestion(e) {
	// TODO
	fruit.value = e.target.innerHTML; // the text in the search bar is set equal to the results to check for a match
    suggestions.innerHTML = ''; // if search box is empty, nothing will show up under results
}

fruit.addEventListener('keyup', searchHandler); // the function searchHandler runs after each letter typed/deleted
suggestions.addEventListener('click', useSuggestion); // the function useSuggestion runs when a result is clicked


