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
console.log(addToCollection(rainWorld));
console.log(addToCollection(seventhSon));
console.log(addToCollection(darkWood));
console.log(addToCollection(downPour));
console.log(addToCollection(oneShot));
console.log(addToCollection(boardsOfCanda));


//console.log( 'In addToCollection: ', title);
//collection.push(title, artist, yearPublished);
//console.log(collection);
//return title;