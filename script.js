function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hours = data.getHours()
    msg.innerHTML = `Agora são ${hours} horas.`
    var gradient;

    if (hours >= 6 && hours < 12) {
        //BOM DIA
        img.src = '/Exercicio1/fotos/Dia.jpg'
        gradient = 'background: -webkit-linear-gradient(left, #3C9CEC, #283F5B); ' +
                   'background: -moz-linear-gradient(left, #3C9CEC, #283F5B); ' +
                   'background: -ms-linear-gradient(left, #3C9CEC, #283F5B); ' +
                   'background: -o-linear-gradient(left, #3C9CEC, #283F5B); ' +
                   'background: linear-gradient(to right, #3C9CEC, #283F5B);'
    } else if (hours >= 12 && hours <= 17) {
        //BOA TARDE
        img.src = '/Exercicio1/fotos/tarde.jpg'
        gradient = 'background: -webkit-linear-gradient(left, #FA7906, #5B3C28); ' +
                   'background: -moz-linear-gradient(left, #FA7906, #5B3C28); ' +
                   'background: -ms-linear-gradient(left, #FA7906, #5B3C28); ' +
                   'background: -o-linear-gradient(left, #FA7906, #5B3C28); ' +
                   'background: linear-gradient(to right, #FA7906, #5B3C28);'
    } else {
        //BOA NOITE
        img.src = '/Exercicio1/fotos/noite.jpg'
        gradient = 'background: -webkit-linear-gradient(left, #DC4804, #000000); ' +
                   'background: -moz-linear-gradient(left, #DC4804, #000000); ' +
                   'background: -ms-linear-gradient(left, #DC4804, #000000); ' +
                   'background: -o-linear-gradient(left, #DC4804, #000000); ' +
                   'background: linear-gradient(to right, #DC4804, #000000);'
    }

    document.body.setAttribute('style', gradient)
}