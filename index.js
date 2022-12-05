
const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(cat){ //append Ralph last - [Milo,Otis,Garfield,Ralph]
cats.push('Ralph'); 
}
cats();

function destructivelyPrependCat(cat){ // prepend Bob - first [Bob,Milo,Otis,Garfield]
cats.unshift('Bob'); 
}
cats();

function destructivelyRemoveLastCat(cat){  // remove last cat Garfield - [Milo,Otis]
cats.pop(); 
}
cats();

function destructivelyRemoveFirstCat(cat){ // remove first cat - Milo - [Otis,Garfield]
cats.shift(); 
}
cats();

function appendCat(){ //append Broom - [Milo,Otis,Garfield,Broom]
const newCats = [...cats, 'Broom']; 
return newCats;
}
cats();

function prependCat(cat){ //prepend Arnold to new array - [Arnold,Milo,Otis,Garfield]
const aweCats = ['Arnold', ...cats]; 
return aweCats;
}
cats();


function removeLastCat(cat){ // remove last cat Garfield - [Milo,Otis]
const delLastCat = cats.slice(0, -1);          
return delLastCat;
}
cats();

function removeFirstCat(cat){ // remove first car Milo - [Otis,Garfield]
const delFirstCat = cats.slice(1); 
return delFirstCat;
}
cats();



// Write your solution here!

/*function catArr(){
    cats.length = 0;
    cats.push('Milo','Otis','Garfield');
    }*/









// cats.push('Ralph');

//cats.length = 0;

//cats.push('Milo', 'Otis', 'Garfield');


cats;

/*catArr = (function (){
    cats.length = 0;
    cats.push('Milo','Otis','Garfield');
   
});*/





