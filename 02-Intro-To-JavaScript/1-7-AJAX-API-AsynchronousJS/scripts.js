const examplePromise = new Promise(function (resolve, reject) {
	let sum;
	setTimeout(function(){
		sum = 5 + 6;
		if(sum > 10) {
			resolve(sum);
		}else{
			reject("The promise has been rejected");
		}
	}, 2000);
});

console.log("some piece of code");
examplePromise.then(function(result){
	console.log(result);
}).catch(function(error){
	console.log(error);
});
console.log("another piece of code");

fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
	return response.json(); // This returns a promise!
	}).then(function (pokemonList) {
		console.log(pokemonList); // The actual JSON response
	}).catch(function () {
		console.log("A Error occurred!!");
});