const numeros = document.getElementById('numeros')
var interval
var seg=00
var min=00
var hour=00

var contadorAtivo = true

function digitos(digito){
    if(digito < 10){
        return('0'+digito)
    } else{
        return(digito)
    }
}

function ligar(){
    console.log(contadorAtivo)
    contadorAtivo = true
    //while(contadorAtivo === false){
    contador()
    interval = setInterval(contador, 1000);
  //  }
}

function parar(){
    clearInterval(interval)
    contadorAtivo = false
}

function zerar(){
   clearInterval(interval)
   console.log("valor de interval em zerar",interval)
   seg = 00
   min = 00
   hour = 00
   console.log("valor de seg em zerar",seg)
   document.getElementById('seg').innerText='00:00:00'

   contadorAtivo = false
}

function contador(){
    if(contadorAtivo === false){
        return
    }
    seg++
    if(seg === 60){
        min++
        seg=00
    } else if(min === 60){
        hour ++
        min=00
        seg=00

    }
   document.getElementById('seg').innerText=digitos(hour) + ':'+digitos(min)+':'+digitos(seg)
}

