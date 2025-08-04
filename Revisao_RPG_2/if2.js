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

//parte 2 - missao

if (vida >= 50 && energia >= 50) {
    console.log('Ayla entra no calabouço');
} else {
    console.log('Ayla não pode seguir para o calabouço');
}