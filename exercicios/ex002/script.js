function carregar(){
    var msg = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = '#8da6b2'
    }else if (hora >=12 && hora <= 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#f29228'
    }else{
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#1c3136'
        
    }
}
