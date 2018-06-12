var pizza = require('fs');

pizza.writeFile(__dirname + "/index.html","<h1>HTML is great</h1>",function(error){
	if(error){
		return console.log(error);
		
	}else{ 
		return console.log("Done!")
	}
});

var basil = require('https')
var myPicLocation = 'https://s.isanook.com/ga/0/ud/191/955505/01.jpg';
basil.get(myPicLocation, function(response){
	
	response.pipe(pizza.createWriteStream(__dirname + "/jojobrzid.jpg"));
	
});

