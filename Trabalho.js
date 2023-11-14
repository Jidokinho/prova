const prompt=require("prompt-sync")({ sigint: true })

// variaveis

let nome = String(prompt("Escreva seu nome: "))
let idade = parseInt(prompt("Escreva a sua idade: "))
let tempoCo = parseInt(prompt("Insira o tempo de contribuição: "))

// dados

if (idade >= 60 && tempoCo >= 35) {
    console.log(nome+" já pode se aposentar.");
} else if (idade < tempoCo) {
    console.log("Dados inválidos inserido")
} else {
    console.log(nome+" ainda não pode se aposentar.");
}
