let forcaBase = 10;
let defesaBase = 8;
let agilidadeBase = 12;

let bonusEspada = 5;
let bonusArmadura = 2;
let penalidadeEscudo = 4;

let forcaTotal = forcaBase + bonusEspada;
let defesaTotal = defesaBase + bonusArmadura;
let agilidadeTotal = agilidadeBase - penalidadeEscudo;

console.log('Força total: ' + forcaTotal);
console.log('Defesa total: ' + defesaTotal);
console.log('Agilidade total: ' + agilidadeTotal);