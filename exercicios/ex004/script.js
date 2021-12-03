function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpassos')
    let res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || passos.value == 0){
        window.alert('[ERRO] faltam dados!')
    }else if(ini.value > fim.value){
        res.innerHTML = 'Decrementando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        for (cont = i; cont >= f; cont -= p){
            res.innerHTML += `${cont}`
        }

    }
    else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        for(cont = i; cont <= f; cont += p){
            res.innerHTML += `${cont} \u{27A1}`
        }
        res.innerHTML += '\u{1F3C1}'
    }
}
