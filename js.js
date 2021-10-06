function inserir(numero){
   let anterior = document.getElementById("tela").innerHTML;
   document.getElementById("tela").innerHTML = anterior + numero;
}

function apagar_td(){
   document.getElementById("tela").innerHTML = ""
}

function apagar_um(){
   let anterior = document.getElementById("tela").innerHTML;
   document.getElementById("tela").innerHTML = anterior.substring(0, anterior.length -1)
}

function calcular(){
   let anterior = document.getElementById("tela").innerHTML;
   if(anterior){
      document.getElementById("tela").innerHTML = eval(anterior)
   }

}