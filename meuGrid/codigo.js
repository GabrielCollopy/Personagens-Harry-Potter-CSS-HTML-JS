const harry = "https://hp-api.onrender.com/api/characters";

let listaDePersonagens = document.getElementById("listaDePersonagens");

let lista = [];

function convertePersonagemToLi(personagem) {
    return `
        <li class="personagem">
            <h3>${personagem.name}</h3>
            <img src="${personagem.image}">
            <div class="info">
                <p>House: ${personagem.house}</p>
                <p>Species: ${personagem.species}</p>
                <p>Birth: ${personagem.dateOfBirth}</p>
                <p>Patronus: ${personagem.patronus}</p>
                <p>Actor: ${personagem.actor}</p>
            </div>
        </li>
    `;
}

fetch(harry)
    .then((response) => response.json())
    .then((jsonresponse) => jsonresponse)
    .then((jsonresponse) => listaDePersonagens.innerHTML = jsonresponse.map(convertePersonagemToLi).join(""))
    .catch((error) => console.log(error));