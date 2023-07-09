console.log('***** Music Collection *****')
 
let collection = [];

let rainWorld ={
title: 'Rain World',
artist: 'James Primate',
yearPublished: 2017
} //end rainWorld

let seventhSon ={
    title: 'Seventh Son of a Seventh Son',
    artist: 'Iron Maiden',
    yearPublished: 1988
}

let darkWood ={
    title: 'Darkwood',
    artist: 'Arthur Kordas',
    yearPublished: 2014
}

let downPour ={
    title: 'Downpour',
    artist: 'James Primate',
    yearPublished: 2022
}

let oneShot ={
    title: 'OneShot',
    artist: 'Nightmargin',
    yearPublished: 2016
}

let boardsOfCanda ={
    title: 'Geogaddi',
    artist: 'Boards of Canada',
    yearPublished: 2002
}




function addToCollection(title, artist, yearPublished){
collection.push(title, artist, yearPublished);
//console.log(collection);
return title;
} //end addToCollection

//console.log(addToCollection('Rain World', 'James Primate', 2017));
console.log(addToCollection(rainWorld.title, rainWorld.artist, rainWorld.yearPublished));
console.log(addToCollection(seventhSon.title, seventhSon.artist, seventhSon.yearPublished));
console.log(addToCollection(darkWood.title, darkWood.artist, darkWood.yearPublished));
console.log(addToCollection(downPour.title, downPour.artist, downPour.yearPublished));
console.log(addToCollection(oneShot.title, oneShot.artist, oneShot.yearPublished));
console.log(addToCollection(boardsOfCanda.title, boardsOfCanda.artist, boardsOfCanda.yearPublished));

console.log(collection);

let artists = [rainWorld.artist, seventhSon.artist, darkWood.artist, downPour.artist, oneShot.artist, boardsOfCanda.artist];
let titles = [rainWorld.title, seventhSon.title, darkWood.title, downPour.title, oneShot.title, boardsOfCanda.title];
let years = [rainWorld.yearPublished, seventhSon.yearPublished, darkWood.yearPublished, downPour.yearPublished, oneShot.yearPublished, boardsOfCanda.yearPublished];

function showCollection(array){
console.log(array.length);

}

showCollection(collection);
//console.log( 'In addToCollection: ', title);
//collection.push(title, artist, yearPublished);
//console.log(collection);
//return title;