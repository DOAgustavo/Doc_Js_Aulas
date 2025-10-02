// diferença entre "" '' e `` 
// exemplos abaixo 

let firstName = 'joe'
const email = 'hi' + firstName + ',\n the meeting is confirmed, \n artur'// aqui para fazer a  quebra de linha tem que adiciona por exemplo \n e para adicionar uma variavel tem que fazer "+ firstName+" fazendo o codigo ficar mais comprido

const email2 =`Hi ${firstName}
The meetin is confirmed!
Andre.
` // esse padrão de quebra de linha é mantido 
console.log(email1)
console.log(email2)