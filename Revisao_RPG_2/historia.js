let nome = 'Peter';
let xp = 0;
let ouro = 250;
let nivel = 9;

//Escolhendo uma classe entre as disponíveis (mago, paladino, guerreiro)
let classe = 'mago';

let vida = 200;
let vidaMaxima = 270;
let manaAtual = 0;
let manaMaxima = 500;

const NOME_ARMA = 'Cajado de gelo';
const DANO_BASE = 23;
const NOME_ARMADURA = 'Peita de aço inox';
const DEFESA_BASE = 30;

let ataqueTotal = 0;
let defesaTotal = 0;
let agilidade = 10;
let combatesVencidos = 1;
//O personagem treinou e ganhou 150 pontos de experiência

xp+= 150;

//Com o xp adquirido o personagem sobe 2 níveis

nivel+= 2

//Por falta de atenção o personagem perde 100 moedas

ouro-= 100;

//Usou a poção e recuperou 40 pontos de vida

vida+= 40;

//Dano tomado em batalha

let danoTomadoBatalha = 80;
vida -= danoTomadoBatalha;

//A arma foi encantada, e seu dano foi dobrado

ataqueTotal = DANO_BASE * 2;
ataqueTotal += nivel + DANO_BASE;
defesaTotal = DEFESA_BASE + (nivel / 2);

//Comprou uma poção por 30 moedas de ouro

let ouroPocao = 30;
let ouroPosPocaoComprada = ouro - ouroPocao;

let vidaSulficiente = vida > 150;
let ataqueForte = ataqueTotal > 120;
let nivelAvancado = nivel >= 20;
let podeEnfrentarGuardiao = vidaSulficiente && (ataqueForte || nivelAvancado);

console.log('🧾 LORE DO HERÓI: ' , nome);
console.log('-----------------------');
console.log(nome, 'Inicia uma caminhada de rotina');
console.log('No meio do caminho ',nome, ' deixa cair 100 moedas, ficando com ',ouro, ' moedas');
console.log('Ao voltar para procurar, o personagem se depara com um ladrão que tenta roubar suas moedas e trava uma batalha para impedi-lo');
console.log('O openente de ',nome, ' possui 60 pontos de vida e é atacado por ' ,nome, ' que causa ' ,ataqueTotal, ' pontos de dano' );
console.log('Seu oponente morre, já que ',nome, ' é forte demais e o nível de poder aumenta para',nivel,);
console.log('Após a batalha, ',nome, ' pisa em espinhos e perde 80 de vida, ficando com ',vida, ' pontos de vida');
console.log('Por isso, decide comprar uma poção que lhe faz gastar ',ouroPocao, ' de ouro, restando ',ouroPosPocaoComprada, ' de ouro');
console.log('Vida suficiente? ' ,vidaSulficiente, '| Ataque forte? ' ,ataqueForte, '| Nível avançado? ' ,nivelAvancado);
console.log('Pode enfrentar o Guardião? ',podeEnfrentarGuardiao, ' a batalha final está próxima');

//Nível 2 - contiuação 

//prólogo 

console.log('Após sua última batalha  ',nome, ' decide partir sua jornada rumo à batalha final contra o guardião.');
console.log('O herói da classe ' ,classe, ' está prestes a enfrentar novos inimigos e tomar suas próprias decisões.' );
console.log('...' );

//Capítulo 1 - Magia em Ação

console.log('Capítulo 1 - Magia em ação.');
console.log('');
console.log('Você foi desafiado para participar de um desafio mágico');

if (classe === 'mago') {
    console.log('Este desafio te oferece 50 de mana caso você o vença');
    console.log('Você devera acertar alvos com o/a ',NOME_ARMA);
    if (nivel >= 10){
        console.log('Seu nível te entrega uma ótima habilidade. Parabéns você acaba de acertar todos os alvos e recebe 50 de mana');
    manaAtual+= 50;
    } else {
        console.log('Seu nível ainda é baixo. Você não foi capaz de vencer o desafio. Treine mais.');
    }
}

if (classe === 'paladino') {
    console.log('Este desafio te oferece 40 de mana caso você o vença');
    console.log('Você devera acertar alvos com o/a ',NOME_ARMA);
    if (nivel >= 10){
        console.log('Seu nível te entrega uma ótima habilidade. Parabéns você acaba de acertar todos os alvos e recebe 50 de mana');
    manaAtual+= 40;
    } else {
        console.log('Seu nível ainda é baixo. Você não foi capaz de vencer o desafio. Treine mais.');
    }
}

if (classe === 'guerreiro') {
    console.log('Este desafio te oferece 35 de mana caso você o vença');
    console.log('Você devera acertar alvos com o/a ',NOME_ARMA);
    if (nivel >= 10){
        console.log('Seu nível te entrega uma ótima habilidade. Parabéns você acaba de acertar todos os alvos e recebe 50 de mana');
    manaAtual+= 35;
    } else {
        console.log('Seu nível ainda é baixo. Você não foi capaz de vencer o desafio. Treine mais.');
    }
}

//Capítulo 2 - Força Total

console.log('')
console.log('Capítulo 2 - Força Total')
console.log('')
console.log('Após uma longa caminhada, ',nome, ' chega até o castelo ')

console.log('Com ',ouro, ' de moedas ',nome, ' decide comprar uma poção de mana')
