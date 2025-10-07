function carLoan(loan,rate,years){
    return(loan*rate/100*years)+loan
}

console.log(carLoan(1000,2.5,10))