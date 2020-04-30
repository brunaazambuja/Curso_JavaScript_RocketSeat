
// class Api{
//     static async getUserInfo(username){
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         console.log(response);
//     }
// }
// Api.getUserInfo('brunaazambuja');





const minhaPromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok') }, 2000);
})

async function executaPromise(){
    const response = await minhaPromise2();
    console.log(response);
}
executaPromise();


const nome4 = 'Diego';
const idade4 = 23;

const usuario5 = {
    nome4,
    idade4,
    cidade: 'Rio do Sul',
};
console.log(usuario5);


const usuario4 = 'Diego';
const idade2 = 23;
console.log(`O usuário ${usuario4} possui ${idade2} anos`);




const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario1, nome: 'Gabriel'};
const usuario3 = {...usuario1, endereco: {...usuario1.endereco, cidade: 'Lontras'}};
console.log(usuario2);
console.log(usuario3);




function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3



const arr2 = [1, 2, 3, 4, 5, 6];
const [first, ...params] = arr2; 
console.log(first);
console.log(params);



function mostraInfo(usuario) {
    var {nome, idade} = usuario;
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));



const empresa = {
    nome1: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

var {nome1, endereco: {cidade, estado}} = empresa;

console.log(nome1); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC




// ---------- COMO TRANSFORMAR FUNÇÕES NORMAIS EM ARROW FUNCTION
// 3.1
// FUNCTION NORMAL
const arr = [1, 2, 3, 4, 5];
var item1 = arr.map(function(item) {
    return item + 10;
});
console.log(item1);

// ARROW FUNCTION
item1 = arr.map(item => item + 10);
console.log(item1);


// 3.2
// FUNCTION NORMAL
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
var item2 = mostraIdade(usuario);
console.log(item2);

// ARROW FUNCTION
const mostra2 = usuario => {
    return usuario.idade
};
item2 = mostra2(usuario);

console.log(item2);


// 3.3
// FUNCTION NORMAL 
const nome = "Bruna";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
var item3 = mostraUsuario(nome, idade);
var item4 = mostraUsuario(nome);
console.log(item3);
console.log(item4);

// ARROW FUNCTION
const mostra3 = (nome = 'Diego', idade = 18) => ({nome, idade});
var item3 = mostraUsuario(nome, idade);
var item4 = mostraUsuario(nome);
console.log(item3);
console.log(item4);


// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}
const promise2 = () => (function(resolve, reject) {
    return resolve();
});






const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

var idades = usuarios.map(itens => {
    return itens.idade
});
console.log(idades);

var filterRocket = usuarios.filter(itens => {
    return (itens.empresa === 'Rocketseat' && itens.idade >= 18);
});
console.log(filterRocket);

var filterGoogle = usuarios.filter(itens => {
    return itens.empresa === 'Google';
});
console.log(filterGoogle);

var map2xFilter50 = usuarios.filter(itens => {
    itens.idade = itens.idade * 2;
    return (itens.idade <= 50);
});
console.log(map2xFilter50);






class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();

        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true