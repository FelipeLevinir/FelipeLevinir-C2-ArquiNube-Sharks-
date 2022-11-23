const modalShark = new boostrap.Modal(document.getElementById('modalShark'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.childen[0].innerHTML
    name_editar.value = fila.childen[1].innerHTML
    character_editar.value = fila.childen[2].innerHTML
    modalShark.show()
})