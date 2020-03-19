var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
var letras_minusculas = "abcdefghyjklmnñopqrstuvwxyz";
var numeros = "0123456789";



function loggin() {
    var clave = document.getElementById('clave').value;
    var mensaje = document.getElementById('error_mensaje');

    if (start4_mayusculas(clave) == 1 && after4_begin_3_minusculas(clave) == 1 && after7_begin_numeros(clave) == 1) {
        alert("su clave es correcta:  " + clave);
        location.href = "registro-llamadas.html";

    } // fin if
    else {
        alert("su clave es incorrecta: " + clave);
        mensaje.innerHTML = "su clave es incorrecta";
    }

    /*****
        // exito
        var clave = "ABCDabc123";
        var clave1 = "ABCDabc111231";
        var clave2 = "ABCDabc2X12333";
        var clave3 = "ABCDabc3X1111122aa";

        // error 
        var clave4 = "abcdabc4123446";
        var clave5 = "ABCDab1123";
        var clave6 = "ABCD11233bc";
        var mensaje;
        if (start4_mayusculas(clave) == 1) console.log('empieza con mayusculas ' + clave);
        else console.log('NO empieza con 4 mayusculas: ' + clave);
        if (start4_mayusculas(clave2) == 1) console.log('empieza con mayusculas ' + clave2);
        else console.log('NO empieza con 4 mayusculas: ' + clave2);
        if (start4_mayusculas(clave3) == 1) console.log('empieza con mayusculas ' + clave3);
        else console.log('NO empieza con 4 mayusculas:  ' + clave3);
        if (start4_mayusculas(clave4) == 1) console.log('empieza con mayusculas ' + clave4);
        else console.log('NO empieza con 4 mayusculas: ' + clave4);
        // segundo metodo
        if (after4_begin_3_minusculas(clave) == 1) console.log('after4_begin_3_minusculas: ' + clave);
        else console.log(' NO after4_begin_3_minusculas: ' + clave);
        if (after4_begin_3_minusculas(clave2) == 1) console.log('after4_begin_3_minusculas: ' + clave2);
        else console.log('NO after4_begin_3_minusculas: ' + clave4);
        if (after4_begin_3_minusculas(clave3) == 1) console.log('after4_begin_3_minusculas: ' + clave3);
        else console.log('NO after4_begin_3_minusculas: ' + clave4);
        if (after4_begin_3_minusculas(clave4) == 1) console.log('after4_begin_3_minusculas: ' + clave4);
        else console.log('NO after4_begin_3_minusculas: ' + clave4);

        // tercer metodo
        if (after7_begin_numeros(clave) == 1) console.log('after7_begin_numeros: ' + clave);
        else console.log(' NO after7_begin_numeros: ' + clave);
        if (after7_begin_numeros(clave1) == 1) console.log('after7_begin_numeros: ' + clave1);
        else console.log(' NO after7_begin_numeros: ' + clave1);
        if (after7_begin_numeros(clave2) == 1) console.log('after7_begin_numeros: ' + clave2);
        else console.log(' NO after7_begin_numeros: ' + clave2);
        if (after7_begin_numeros(clave3) == 1) console.log('after7_begin_numeros: ' + clave3);
        else console.log(' NO after7_begin_numeros: ' + clave3);
        if (after7_begin_numeros(clave4) == 1) console.log('after7_begin_numeros: ' + clave4);
        else console.log(' NO after7_begin_numeros: ' + clave4);

    ******/
    console.log('la clave es: ' + clave);
    //alert('la clave es: ' + clave);


}
// 0 si no empiza con mayusculas y 1 uno si empieza con mayusculas
function start4_mayusculas(texto) {
    var cont = 0;
    for (i = 0; i <= 3; i++) {
        if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
            //return 1;
            cont++;
            // console.log('cont tiene ' + cont);
        }
    }
    if (cont == 4) return 1;
    else return 0;
} // fin de funcion

function after4_begin_3_minusculas(texto) {
    var cont = 0;
    for (var i = 4; i < texto.length; i++) {
        if (letras_minusculas.indexOf(texto.charAt(i), 0) != -1) {
            cont++;
            //console.log(cont);
        }
    }
    console.log('i tiene: ' + i);
    if (cont == 3) return 1;
    else return 0;
} // fin funcion

function after7_begin_numeros(texto) {
    var cont = 0;
    var band = 0;
    for (i = 7; i < texto.length; i++) {
        if (numeros.indexOf(texto.charAt(i), 0) != -1) {
            cont++;
            (cont == 1 && i == 7) ? band = 7: '';
            //return 1;
            // console.log('contador tiene : ' + cont);
        }
    }
    if (band == 7) return 1;
    else return 0;


}


//console.log('hola mundo');
//loggin();