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
    console.log(fila.children[0])
    name_editar.value = fila.children[1].value
    console.log(fila.children[1])
    character_editar.value = fila.children[2].value
    console.log(fila.children[2])
    modalShark.show()
});

// document.getElementById('modalS').addEventListener('click',()=>{
//     console.log('click')
// })