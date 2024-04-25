function getValue(){
  var txt = document.getElementById("name").value
  console.log(txt);
   document.getElementById("result").innerHTML ="Bem vindo,  " + txt + "!";
}

function removerValor(){
  document.getElementById("result").innerHTML ="";
  document.getElementById("name").value = "";
}
