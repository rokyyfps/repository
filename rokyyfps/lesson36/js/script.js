
// let massive = []

// let func1 = () => {
//     let x = prompt()
//     massive.push(x)
// }

// let func2 = () => {
//     let res = ''
//     for(let i = 0; i < massive.length; i++){
//         res += massive[i] + ' '
//     }
//     console.log(res)
// }

// let inpTxt = document.querySelector('.input')
// document.addEventListener('click', () => (add))
// arr = []

// let add = () =>{
//     let text = inpTxt.value 
//     arr.push(text)
//     console.log(arr)
// }

document.querySelector('.input_btn').addEventListener('click', ()=>(func1()))

let func1 = () => {
    let wrapper = document.querySelector('.wrapper')
    insertAdjacentHTML('afterbegin', wrapper) = `
        <input type="text" class="input">
    `
}
