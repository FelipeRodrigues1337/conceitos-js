function tabuada(){
    let num = document.getElementById('valor')
    let tab = document.getElementById('seltab')

    if(num.value.length  == 0){
        window.alert('Por favor, digite um numero!')
    }else{
        tab.innerHTML = null
        let n = Number(num.value)
        let c = 1 
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}