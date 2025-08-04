let ouro = 150;
let valorEspada = 50;
console.log('Saldo inicial', ouro);

if (ouro >= valorEspada) {
    console.log('Obaaa. espada comprada com sucesso');
    ouro -= valorEspada
} else {
    let diferenca = valorEspada - ouro;
    console.log('Oie pobrinho, faltam ', diferenca, ' moedas de ouro para você comprar sua espada.');
}
