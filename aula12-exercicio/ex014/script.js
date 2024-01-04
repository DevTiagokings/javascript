function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'imagens/morning.png'
        document.body.style.background = '#585c50'
    } else if (hora >= 12 && hora < 18){
        //Boa Tarde!
        img.src = 'imagens/afternoon.png'
        document.body.style.background = '#87824d'
    } else {
        //Boa Noite!
        img.src = 'imagens/night.png'
        document.body.style.background = '#fad1b5'
    }
}