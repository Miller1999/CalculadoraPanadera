var a;
var operacion;
var b;

//Variables
function init()
{
    var resultado = document.getElementById("resultado");
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var potencia = document.getElementById('potencia');
    var raiz = document.getElementById('raiz');
    var igual = document.getElementById('igual');
    var residuo = document.getElementById('residuo');
    
    //Eventos numeros

    uno.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e)
    {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e)
    {
        resetear();
    }
    suma.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "+";
        limpiar(); 
    }
    resta.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "-";
        limpiar(); 
    }
    multiplicacion.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    potencia.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "^";
        limpiar();
    }
    raiz.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "√";
        limpiar();
    }
    residuo.onclick = function(e)
    {
        a = resultado.textContent;
        operacion = "%";
        limpiar();
    }
    igual.onclick = function(e)
    {
        b = resultado.textContent;
        resolver();
    }
}

function limpiar()
{
    resultado.textContent = "";
}

function resetear()
{
    a = 0;
    b = 0;
    operacion = "";
    resultado.textContent = "";
}

function resolver()
{
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            res = parseFloat(a) * parseFloat(b);
            break;
        case "/":
        res = parseFloat(a) / parseFloat(b);
        break;
        case "^":
        res = parseFloat(a) ** parseFloat(b);
        break;
        case "√":
        res = Math.sqrt(parseFloat(a));
        break;
        case "%":
        res = parseFloat(a) % parseFloat(b); 
        break;
        default:
        res = "Syntax Error"
        break;
    }
    resetear();
    resultado.textContent = res;
}