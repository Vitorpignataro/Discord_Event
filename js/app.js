const contagemRegressiva = () => {
    const dataEvento = new Date("August 06, 2022 12:00:00").getTime();
    const dataAtual = new Date().getTime();
    const dataSoma = dataEvento - dataAtual;

   const segundos = 1000;
   const minutos = 60 * segundos;
   const horas = 60 * minutos;
   const dias = 24 * horas;

   let dia = Math.floor(dataSoma / dias)
   let hora = Math.floor((dataSoma % dias) / horas)
   let minuto = Math.floor((dataSoma % horas) / minutos)
   let segundo = Math.floor((dataSoma % minutos) / segundos)



    if(dia < 10){
        console.log(dia);
        if(dia < 0){
            document.querySelector('.dia').innerHTML = '00';
        }else{
            document.querySelector('.dia').innerHTML = '0' + dia;
        }
    }else{
        document.querySelector('.dia').innerHTML = dia;
    }

    if(hora < 10){
        if(hora < 0){
            document.querySelector('.hora').innerHTML = '00';
        }else{
            document.querySelector('.hora').innerHTML = '0' + hora;
        }
    }else{
        document.querySelector('.hora').innerHTML = hora;
    }

    if(minuto < 10){
        if(minuto < 0){
            document.querySelector('.minuto').innerHTML = '00';
        }else{
            document.querySelector('.minuto').innerHTML = '0' + minuto;
        }
    }else{
        document.querySelector('.minuto').innerHTML = minuto;
    }

    if(segundo < 10){
        if(segundo < 0){
            document.querySelector('.segundo').innerHTML = '00';
        }else{
            document.querySelector('.segundo').innerHTML = '0' + segundo;
        }
    }else{
        document.querySelector('.segundo').innerHTML = segundo;
    }

}

// function notYet(){
//     alert('A sessão de regras do evento só será liberado após o fim do CountDown')
// }

setInterval(contagemRegressiva, 1000);

contagemRegressiva();

