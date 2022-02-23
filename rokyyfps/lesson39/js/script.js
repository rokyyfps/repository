let btn = document.querySelector('.btn')
let wrapper = document.querySelectorAll('.wrapper')
let color = document.querySelector('.color') 
let count = 0

let dragebleCard

wrapper.forEach(item =>{
    item.addEventListener('dragover', dragOver)
})

btn.addEventListener('click', ()=>addCard())

let addCard = () => {
    if(count >= 6) return
    console.log('enter')
    let card = document.createElement('div')
    card.classList.add('block')

    color = document.querySelector('.color').value
    card.style.backgroundColor = color
    card.setAttribute('dragedle', 'true')

    card.insertAdjacentHTML('afterbegin', `
    <div class="block"></div>
    `)

    wrapper[0].insertAdjacentElement('afterbegin', card)

    card.addEventListener('click', removeCard)
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)

    count++
}

function removeCard() {
    this.remove()
    console.log(this);
    count--
}   

function dragStart() {   
    dragebleCard = this
}

function dragOver() {   
    this.insertAdjacentElement('beforeend', dragebleCard)
}

function dragEnd() {   
    dragebleCard = undefined
}
