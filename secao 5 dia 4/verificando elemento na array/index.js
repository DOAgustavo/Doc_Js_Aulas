const tempLondon =[18,13,8,2] // quero fazer uma verificação para ver se tem numeros negativos

const tempNegative = tempLondon.every(function(value){
    return value >= 0 

})

console.log(tempPositive)

// outra função 
const tempNegatives = tempLondon.filter(value => value >= 0)
     
console.log(tempPositives)