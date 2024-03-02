const inputPrincipal = document.querySelector(".input");
const botonAgregar = document.querySelector(".boton-agregar");
const container = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    const div = document.createElement("div");
    div.className = "item";

    const inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;

    const botonEditar = document.createElement("button");
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
    botonEditar.classList.add("boton-editar");

    let isEditable = false;
    botonEditar.addEventListener("click", () => {
      isEditable = !isEditable;
      inputItem.disabled = !isEditable;
      botonEditar.innerHTML = isEditable ? '<i class="fas fa-lock-open"></i>' : '<i class="fas fa-lock"></i>';
    });

    const botonRemover = document.createElement("button");
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
    botonRemover.classList.add("boton-remover");

    botonRemover.addEventListener("click", () => {
      div.remove();
    });

    div.appendChild(inputItem);
    div.appendChild(botonEditar);
    div.appendChild(botonRemover);

    container.appendChild(div);
  }
}

// Ejemplo de cómo crear un nuevo ítem
const nuevaTarea = "Hacer la compra";
const nuevoItem = new Item(nuevaTarea);

function chequearInput() {
  const inputPrincipal = document.querySelector(".input");
  const valorInput = inputPrincipal.value.trim();

  if (valorInput) {
    const nuevoItem = new Item(valorInput);

    inputPrincipal.value = "";
  }
}

botonAgregar.addEventListener("click", chequearInput);
