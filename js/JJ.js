var escolha;
function john(){
while (true) {
    escolha = prompt("Qual sua escolha? \n 1-Estabelece uma aliança com Robert The Bruce\n 2-Nega o acordo");
    if (escolha == 1) {
        one.style.display = "none";
        two.style.display = "block";
        break;
    } else if (escolha == 2) {
        one.style.display = "none";
        three.style.display = "block";
        break;
    } else {
        alert("Insira uma opção válida")
    }
}
//Quando chamar Id one, vai aparecer a mensagem na tela. O two será meu primeiro direcionamento/escolha e o three meu segundo direcionamento/escolha. O none vai fazer sumir e o block vai fazer aparecer, o mesmo para as demais só muda a mensagem a ser impressa na telas. //
}
function john1_1(){
while (true) {
    escolha = prompt("Qual sua escolha? \n 1-Usa seus poderes e se revela ao mundo\n 2-Mantém o segredo e luta como um homem comum");
    if (escolha == 1) {
        two.style.display = "none";
        four.style.display = "block";
        break;
    } else if (escolha == 2) {
        two.style.display = "none";
        five.style.display = "block";
        break;
    } else {
        alert("Insira uma opção válida")
    }
}
}
function john1_2(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Arma uma emboscada para Eduardo I\n 2-Se alia a ele e propõe um acordo para dominarem juntos");
        if (escolha == 1) {
            three.style.display = "none";
            six.style.display = "block";
            break;
        } else if (escolha == 2) {
            three.style.display = "none";
            seven.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}
function john1_3(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Aceita a proposta do rei\n 2-Mata o rei");
        if (escolha == 1) {
            five.style.display = "none";
            eight.style.display = "block";
            break;
        } else if (escolha == 2) {
            five.style.display = "none";
            nine.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}
