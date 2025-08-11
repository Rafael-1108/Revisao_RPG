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

//definindo a mana que cada classe receberá no desafio

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

console.log('');
console.log('Capítulo 2 - Força Total');
console.log('');

//personagem recebendo xp e aumentando seu nível pelo progresso atual ao treminar o primeiro capítulo

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

//história

console.log('');
console.log('Após uma longa caminhada,',nome, 'chega até o castelo negro.');
console.log('O castelo negro é o lugar onde todos os aventureiros são provados com batalhas épicas com um único objetivo... ');
console.log('Conseguir o tão sonhado Livro do Encantamento, capaz de elevar ao máximo o poder de batalha do aventureiro.');
console.log('')
console.log('Para chegar ao topo, seria preciso vencer um oponente de cada classe. Sendo um mago, um paladino e um guerreiro, que habitavam o lugar para testar os conhecimentos de cada aventureiro.')
console.log('Após longas e árduas batalhas,',nome, 'vence todos os seus 3 oponentes e finalmente conquista o Livro do Encantamento.');

//Atributos aumentados

nivel+= 4;
xp+=300;
vida-= 110;
ouro+= 25 * 3
combatesVencidos+= 3

//Atributos sendo exibidos no console abaixo

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

//Atributos aumentados

nivel+= 4;
ataqueTotal+= 20
xp+= 550

console.log('Nível:',nivel, '| Xp:',xp, '| Ataque:',ataqueTotal, '| Defesa:',defesaTotal);
console.log('');
console.log('O próximo passo agora é o desafio final, onde',nome, 'enfrenta o guardião...');
console.log('');
console.log('Desafio Final - A luta contra o guradião');
console.log('');
  
vidaSuficiente = vida > 150;

//Comprando a quantidade necessária de poções para a batalha final 

if (vidaSuficiente === true) {
    console.log(nome, 'está com a saúde boa.');
} else if (vida < 40) {
    console.log(nome, 'comprou e usou 4 poções básicas, que recuperam 40 pontos de vida cada, gastou 15 moedas em cada uma delas');
    ouro-= 15*4;
    vida+= 160
} else if (vida < 80) {
    console.log(nome, 'comprou e usou 3 poções básicas, que recuperam 40 pontos de vida cada, gastou 15 moedas em cada uma delas');
    ouro-= 15*3;
    vida+= 120;
} else if (vida < 120) {
    console.log(nome, 'comprou e usou 2 poções básicas, que recuperam 40 pontos de vida cada, gastou 15 moedas em cada uma delas');
    ouro-= 15*2;
    vida+= 80;
} else {
    console.log(nome, 'comprou e usou 1 poção básica, que recuperam 40 pontos de vida cada, gastou 15 moedas em cada uma delas');
    ouro-= 15*1;
    vida+= 40;
}
console.log('Vida atual:', vida);

//analisando novamente as variáveis boleanas

ataqueForte = ataqueTotal > 120;
nivelAvancado = nivel >= 20;
vidaSuficiente = vida > 150;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

//exibindo no console se o personagem pode enfrentar o guardião

if (podeEnfrentarGuardiao === true) {
    console.log(nome, 'já pode batalhar contra o guardião.');
} else {
    console.log(nome, 'não tinha nível ou ataque sulficiente para enfrentar o guardião, portanto treinou mais e alcançou o nível necessário.');
    nivel+= 20- nivel;
    console.log('Agora sim você enfrentará o guardião!');
}

//Nível 3

//Arrays criadas

let inventario = ['Poção de Cura', 'Cristal da Alma'];
let aliados = ['Elfa Lyna'];
let inimigos = ['Guardião Sombrio'];
let tesouros = ['Anel da Fúria', 'Elixir Negro'];

//Adicionando elementos 

inventario.push('Espada de Luz');
aliados.push('Príncipe Real');
tesouros.push('Capa da Invisibilidade');

//Narrativa

console.log('');
console.log('Capítulo Final - A Última jornada de', nome);
console.log('');
console.log(nome, 'com seus aliados', aliados, 'agora com nível', nivel, 'caminha para o Templo Sombrio');
console.log(`Chegando ao local, o(a) aliado(a) de ${nome} chamado(a) ${aliados[aliados.length -2]} avista de longe o maior inimigo de ${nome}, o destemido ${inimigos[0]}.`);
console.log(nome, 'diz que seria dever dele derrotar o seu inimigo, por isso pedio que a batalha fosse no estilo um contra um.');
console.log('Ele então utiliza sua arma', NOME_ARMA, 'e o item', inventario[inventario.length -1], 'para começar com tudo!');

inventario.pop(inventario.length -1);

//Aliados incentivando (for...of)

for (const aliado of aliados) {
    console.log(`${aliado}: "Você consegue, ${nome}! Mostre do que é capaz!`);
}

console.log('');

//Variáveis para o inimigo

let vidaGuardiao = 480;
let turnos = 0;

//Batalha com for

for (let i = 0; vida > 0 && vidaGuardiao > 0; i++) {
    let danoCausado = ataqueTotal - Math.floor(Math.random() * 10);
    let danoRecebido = 45 - Math.floor(defesaTotal / 3);

    vidaGuardiao -= danoCausado;
    vida -= danoRecebido;

    console.log(`Rodada ${i}: ${nome} causa ${danoCausado} de dano e recebe ${danoRecebido} de dano.`);
    console.log(`Vida do herói: ${vida}. Vida do inimigo: ${vidaGuardiao}`);
    console.log('');
}

//Definindo o vencedor

if (vidaGuardiao <= 0 && vida > 0) {
    console.log('Após uma longa jornada', nome, 'derrota', inimigos[0], 'e sai vitorioso!');
} else if (vidaGuardiao <= 0 && vida <= 0) {
    console.log(nome, 'e' , inimigos[0], 'possuem um poder equivalente, portanto', nome, 'acaba com seu oponente mas também acaba derrotado, esse empate marca o fim da história lendária de' , nome);
} else {
    console.log(nome, 'lutou como nunca, mas após uma batalha árdua nosso herói foi de arrasta pra cima. A lendária jornada de' , nome, 'ficará marcada para sempre no coração de todos! F');
}

//Status finais

console.log('');
console.log('Vida:', vida);
console.log('Ataque:', ataqueTotal);
console.log('Defesa:', defesaTotal);
console.log('Oponentes derrotados:', combatesVencidos);
console.log('Ouro:', ouro);
console.log('Mana:', manaAtual);
console.log('Aliados:', aliados);
console.log('Inventário:', inventario);
console.log('XP:', xp);
console.log('Nível:', nivel);
console.log('Agilidade:', agilidade);
console.log('Classe:', classe);