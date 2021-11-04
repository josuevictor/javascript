function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique novamente os dados digitados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//cria tag img
        img.setAttribute('id', 'foto')//atribuir id para a tag img
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                window.alert('Criança')
                img.setAttribute('src', 'foto-crianca-m.png')
            }
            else if(idade < 21){
                window.alert('Jovem')
            }
            else if (idade < 50){
                window.alert('Adulto')
            }else {
                window.alert('idoso')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                window.alert('Criança')
            }
            else if(idade < 21){
                window.alert('Jovem')
            }
            else if (idade < 50){
                window.alert('Adulto')
            }else {
                window.alert('idoso')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}