// let arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element)
// })


let btn = document.querySelector('.get_text')
let btn1 = document.querySelector('.write')
let btn2 = document.querySelector('.get')
let wrapper = document.querySelector('.wrapper')
let count = 1

btn.addEventListener('click', ()=>createCard())
btn1.addEventListener('click', ()=>write())
btn2.addEventListener('click', ()=>get())

let createCard = () =>{
    let text = document.querySelector('.text').value
    if(text == '') return

    let card = document.createElement('li')
    card.classList.add('card')
    
    card.insertAdjacentHTML('afterbegin', `
    <div class="number">${count}</div>
    <div class="text">${text}</div>
    `)
    wrapper.insertAdjacentElement('afterbegin', card)

    let colorVal = document.querySelector('.color').value
    card.style.backgroundColor = colorVal

    count++
    document.querySelector('.text').value = ''
}

let arr = []

let write = () =>{
    let text = document.querySelector('.text').value
    if(text == '') return
    arr.push(text)
}   


let get = () =>{
    arr.forEach(text => {
            let card = document.createElement('li')
            card.classList.add('card')
        
            card.insertAdjacentHTML('afterbegin', `
            <div class="number">${arr.length}</div>
            <div class="text">${text}</div>
            `)
        wrapper.insertAdjacentElement('afterbegin', card)
    })
}





