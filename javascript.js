var padre = document.getElementsByClassName("shop-container")[0];

for (i = 0; i < 5; i++) {
    var link = document.createElement("a");
    link.setAttribute("href", "shop-item.html");
    var element = document.createElement("div");
    element.setAttribute("class", "shop-item");
    var image = document.createElement("img");
    image.setAttribute("src", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225358/Pug-On-White-01.jpg");
    image.setAttribute("class", "img-responsive");
    var price = document.createElement("h1");
    var priceNumber = document.createTextNode("precio: ");
    price.appendChild(priceNumber);
    var nombre = document.createElement("h2");
    nombre.appendChild(document.createTextNode("nombre"));
    var description = document.createElement("p");
    description.appendChild(document.createTextNode("Algo muy importante va aqui"));
    element.appendChild(image);
    element.appendChild(price);
    element.appendChild(nombre);
    element.appendChild(description);
    link.appendChild(element);
    padre.appendChild(link);
}

// FUNCIONES DE VALIDACIÓN DEL FORMULARIO DE REGISTRO

// Función que evalúa expresiones regulares para los campos que sólo aceptan números:
// - Día de nacimiento
// - Año de nacimiento
// Se usó en el HTML el siguiente atributo onChange="validarSiNumero(this.value);"
function validarSiNumero(numero) {
    if (!/^([0-9])*$/.test(numero)) {
        alert ("El valor " + numero + " no es válido. Ingresar sólo números.");
    }
}

// Función que evalúa expresiones regulares para los campos que sólo aceptan letras:
// - Nombres
// - Apellidos
// Se usó en el HTML el siguiente atributo onChange="validarSiLetra(this.value);"
function validarSiLetra(letra) {
    if (!/^([a-zA-Z])*$/.test(letra)) {
        alert ("El texto " + letra + " no es válido. Ingresar sólo letras.");
    }
}

// Llenando JSON con los datos del formulario
var fecha = new Date();
var formInscription = document.getElementsByName("registro")[0];
function crear_registro(form){

var cliente={
    "nombre": formInscription.Nombre.value + " " + form.Apellido.value,
    "usuario": formInscription.Correo.value,
    "direccion": formInscription.Direccion.value,
    "registro": new Date(),
    "expira": calcula_fecha()
}

//Función para calcular la fecha en la que vence la cookie
function calcula_fecha(){
    // exdays es la cantidad de días que durará activa la Cookie "definido en checkCookie()" 
    // x 1000 milisegundos x 60 segundos x 60 minutos x 24 horas
    fecha.setTime(fecha.getTime() + (90*24*60*60*1000)); 
    var expires = fecha.toGMTString();
    return expires;
}

//VERIFICANDO QUE EL JSON QUEDE LLENO, LOS RESULTADOS SE PASARON A UN <PRE> PARA VERIFICAR EL CONTENIDO, 
// LA IDEA ES QUE ESOS DATOS SE PASEN A LA COOKIE
var html=JSON.stringify(cliente,0,4);
document.getElementById("output").innerHTML=html;
/*document.cookie = "nombre=" + cliente[3] + "; path:/";*/
console.log(ErrorEvent);
return false;   
}


(function(){

    var formInscription = document.getElementsByName("registro")[0];
    var boton = document.getElementById("boton");
    
    // Validación si envía Nombre vacío
    function validarNombre(e){
        if(formInscription.Nombre.value == 0){
            alert("Debe completar el campo Nombre");
            e.preventDefault();
        }  
    }

    // Validación si envía Apellido vacío
    function validarApellido(e){
        if(formInscription.Apellido.value == 0){
            alert("Debe completar el campo Apellido");
            e.preventDefault();
        }  
    }

    function validarDia(e){
        if(formInscription.Dia.value == 0){
            alert("Debe completar el campo Día");
            e.preventDefault();
        } else if (formInscription.Dia.value > 31) {
            alert("Los días no pueden ser superiores a 31.");
        }
    }

    // Validación si envía Mes vacío
    // Validación si ingresa un día superior a 31
    // Nota: está pendiente cursar con los meses de 30 días y revisar si es bisiesto
    function validarMes(e){
        var mes = document.getElementById("Mes").value;
        var combo = document.getElementById("Mes");
        var selected = combo.options[combo.selectedIndex].text;

        if(mes == 0){
            alert("Debe completar el campo Mes");
            e.preventDefault();
        }
    }

    // Validación si envía Año vacío
    // Validación si es muy joven o muy viejo
    function validarAnio(e){
        if(formInscription.Anio.value == 0){
            alert("Debe completar el campo Año");
            e.preventDefault();
        }  else if(formInscription.Anio.value < 1900) {
            alert("Año no válido, eres muy viejo para usar esta página.\nCreemos que estás muerto 💀");
        } else if(formInscription.Anio.value > 2013) {
            alert("Año no válido, eres muy joven para usar esta página.\nPensamos que no tienes permisos de tus papás 🍼");
        }
    }

    // Validación si envía Correo vacío
    function validarCorreo(e){
        if(formInscription.Correo.value == 0){
            alert("Debe completar el campo Correo");
            e.preventDefault();
        }  
    }

    // Validación si envía Dirección vacía
    function validarDireccion(e){
        if(formInscription.Correo.value == 0){
            alert("Debe completar el campo Dirección");
            e.preventDefault();
        }  
    }


    function validarEdad() {
        // Tomamos la fecha presente
        var fecha = new Date();
        var aniop = fecha.getFullYear();
        var mesp = fecha.getMonth() + 1;
        var diap = fecha.getDate();

        var anio = aniop - formInscription.Anio.value;
        var mes = mesp - formInscription.Mes.value;
        var dia = diap - formInscription.Dia.value;

        // Si la diferencia entre aniop - Anio.value es menor a 18, entonces es menor de edad
        if(anio < 18) {
            alert("Eres menor de edad, no puedes comprar acá.");
        // Si tiene 18 años, entonces evalúo si nació en diciembre
        // Si es Diciembre:
        // mes = 11 - 12 = -1 => diferencia negativa
        } else if ((anio == 18) && (mes < 0)) {
            alert("Eres menor de edad, no puedes comprar acá.");
        // Si es Noviembre:
        // mes = 11 - 11 = 0
        // Además evalúo si la diferencia entre diap - Dia.value 
        // Si es 04 Nov => dia = 3 - 4 = -1 diferencia negativa
        } else if ((anio == 18) && (mes == 0) && (dia < 0)) {
            alert("Eres menor de edad, no puedes comprar acá.");
        }
    }

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarCorreo(e);
        validarDireccion(e);
        validarDia(e);
        validarAnio(e);
        validarMes(e);
        validarEdad(e);
    };

    console.log("conectado");
    formInscription.addEventListener("submit",validar);

}())