let cont = 0

let fundo = document.getElementById('luz')

function troca(){
    cont ++
    
    if (cont % 2 == 1){//impar 
        fundo.style.backgroundColor = '#3399ff'
        fundo.style.transform = 'rotate(0deg)'
    }else {
        fundo.style.backgroundColor = 'white'
        fundo.style.transform = 'rotate(180deg)'
    }
    console.log(cont)
}



