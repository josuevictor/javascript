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
    console.log('PASSOS: ', qtdPassos);
    if (qtdPassos > 1){
        window.alert('Chama na bota')
        for(cont=ini; cont <= fim ; (cont+qtdPassos)){
            console.log('-> ', cont);
        }
    }

}
