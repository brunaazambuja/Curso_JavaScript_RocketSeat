
// ---------------------------------------- Desafio 3 --------------------------------------------------- //


var buttonUserElement = document.querySelector('#user button');

buttonUserElement.onclick = function usuario() {

    var usuarioElement = document.getElementById('input_user').value;
    document.getElementById('input_user').value = "";
    var textUsuarioElement = document.createTextNode(usuarioElement);
    console.log(textUsuarioElement);

    // NÃO ESTOU CONSEGUINDO TRANSFORMAR UM TEXT OBJECT EM STRING - URL NÃO FUNCIONA

    let bruna = 'brunaazambuja';
    var url = `https://api.github.com/users/${bruna}/repos`;
    console.log(url);

    // NEM CONSEGUINDO BOTAR O LOADING APENAS ENQUANTO A REQUISIÇÃO CARREGA!

    axios.get(url)
        .then(function(response) {
            console.log(response);

            var divUserElement = document.querySelector('#user');
            var listaElement = document.createElement('ul');

            for(i = 0; i < response.data.length; i++){
                var nomeElement = document.createElement('li');
                var valorElement = document.createTextNode(response.data[i].name);
                nomeElement.appendChild(valorElement);
                listaElement.appendChild(nomeElement);
            }
            divUserElement.appendChild(listaElement);


        })
        .catch(function(error) {
            var divUserElement = document.querySelector('#user');
            var erroElement = document.createElement('p');
            var textoErroElement = document.createTextNode('Erro de requisição, esse usuário não existe!');
            
            erroElement.appendChild(textoErroElement);
            erroElement.style.color = '#A00';
            divUserElement.appendChild(erroElement);

        });
}






function checaIdade(idade) {

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(idade > 18){
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

checaIdade(12)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });


// ---------------------------------------- Desafio 2 --------------------------------------------------- //

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var botaoElement = document.querySelector('#adicionaBox');

botaoElement.onclick = function() {

    var boxElement = document.createElement('button'); 
    var containerElement = document.querySelector('#boxes');
    boxElement.setAttribute('id', 'box');
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = "#FFF";
    containerElement.appendChild(boxElement);

    boxElement.onmouseover = function() {
        boxElement.style.backgroundColor = getRandomColor(); ;
    }
}


var nomes = ["Diego", "Gabriel", "Lucas"];


function adicionar(){
    var inputElement = document.getElementById('input').value;
    document.getElementById('input').value = "";
    var nomeElement = document.createElement('li');
    var valorElement = document.createTextNode(inputElement);

    nomeElement.appendChild(valorElement);
    listaElement.appendChild(nomeElement);
    divListaElement.appendChild(listaElement);
}

var divListaElement = document.querySelector('#lista');
var listaElement = document.createElement('ul');


for(i = 0; i < nomes.length; i++){
    var nomeElement = document.createElement('li');
    var valorElement = document.createTextNode(nomes[i]);
    nomeElement.appendChild(valorElement);
    listaElement.appendChild(nomeElement);
}
divListaElement.appendChild(listaElement);



    
    

// ---------------------------------------- Desafio 1 --------------------------------------------------- //

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
    
function ex1(objeto){
    console.log("O usuário mora em " + objeto.cidade + "/" + objeto.uf + ", no bairro " + objeto.bairro + ", na rua " + objeto.rua + " com nº " + objeto.numero);
}

function ex2(x, y) {
    while (x != y){
        if (x % 2 == 0) console.log(x);
        x++;
    }  
}

function ex3(skills) {
    
    retorno = (skills.indexOf("Javascript") != -1) ? "True" : "False";
    console.log(retorno);
}
var skills = ["Javascript", "ReactJS", "React Native"];

function ex4(anos) {
        if (anos < 1) console.log("Iniciante");
        else if (anos < 3) console.log("Intermediário");
        else if (anos < 6) console.log("Avançado");
        else if (anos >= 7) console.log("Jedi Master");
        else console.log("Nenhum");
}
var anosEstudo = 2;

var usuarios = [
    { nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"]},
    { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"]}
];

    

function ex5(usuarios){
    
    usuarios.forEach(usuario => {
        console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join());
    });
}