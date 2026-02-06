import { hobbies } from "./hobbies.js";

const botao = document.getElementById("gerar");
const resultado = document.getElementById("resultado");
const lista = document.getElementById("lista-hobbies");

let hobbiesSalvos = JSON.parse(localStorage.getItem("meusHobbies")) || [];

function renderizarLista() {
  lista.innerHTML = "";

  hobbiesSalvos.forEach((hobby, index) => {
    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = hobby;

    const remover = document.createElement("span");
    remover.textContent = "−";
    remover.classList.add("remove");

    remover.onclick = () => {
      hobbiesSalvos.splice(index, 1);
      salvar();
      renderizarLista();
    };

    li.appendChild(texto);
    li.appendChild(remover);
    lista.appendChild(li);
  });
}

// salvamento no localStorage, para armazenar no navegador os dados
function salvar() {
  localStorage.setItem("meusHobbies", JSON.stringify(hobbiesSalvos));
}

botao.addEventListener("click", () => {
  const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  resultado.textContent = hobby;

  hobbiesSalvos.push(hobby);
  salvar();
  renderizarLista();
});

renderizarLista();
