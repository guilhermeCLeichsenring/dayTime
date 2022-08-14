function carregar(){
    var time = document.querySelector('#time')
    var img = document.querySelector('#img')


    var agora = new Date()

    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    var hora = 1

    var dia = agora.getDate()
    var mes = agora.getMonth()
    var mes = mes + 1
    var ano = agora.getUTCFullYear()

    time.innerHTML = `São ${hora}:${minutos}h`

    console.log(`São ${hora}:${minutos}h 
    DATA: ${dia}/${mes}/${ano}`)



    if (hora <= 12 && hora >= 6){
        img.src = './img/morning2.jpg'
        document.body.style.background = '#627329'

        console.log('BOM DIA')
    }
    else if (hora < 18  && hora > 12){
        img.src = './img/afternoon.jpg'
        document.body.style.background = '#704149'

        console.log('BOA TARDE')
    }
    else if (hora < 24 && hora >=18){
        img.src = './img/evening.jpg'
        document.body.style.background = '#064064'

        console.log('BOA NOITE')
    }

    else{
        img.src = './img/night.jpg'
        document.body.style.background = '#292830'

        console.log('BOA MADRUGADA')
    }
}