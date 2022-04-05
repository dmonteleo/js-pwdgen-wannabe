/*
console.log('Ciao Mondo');
console.log('Come Stai?');
*/
// questo è un commento su un rigo 
/* commento 
su 
più 
righe */
/*
console.log(document);
document.writeln('Hello World');
alert('Hey tu!');
document.getElementById('kind-thing').innerHTML+=" questa è la cosa bella";
console.log(document.getElementById('kind-thing').innerHTML);
const nome = 'Ugo';
console.log(nome);
prompt('Inserisci il tuo nome');
const name = prompt('Inserisci il tuo nome'); 
console.log(name);
const nomen = 'Daniele';
const cognome = 'Monteleone';
const yearOfBirth = '1993';
let outputString = `Mi chiamo ${nomen} ${cognome} e sono nato nel ${yearOfBirth}`;
console.log(outputString);
const age = 28;
const futureAge = 28 + 10; 
outputString = outputString + `, ho ${age} anni e fra 10 anni ne avrò ${futureAge}`;
console.log(outputString);
*/

const name = prompt('Qual è il tuo nome?');
const surname = prompt('Qual è il tuo cognome?');
const color = prompt('Qual è il tuo colore preferito?');
const password = `${name}${surname}${color}` + '22';
document.getElementById('password').innerHTML=password;

