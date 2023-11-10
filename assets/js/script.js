let areas = { 
    a: null,
    b: null,
    c:null
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverArea)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveArea)
document.querySelector('.neutralArea').addEventListener('drop', dropArea)


//FUNCTIONS ITEM
function dragStart(e) {
    e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}

// FUNCTIONS AREAS

function dragOver(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault()
        e.currentTarget.classList.add('hover')
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}

function drop(e) {
    e.currentTarget.classList.remove('hover')

    if (e.currentTarget.querySelector('.item') === null) {
    let itemDrag = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(itemDrag)
        update()
    }
}

//FUNCTIONS NEUTRAL AREA 

function dragOverArea(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}

function dragLeaveArea(e) {
    e.currentTarget.classList.remove('hover')
}

function dropArea(e) {
   e.currentTarget.classList.remove('hover')

   let itemDrag = document.querySelector('.item.dragging')
   e.currentTarget.appendChild(itemDrag)
   update()
}

// inform functions 

function update() { 
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name')

        if(area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML
        } else { 
            areas[name] = null
        }
    })

    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct')
    } else { 
        document.querySelector('.areas').classList.remove('correct')
    }
}




