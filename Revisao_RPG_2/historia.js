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
//O personagem treinou e ganhou 50 pontos de experiência

xp+= 50;

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

let vidaSuficiente = vida > 150;
let ataqueForte = ataqueTotal > 120;
let nivelAvancado = nivel >= 20;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log('🧾 LORE DO HERÓI:', nome);
console.log('');
console.log(nome,'inicia uma caminhada de rotina');
console.log('No meio do caminho',nome, 'deixa cair 100 moedas, ficando com ',ouro, 'moedas');
console.log('Ao voltar para procurar, o personagem se depara com um ladrão que tenta roubar suas moedas e trava uma batalha para impedi-lo');
console.log('O openente de',nome, 'possui 60 pontos de vida e é atacado por' ,nome, 'que causa' ,ataqueTotal, 'pontos de dano' );
console.log('Seu oponente morre, já que',nome, 'é forte demais e o nível aumenta para',nivel,);
console.log('Após a batalha,',nome, 'pisa em espinhos e perde 80 de vida, ficando com',vida, 'pontos de vida');

//Usou a poção e recuperou 40 pontos de vida

vida+= 40;

//Comprou uma poção por 30 moedas 

ouro-= ouroPocao

console.log('Por isso, decide comprar uma poção que lhe faz gastar',ouroPocao, 'moedas, restando',ouro, 'moedas e regenerando 40 pontos de vida, ficando com',vida, 'pontos de vida.');
console.log('Vida suficiente?' ,vidaSuficiente, '| Ataque forte?' ,ataqueForte, '| Nível avançado?' ,nivelAvancado);
console.log(`Pode enfrentar o Guardião? ${podeEnfrentarGuardiao}. A batalha final se aproxima!`);

//Nível 2 - contiuação 

//prólogo 

console.log('Após sua última batalha,',nome, 'decide partir sua jornada rumo à batalha final contra o guardião.');
console.log('O herói da classe' ,classe, 'está prestes a enfrentar novos inimigos e tomar suas próprias decisões.');
console.log('...');

//Capítulo 1 - Magia em Ação

console.log('')
console.log('Capítulo 1 - Magia em ação.');
console.log('');
console.log('Você foi desafiado para participar de um desafio mágico');

if (classe === 'mago') {
    console.log('Este desafio te oferece 50 de mana caso você o vença');
    console.log('Você devera acertar alvos com o/a',NOME_ARMA);
    if (nivel >= 10){
        console.log('Seu nível te entrega uma ótima habilidade. Parabéns você acaba de acertar todos os alvos e recebe 50 de mana');
    manaAtual+= 50;
    } else {
        console.log('Seu nível ainda é baixo. Você não foi capaz de vencer o desafio. Mas não desanime, siga em frente treinando cada vez mais!');
    }
}

if (classe === 'paladino') {
    console.log('Este desafio te oferece 40 de mana caso você o vença');
    console.log('Você devera acertar alvos com o/a',NOME_ARMA);
    if (nivel >= 10){
        console.log('Seu nível te entrega uma ótima habilidade. Parabéns você acaba de acertar todos os alvos e recebe 40 de mana');
    manaAtual+= 40;
    } else {
        console.log('Seu nível ainda é baixo. Você não foi capaz de vencer o desafio. Mas não desanime, siga em frente treinando cada vez mais!');
    }
}

if (classe === 'guerreiro') {
    console.log('Este desafio te oferece 35 de mana caso você o vença');
    console.log('Você devera acertar alvos com o/a',NOME_ARMA);
    if (nivel >= 10){
        console.log('Seu nível te entrega uma ótima habilidade. Parabéns você acaba de acertar todos os alvos e recebe 35 de mana');
    manaAtual+= 35;
    } else {
        console.log('Seu nível ainda é baixo. Você não foi capaz de vencer o desafio. Mas não desanime, siga em frente treinando cada vez mais!');
    }
}

//Capítulo 2 - Força Total

console.log('')
console.log('Capítulo 2 - Força Total')
console.log('')

if (classe === 'paladino') {
    console.log('"Parabéns pela sua jornada atual, sua ambição pela justiça e sua honra te farão ir longe."');
    console.log('"Você acumulou experiência sulficiente para elevar seu nível:"');
    xp+= 200;
    nivel+= 2;
    console.log(`xp +200 = ${xp}. Nível +2 = ${nivel}`);
}

if (classe === 'mago') {
    console.log('"Parabéns pela sua jornada atual, seu espírito mágico e sua honra te farão ir longe."');
    console.log('"Você acumulou experiência sulficiente para elevar seu nível:"');
    xp+= 200;
    nivel+= 2;
    console.log(`xp: +200 = ${xp}. Nível +2 = ${nivel}`);
}

if (classe === 'guerreiro') {
    console.log('"Parabéns pela sua jornada atual, seu espírito de luta e sua honra te farão ir longe."');
    console.log('"Você acumulou experiência sulficiente para elevar seu nível:"');
    xp+= 200;
    nivel+= 2;
    console.log(`xp: +200 = ${xp}. Nível +2 = ${nivel}`);
}

//castelo negro

console.log('');
console.log('Após uma longa caminhada,',nome, 'chega até o castelo negro.');
console.log('O castelo negro é o lugar onde todos os aventureiros são provados com batalhas épicas com um único objetivo... ');
console.log('Conseguir o tão sonhado Livro do Encantamento, capaz de elevar ao máximo o poder de batalha do aventureiro.');
console.log('')
console.log('Para chegar ao topo, seria preciso vencer um oponente de cada classe. Sendo um mago, um paladino e um guerreiro, que habitavam o lugar para testar os conhecimentos de cada aventureiro.')
console.log('Após longas e árduas batalhas,',nome, 'vence todos os seus 3 oponentes e finalmente conquista o Livro do Encantamento.');

nivel+= 4;
xp+=300;
vida-= 110;
ouro+= 25 * 3
combatesVencidos+= 3

console.log('Derrotando seus oponentes,',nome, 'ganha 300 de xp, sobe 4 níveis e recebe 25 moedas de cada oponente como recompensa. Mas acaba machucado, perdendo 110 pontos de vida. Ficando com',vida, 'de vida,',ouro, 'moedas, chegando no nível',nivel, 'e acumulando',xp, 'de experiência.');
console.log('E agora sim',nome, 'pode seguir em frente, para encantar sua/seu',NOME_ARMA);

//capítulo 3 - Missão de encantamento

console.log('');
console.log('Capítulo 3 - Missão de encantamento');
console.log('');
console.log('Após conquistar o Livro do Encantamento,',nome, 'segue até o Santuário dos Encantamentos.');
console.log('Ao pisar seus pés no local, sua armadura equipada:',NOME_ARMADURA, 'também recebe um poder ancestral, que aumenta sua defesa em 11 pontos.');
console.log('Lá, ele ergue seu',NOME_ARMA, 'em direção à luz ancestral.');
console.log('A arma brilha intensamente, absorvendo a energia mágica do livro.');
console.log(nome, 'agora empunha um(a)',NOME_ARMA, 'encantado(a), com poder ampliado!');

defesaTotal+= 11;

console.log('Com isso,',nome, 'eleva seu nível em 4 pontos, seu ataque em 20 pontos e recebe 550 de xp.');

nivel+= 4;
ataqueTotal+= 20
xp+= 550

console.log('Nível:',nivel, '| Xp:',xp, '| Ataque:',ataqueTotal, '| Defesa:',defesaTotal);
console.log('');
console.log('O próximo passo agora é o desafio final, onde',nome, 'enfrenta o guardião...');
console.log('');
console.log('Desafio Final');