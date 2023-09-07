

/**Exercícios de escrita de código - Exercícios, aula 06*/

/** 1. Construa um programa, seguindo os seguintes passos:

/**A */
let nome 

/**B */
let idade 

/**C */
typeof nome
typeof idade

/**D */
/** Foi mencionado ERRO, porque as variáveis foram declaradas, porém sem valor atribuído.  */

/**E */
nome = prompt("Qual é o seu nome?") 
idade = prompt("Qual é a sua idade?")


/**F */

//console.log(typeof nome)
//console.log(typeof idade)

/** Código foi validado, pois as variáveis tiveram seus valores atribuídos. */

/**G */

//console.log("Olá", nome, "voce tem", idade, "anos.")


/** 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. */

/** const pergunta1 = "Voce gosta de chá?"
const pergunta2 = "Voce gosta de café?"
const pergunta3 = "Voce gosta de refri?"

const resp1 = prompt(pergunta1)
const resp2 = prompt(pergunta2)
const resp3 = prompt(pergunta3)
                        
console.log(pergunta1, resp1)
console.log(pergunta2, resp2)
console.log(pergunta3, resp3) */

/**3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial. */

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = a
a = b
b = c 

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
