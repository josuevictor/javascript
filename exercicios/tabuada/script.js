function geraTabuada(){
    let valor = document.getElementById('numero')
    let res = document.getElementById('resTabuada')
    console.log (valor.value)
    if (valor.value <= 0){
        window.alert('[ERRO]')
    }else{
        res.innerHTML = 'Gerando tabuada...'
        let a = Number(valor.value)
        for (cont = 1 ; cont <= 10 ; cont++){
            res.innerHTML += 'foi'//`${a}, 'x', ${cont}, '=', ${a} * ${cont}`
        }
    }
}