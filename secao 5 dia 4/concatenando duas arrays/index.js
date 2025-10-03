let numbers = [5,6,7,8] //objeto 
let letters = ['a','b','c'] //objeto 

all = numbers.concat(letters) //junção das arrays
half = all.slice(3,5) //parametro apenas pegar metade dessas arrays, 3 foi no index 3 , e no 5 foi antes antes da posicao 5 

console.log(all)//resultado [5,6,7,8,'a','b','c']
console.log(half) //resultado [8,'a']