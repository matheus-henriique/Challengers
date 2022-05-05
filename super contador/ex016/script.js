function contar(){
  var ini = document.querySelector('#txti')
  var fim = document.querySelector('#txtf')
  var passo = document.querySelector('#txtp')
  var res = document.querySelector('#res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    for(var c = i; c <= f; c += p) {
      res.innerHTML += ` ${c} \u{1F449}`
    }
  }

 
}





