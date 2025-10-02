const movies =[
    {id:1, movieName: 'dejavu'},
    {id:2, movieName: 'back to the future'},
    {id:3, movieName: 'Efect butterfly'}
]

console.log(movies.includes({id:1, movieName: 'dejavu'})) // aqui vai retornar falso, pois são multiplos 

console.log(movies.find(function (movie)
{
    return movie.movieName== 'dejavu'
}
)
)// para fazer o essa consulta em multiplas opções, é feito via o movies.find 
 // que apenas funciona via uma function, nesse caso... para que possa ser feito esse filtro 

// obs.: se é uma array do tipo objeto com varias referencia, tera que ser feito via find, se for a simples , não precisa ser via find 