//reloj
function cero(n) {
    n < 10 ? n = "0" + n : n;
    return n
}
//(function () {
function reloj() {
    var fecha = new Date()
    var hora = cero(fecha.getHours())
    var minuto = cero(fecha.getMinutes())
    var segundo = cero(fecha.getSeconds())
    var horas = hora + ":" + minuto + ":" + segundo
    if (fecha.getHours() < 12) {
        horas += " AM"
    } else if (fecha.getHours() == 12) {
        horas += " PM"
    } else {
        hora = cero(fecha.getHours() - 12)
        horas = hora + ":" + minuto + ":" + segundo + " PM"
    }
    document.getElementsByClassName("time")[0].innerHTML = hora;
    document.getElementsByClassName("time")[1].innerHTML = minuto;
    document.getElementsByClassName("time")[2].innerHTML = segundo;
    // console.log(horas)
    setTimeout("reloj()", 1000)
        //setInterval("reloj()",1000)
}
//	var intervalo=setInterval(reloj,1000)		
//})
function hoy() {
    var fecha = new Date()
    var Mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    var Dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
    mes = Mes[fecha.getMonth()]
    dia = Dia[fecha.getDay()]
    var fecha_actual = dia + ", " + mes + " " + fecha.getDate() + " de " + fecha.getFullYear()
    document.getElementById("fecha").innerHTML = fecha_actual;
    console.log(fecha_actual)
}

reloj();
hoy();