function price(//parametros aqui
    ){
let total = 0 
for (let value of arguments) // dessa forma ele faz com que percorra todos os arguments que foram passados para ele , por tanto nao precisa passar parametros 
    total+= value 
return total 
    
}
console.log(price(10,20,30,40))