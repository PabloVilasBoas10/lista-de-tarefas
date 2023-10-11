const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-criar')
const ul = document.querySelector('.lista')

btnTarefa.addEventListener('click', () => {
  if (!inputTarefa.value || inputTarefa.value.trim() === '') {
    return
  }
  criaTarefa(inputTarefa.value)
})


function criaTarefa(txt) {
  const divContainer = criaContainer(txt)
  ul.appendChild(divContainer)
  LimpaInput()

}


// Cria Elementos

function criaDiv() {
  const div = document.createElement('div')
  return div
}

function CriaLi() {
  const li = document.createElement('li')
  return li
}

function criaContainer(txt) {
  const li = CriaLi()
  const divContainer = criaDiv()
  const divLi = criaDiv()
  const divBotoes = criaDiv()
  const btnApagar = criaBtnApagar()
  const inputChecar = criaInputChecar()
  const btnEditar = criaBtnEditar()

  divContainer.appendChild(divLi)
  divContainer.appendChild(divBotoes)
  divBotoes.appendChild(inputChecar)
  divBotoes.appendChild(btnApagar)
  divBotoes.appendChild(btnEditar)
  divLi.appendChild(li)

  li.innerText = txt

  return divContainer
}

function criaBtnApagar() {
  const btnApagar = document.createElement('button')
  btnApagar.innerText = 'X'
  btnApagar.classList.add('apagar-tarefa')
  return btnApagar
}

function criaInputChecar() {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('checar-tarefa')
  return checkbox
}

function criaBtnEditar() {
  const btnEditar = document.createElement('button')
  btnEditar.innerText = 'E'
  btnEditar.classList.add('editar-tarefa')
  return btnEditar
}

function ContainerEditarTarefa(e) {
  const el = e.target
  if (el.classList.contains('editar-tarefa')) {
    const containerEditarTarefa = document.querySelector('.div-editar-tarefa')
    const inputEditarTarefa = containerEditarTarefa.querySelector('.input-tarefa-editada')
    const btnEditarTarefa = containerEditarTarefa.querySelector('.btn-confirmar-edit')
    containerEditarTarefa.classList.add('abrir')

    inputEditarTarefa.focus()
    const li = el.parentElement.parentElement.children[0].children[0]

    btnEditarTarefa.addEventListener('click', () => {
      if (!inputEditarTarefa.value || inputEditarTarefa.value.trim() === '') {
        return
      }
      li.innerText = inputEditarTarefa.value
      containerEditarTarefa.classList.remove('abrir')

    })
  }
}

// Eventos

document.addEventListener('keypress', (e) => {
  if (!inputTarefa.value || inputTarefa.value.trim() === '') {
    return
  }
  if (e.keyCode === 13) {
    criaTarefa(inputTarefa.value)
    LimpaInput()

  }
})

document.addEventListener('click', (e) => {
  const el = e.target
  if (el.classList.contains('apagar-tarefa')) {
    el.parentElement.parentElement.remove()
  }

  if (el.classList.contains('editar-tarefa')) {
    const containerEditarTarefa = document.querySelector('.div-editar-tarefa')
    const inputEditarTarefa = containerEditarTarefa.querySelector('.input-tarefa-editada')
    const btnEditarTarefa = containerEditarTarefa.querySelector('.btn-confirmar-edit')
    const btnFecharJanela = containerEditarTarefa.querySelector('.fechar-janela')
    containerEditarTarefa.classList.add('abrir')

    inputEditarTarefa.focus()
    const li = el.parentElement.parentElement.children[0].children[0]

    btnEditarTarefa.addEventListener('click', () => {
      if (!inputEditarTarefa.value || inputEditarTarefa.value.trim() === '') {
        return
      }
      li.innerText = inputEditarTarefa.value
      containerEditarTarefa.classList.remove('abrir')
      inputEditarTarefa.value = ''

    })
    btnFecharJanela.addEventListener('click', () => {
      containerEditarTarefa.classList.remove('abrir')
      inputEditarTarefa.value = ''

    })
  }
})


document.addEventListener('click', (e) => {
  const el = e.target
  if (el.classList.contains('checar-tarefa')) {
    el.parentElement.parentElement.classList.toggle('tarefa-concluida')
  }
})

function LimpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}