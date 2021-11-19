function contar(){
    var inicio = document.querySelector('#inicio');
    var fim = document.querySelector('#fim');
    var passos = document.querySelector('#passos');
    var res = document.querySelector('res')
    var ini = inicio.value;
    var fim = fim.value;
    var qtdPassos = passos.value;
    console.log('INÌCIO: ', ini);
    console.log('FIM:   ', fim);
    //console.log('PASSOS: ', qtdPassos);
    
    for(cont=ini; cont <= fim ; cont++){
        console.log('-> ' + cont);
    }
    //console.log('cont', cont)
    //console.log('fim',fim)
    res.innerHTML = teste

}
