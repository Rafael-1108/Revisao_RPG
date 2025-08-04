let ouro = 1000;
let valorEspada = 50;
console.log('Saldo inicial', ouro);
let xp = 100;

if (ouro >= valorEspada && xp >= 80) {
    console.log('Obaaa. espada comprada com sucesso');
    ouro -= valorEspada
} else if (ouro >= valorEspada && xp <= 50) {
    let diferenca = valorEspada - ouro;
    console.log('Você pode ter dinheiro, mas não tem xp sulficiente para esta compra.');
} else {
    console.log('Oie pobrinho, faltam ', diferenca, ' moedas para realizar a compra.');
}
