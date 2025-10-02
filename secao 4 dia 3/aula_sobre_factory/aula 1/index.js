/*

const book = {
     bookTitle : 'atomic habits',
     bookAutor : 'james clear',
     bookPages: 306,
     bookChapters: {
        chap1:'Fundamentals',
        chap2:'1st law',
     },
     printBook: function(){
        console.log('printgin...')
     }
}


book.printBook()// acessar apenas a função print book 
 */


//function printBook(){
//    console.log('printing...')
//}

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
console.log(book1)
console.log(book2)

// descrição sobre essa aula
/*  createbook é uma factory = fabrica que controi algo , por exemplo um livre 

    Const book = é o livro já pronto

    bookTitle são os let, as variaveis desse livro coisa que pode se modificar dentro dele 
    

    ou seja, uma factory nada mais é , que uma industria que cria para mim, que torna as coisas mais organizadas 
    

*/