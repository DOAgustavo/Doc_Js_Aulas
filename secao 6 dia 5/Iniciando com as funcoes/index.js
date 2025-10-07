// fucntion declaration 
function movie(){
    console.log('The Matrix')
}

movie()// aqui automaticamente ele já tras o console.log    

// function expression 
const car = function (){
    console.log('tesla')
}

car()

const truck = car 
truck()