// Write your solution here!

const cats =['Milo','Otis','Garfield'] ;

 function  destructivelyAppendCat() {
    cats.push('Ralph');
 }
 function destructivelyPrependCat() {
cats.unshift('Bob');
 }
 function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
 }
 function destructivelyRemoveLastCat () {
    cats.pop('Ralph');
 }
 
 function appendCat(){
  return [...cats,'Broom']; 
 }

 function prependCat(){
    return ['Arnold',...cats];
 }

 function removeFirstCat (){
return cats.slice(1,cats.length +1)
 }

 function removeLastCat(){
return cats.slice(0,cats.length -1)
 }