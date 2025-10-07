function update(){
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercentInput = document.getElementById('tipInput').value; // Pegar o valor do slider
    let split = Number(document.getElementById('splitInput').value);
 
    // calculos para calcular 
    let tipValue = bill * (tipPercentInput/100) //porcentagem
    let billTotal = bill + tipValue //valor total com a porcetagem em cima do preco 
    let billEach = billTotal /split //valor total por pessoa 
    
    // camada que altera o html atualizando os numeros/dados
    document.getElementById('tipPercent').innerHTML = tipPercentInput + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue) 
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = split + ' person' 
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)

}
function formatMoney (value){
    value = value.toFixed (2)
    return 'R$ ' + value 
}