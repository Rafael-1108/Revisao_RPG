let temChaveDeFerro = true;
let temMapa = false;
let nivel = 7;
let vida = 45;

let podeEntrarNaCaverna = temChaveDeFerro && temMapa;
console.log('Pode entrar na caverna? ' + podeEntrarNaCaverna);

let podeEntrarTemplo = nivel >= 5 || temChaveDeFerro;
console.log('Pode entrar no templo? ' + podeEntrarTemplo);

let podeEntrarBosque = vida < 50 && !temMapa;
console.log('Pode entrar no bosque? ' + podeEntrarBosque);