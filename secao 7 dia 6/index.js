const colors=[
    'Red',
    'Blue',
    'Yellow',
    'Purple',
    'Green'
]
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    const color =document.querySelector('.color')
    const randomCor = radomColor()
    document.body.style.background = colors[randomCor]
    color.textContent = colors[randomCor]

    //console.log(randomCor)
    //console.log(randomCor)
   // console.log('verificando')
})


function radomColor (){
    return Math.floor(Math.random()*colors.length)
}

/*O que é querySelector?

É um método do DOM (Document Object Model) que retorna o primeiro elemento que bate com um seletor CSS que você passar. */
