
function CreateBook(title, author, pages){ // aqui por conversão se usa a primeira letra do  constructor em maiscula
    
    this.bookTitle= title;
    this.bookAutor=author;
    this.bookPages=pages
        
    // aqui o this retorna automaticamente os objetos para o createBook     
    
}

const book1 = new CreateBook(' atomic', 'james',306) // a sintaxe muda para com o new 

console.log(book1)

