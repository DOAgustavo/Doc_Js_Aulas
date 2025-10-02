let productValue = Number(prompt('Enter the product value'))
//console.log(typeof(productValue))// para ver qual tipo é esse number ou string 

if(productValue >= 20 ){
    document.getElementById('result').innerHTML= 'aprroved'
} else {
    document.getElementById('result').innerHTML = 'denied'
}