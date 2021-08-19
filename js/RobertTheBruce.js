var escolha;
function roberto(){
while (true) {
    escolha = prompt("Qual sua escolha? \n 1-Se curva ao rei\n 2-Se rebela");
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
function roberto1_1(){
while (true) {
    escolha = prompt("Qual sua escolha? \n 1-Se une ao povo que se rebela contra os soldados\n 2-Volta para o castelo e busca aliados para formar um exército");
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
function roberto1_2(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Cavam o túnel\n 2-Participam da rebelião");
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
function roberto1_3(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Cavam o túnel\n 2-Participam da rebelião");
        if (escolha == 1) {
            four.style.display = "none";
            eight.style.display = "block";
            break;
        } else if (escolha == 2) {
            four.style.display = "none";
            nine.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}
function roberto1_4(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Continua matando o maior número de soldados possível\n 2-Vai para o confronto com o rei");
        if (escolha == 1) {
            five.style.display = "none";
            ten.style.display = "block";
            break;
        } else if (escolha == 2) {
            five.style.display = "none";
            eleven.style.display = "block";
            break;
        } else {
            alert("Insira uma opção válida")
        }
    }
}