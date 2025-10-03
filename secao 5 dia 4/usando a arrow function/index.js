const movies =[
    {id:1, movieName: 'dejavu'},
    {id:2, movieName: 'back to the future'},
    {id:3, movieName: 'Efect butterfly'}
]

console.log(movies.includes({id:1, movieName: 'dejavu'}))

console.log(movies.find( movie => movie.movieName== 'dejavu'))
// seria uma forma mais simples de fazer essa pesquisa dentro de uma array do tipo "composta" que seria do tipo objeto 