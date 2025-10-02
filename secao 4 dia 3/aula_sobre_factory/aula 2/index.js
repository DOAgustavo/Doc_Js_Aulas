

// factory  está criando esse objeto abaixo 
function createBook(title, author, pages){
    const book ={
        bookTitle: title,
        bookAutor:author,
        bookPages:pages,
        printBook: function (){
            console.log('printging...')
        }
    }
    return book
}

const book1 = createBook('atomic', 'james',306)
const book2 = createBook('Think', 'Napolean',406)

book1.color='White' // como a factory é dinamica pode adicionar um objeto e que nesse caso a cor foi apenas adicionada ao book1

console.log(book1)
console.log(book2)

