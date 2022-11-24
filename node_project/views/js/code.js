const modalShark = new bootstrap.Modal(document.getElementById('modalShark'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        };
    });
};

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].value
    name_editar.value = fila.children[1].value
    character_editar.value = fila.children[2].value
    modalShark.show()
});

// document.getElementById('modalS').addEventListener('click',()=>{
//     console.log('click')
// })