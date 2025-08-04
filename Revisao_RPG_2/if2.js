let vida = 60; 
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;

if (vida >= 80) {
    console.log('Ayla está em otima forma!');
} else if (vida >= 40) {
    console.log('Ayla está ferida, mas ainda pode lutar');
} else {
    console.log('Ayla está em estado crítico, recue!');
}

//parte 2 - Missao

if (vida >= 50 && energia >= 50) {
    console.log('Ayla entra no calabouço');
} else {
    console.log('Ayla não pode seguir para o calabouço');
}

//parte 3 - Nivel

if (xp >= 1000) {
    console.log('Ayla subiu para o nível ', nivel, '.');
} else {
    console.log('Adquira mais xp para subir de nível');
}

//parte 4 - Ouro

if (ouro >= 300) {
    console.log('Ayla comprou a armadura mágica');
} else {
    console.log('Ayla não tem dinheiro sulficiente');
}