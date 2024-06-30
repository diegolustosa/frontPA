const body = window.document.getElementsByTagName("body")[0];

console.log(window.document.createElement("h1"));

const h1 = window.document.createElement("h1");

const ol = window.document.createElement("ol");

//PROCURAR CORRIGIR ESSE CÓDIGO QUANDO TIVER TEMPO ESTÁ UNDEFENID o for each listando com os append 
const alunos = [
    {nome: "Abobrinha",
    ra: 122131},

    {nome: "ronaldinho fenomeno",
    ra: 123111},

    {nome: "astolfo",
    ra: 342421}
]
alunos.forEach((item) => {
    const li = window.document.createElement("li");
    li.innerHTML = `${item.nome} <br> ra: ${item.ra}`;
    
    ol.appendChild(li);
    console.log(li);
});


h1.innerHTML = "ola mundo!";

body.appendChild(h1);
body.appendChild(ol);

