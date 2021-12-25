let cont = 0

let fundo = document.getElementById('home')
let luz = document.getElementById('luz')

function troca(){
    cont ++
    
    if (cont % 2 == 1){//impar 
        fundo.className = 'escuro'
        luz.style.transform = 'rotate(0deg)'
    }else {
        fundo.className = 'claro'
        luz.style.transform = 'rotate(180deg)'
    }
    console.log(cont)
}



