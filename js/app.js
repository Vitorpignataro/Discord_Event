const contagemRegressiva = () => {
    const dataEvento = new Date("August 01, 2022 00:00:00").getTime();
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

   document.querySelector('.dia').innerHTML = dia;
   document.querySelector('.hora').innerHTML = hora;
   document.querySelector('.minuto').innerHTML = minuto;
   document.querySelector('.segundo').innerHTML = segundo;



}

setInterval(contagemRegressiva, 1000);

contagemRegressiva();

