function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if(fano.value.length == 0 || fano.value > ano || fano.value < 1840){
       alert('Verifique os dados e tente novamente!')
    }else{
      var fsex = document.getElementsByName('sexo')
      var idade = ano - Number(fano.value)
      var genero = ''
      if(fsex[0].checked){
          genero = 'Homem'
         if(idade >=0 && idade < 10){
            img.src = "assets/homemcriança.png"
         }else if( idade < 21){
            img.src = "assets/homemjovem.png"
         }else if (idade < 50){
            img.src = "assets/homemadulto.png"
         }else {
            img.src = "assets/homemvelho.png"
         }
      }else{
          genero = 'Mulher'
          img.src = "assets/mulheradulta.png"

          if(idade >=0 && idade < 10){
            img.src = "assets/mulhercriança.png"
         }else if( idade < 21){
            img.src = "assets/mulherjovem.png"
         }else if (idade < 50){
            img.src = "assets/mulheradulta.png"
         }else {
            img.src = "assets/mulhervelha.png"
         }
      }

      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

}