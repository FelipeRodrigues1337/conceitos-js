var list = []

function adicionar() {
    var tab = document.getElementById('lista')
    var valor = document.getElementById('valor')
    var inputvalue = Number(valor.value)
   
    if (verificar(inputvalue)) {
        alert('Este item ja foi adicionado !')
    } else if (inputvalue >= 1 && inputvalue <= 100) {
        list.push(inputvalue)
        console.log(list)
        let item = document.createElement('option')
        item.text = `O valor ${inputvalue} foi adicionado`
        tab.appendChild(item)
        
        valor.value = null
        finalizado = false
    } else {
        alert('Digite apenas numeros de 1 a 100')
    }
}

//verifica se existe o item informado dentro do array
function verificar(item) {
    if (list.includes(item)) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    var soma = 0
    var maior = Math.max.apply(null, list)  //busca o maior valor contido no array
    var menor = Math.min.apply(null, list)  //busca o menor valor contigo no array

    for (let index = 0; index < list.length; index++) {
        soma += list[index]    //soma todos valores do array
    }

    var media = parseFloat(soma / list.length)

    resp.innerText = `Ao todo temos ${list.length} numeros cadastrados. 
    \n O maior valor informado foi ${maior}. 
    \n O menor valor informado foi ${menor}.
    \n Somando todos os valores, temos ${soma}.
    \n A média dos valores informados é ${media} .`
    list = []
}