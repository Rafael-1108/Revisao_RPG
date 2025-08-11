let nome = 'Peter';
let xp = 0;
let ouro = 250;
let nivel = 9;
let classe = 'mago';
let vida = 200;


const NOME_ARMA = 'Cajado de gelo';
const DANO_BASE = 23;
const NOME_ARMADURA = 'Peita de aço inox';
const DEFESA_BASE = 30;

let ataqueTotal = 0;
let defesaTotal = 0;

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

let vidaSulficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSulficiente && (ataqueForte || nivelAvancado);

console.log('🧾 LORE DO HERÓI: ' , nome);
console.log('-----------------------');
console.log(nome, 'Inicia uma caminhada de rotina');
console.log('No meio do caminho ',nome, ' deixa cair 100 moedas, ficando com ',ouro, ' moedas');
console.log('Ao voltar para procurar, o personagem se depara com um ladrão que tenta roubar suas moedas e trava uma batalha para impedi-lo');
console.log('O openente de ',nome, ' possui 60 pontos de vida e é atacado por ' ,nome, ' que causa ' ,ataqueTotal, ' pontos de dano' );
console.log('Seu oponente morre, já que ',nome, ' é forte demais com seu nivel de poder ',nivel,);
console.log('Após a batalha, ',nome, ' pisa em espinhos e perde 80 de vida, ficando com ',vida, ' pontos de vida');
console.log('Por isso, decide comprar uma poção que lhe faz gastar ',ouroPocao, ' de ouro e resta ',ouroPosPocaoComprada, ' de ouro');
console.log('Vida suficiente? ' ,vidaSulficiente, '| Ataque forte? ' ,ataqueForte, '| Nível avançado? ' ,nivelAvancado);
console.log('Pode enfrentar o Guardião? ',podeEnfrentarGuardiao, ' a batalha final está próxima');