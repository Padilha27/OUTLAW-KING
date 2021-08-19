var escolha;
function wa(){
while (true) {
    escolha = prompt("Qual sua escolha? \n 1-Prepara uma armadilha para os ingleses na ponte sobre o rio Forth\n 2-Espera os ingleses entrarem no castelo para surpreendê-los");
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
function wa1_1(){
while (true) {
    escolha = prompt("Qual sua escolha? \n 1-Reúne seus homens e partem para o ataque\n 2-Volta para a Escócia");
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
function wa1_2(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Suplica misericórdia ao rei\n 2-Grita por liberdade");
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
function wa1_3(){
    while (true) {
        escolha = prompt("Qual sua escolha? \n 1-Suplica misericórdia ao rei\n 2-Grita por liberdade");
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