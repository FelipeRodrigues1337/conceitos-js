function contar() {

    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')

    var valinicio = Number(inicio)
    var valfim = Number(fim)
    var valpasso = Number(passo)
    var contador = + valinicio
    res.innerHTML=null

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "Verifique os campos !"
        //contagem crescente
    } else if (valinicio > valfim) {
        //contagem regressiva
       // res.innerHTML += `Contando: ${valinicio}\u{1F449}`
        while (contador > valfim) {
            contador -= valpasso
            res.innerHTML += `${contador} \u{1F449} `
        }
        res.innerHTML+= `\u{1F3C1}`
    } else {
        //contagem crescente
        res.innerHTML += `Contando: `
        while (contador < fim) {
            res.innerHTML += `${contador} \u{1F449}`
            contador += valpasso
        }
        res.innerHTML+= `\u{1F3C1}`
    }
}