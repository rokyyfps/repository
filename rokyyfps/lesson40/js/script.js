document.querySelector('.btn').addEventListener('click', ()=>addNewUser())
document.querySelector('.view_user').addEventListener('click', ()=>viewUser())
let personArr = []
let id = 0

let addNewUser = () => {
    
    let text = document.querySelector('.user_name').value
    let age = document.querySelector('.user_age').value
    if (text == '' && age == '' ) return
    

    let date = new Date 
    let currentDate = date.getFullYear() + '.' + (date.getMonth()+1) + '.' + date.getDay()


    // console.log(currentDate)

    let person = {
        'id': id,
        'name': text,
        'age': age,
        'createDate': currentDate,
    }

    personArr.push(person)
}

let viewUser = () => {

    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''
    personArr.forEach(person => {
        let card = document.createElement('div')
        card.setAttribute('id', 'id')
        id++

        card.classList.add('card')
        card.insertAdjacentHTML('afterbegin',`
        <div class="user__name">${person.name}</div>
        <div class="user__age">${person.age}</div>
        <div class="date">${person.createDate}</div>
        <div class="del">x</div>
        `)

        card.querySelector('.del').addEventListener('click', deleteCard)

        wrapper.insertAdjacentElement('afterbegin', card)
    })
}

function deleteCard () {
    this.closest('.card')

    let card = this.closest('.card')
    let id = card.getAttribute('id')
    for (let i = 0; i < personArr.length; i++){
        if(personArr[i].id == id) {
            console.log(personArr[i]);
            personArr[i].splice(i,1)
            break
        }
    }
    console.log(personArr);
    card.remove()
}

