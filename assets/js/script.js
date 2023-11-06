document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})


//FUNCTIONS ITEM
function dragStart(e) { 
    e.currentTarget.classList.add('.dragging')
}


function dragEnd(e) {
    e.currentTarget.classList.remove('.dragging')
}

// FUNCTIONS AREAS

function dragOver() {
    e.preventDefault()
    // quando passar por cima da area
}

function dragLeave() {
// quando sair da area 
}

function drop() {
// quando soltar o item na area certa
}





