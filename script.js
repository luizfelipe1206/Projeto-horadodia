function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto');
    var gradient;

    function atualizarHora() {
        var data = new Date();
        var hours = data.getHours();
        var minutes = data.getMinutes();
        var seconds = data.getSeconds();
        msg.innerHTML = `Agora são ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;

        if (hours >= 6 && hours < 12) {
            //BOM DIA
            img.src = '/fotos/Dia.jpg';
            gradient = 'linear-gradient(to right, #3C9CEC, #283F5B)';
        } else if (hours >= 12 && hours <= 17) {
            //BOA TARDE
            img.src = '/fotos/tarde.jpg';
            gradient = 'linear-gradient(to right, #FA7906, #5B3C28)';
        } else {
            //BOA NOITE
            img.src = '/fotos/noite.jpg';
            gradient = 'linear-gradient(to right, #DC4804, #000000)';
        }

        document.body.style.backgroundImage = gradient;
    }

    // Atualizar a hora a cada segundo
    setInterval(atualizarHora, 1000);
}

// Chame a função carregar após o carregamento do documento
document.addEventListener('DOMContentLoaded', carregar);


