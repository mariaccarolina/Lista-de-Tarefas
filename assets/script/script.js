const tarefaInput = document.querySelector(".input");
const addTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function checkbox() {
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  return check;
}

tarefaInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!tarefaInput.value) return;
    criarTarefa(tarefaInput.value);
  }
});

function limpaTarefa() {
  tarefaInput.value = "";
  tarefaInput.focus();
}

function criarBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "X";
  botaoApagar.setAttribute("class", "apagar");
  li.appendChild(botaoApagar);
}

function criarTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  li.classList.add("tarefaAdd");
  tarefas.appendChild(li);
  limpaTarefa();
  criarBotaoApagar(li);
}

addTarefa.addEventListener("click", function () {
  if (!tarefaInput.value) return;
  criarTarefa(tarefaInput.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
  }
});
