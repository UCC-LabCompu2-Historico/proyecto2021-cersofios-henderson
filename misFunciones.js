/**
 * Función que permite mostrar u ocultar div según la elección de los radio button
 * @method mostrar_ocultar
 * @param {string} valor - El valor de los radio button (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @return
 */
/**
 * Función que permite calcular el área de las figuras (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @method CalculodeArea
 * @param {string} id - El id de los div que contienen los datos de cada figura geométrica (Base y Altura, Lado o Radio)
 * @return {number} Resultado del Área
 */
/**
 * Función que permite dibujar las figuras geométricas según su Unidad de Medida
 * @method dibujarCanvas
 * @param {string} id - El id de los div que contienen los datos de cada figura geométrica, id del canvas y id de las Unidades de Medida
 * @return {canvas} dibujo de la figura geométrica
 */

function mostrar_ocultar(valor){
    if (valor == "Triangulo") {
        document.getElementById("area_triangulo").style.display = 'block';
        document.getElementById("area_cuadrado").style.display = 'none';
        document.getElementById("area_circulo").style.display = 'none';
        document.getElementById("area_rectangulo").style.display = 'none';
    } else if (valor == "Cuadrado") {
        document.getElementById("area_triangulo").style.display = 'none';
        document.getElementById("area_cuadrado").style.display = 'block';
        document.getElementById("area_circulo").style.display = 'none';
        document.getElementById("area_rectangulo").style.display = 'none';
    }  else if (valor == "Circulo") {
        document.getElementById("area_triangulo").style.display = 'none';
        document.getElementById("area_cuadrado").style.display = 'none';
        document.getElementById("area_circulo").style.display = 'block';
        document.getElementById("area_rectangulo").style.display = 'none';
    } else if (valor == "Rectangulo") {
        document.getElementById("area_triangulo").style.display = 'none';
        document.getElementById("area_cuadrado").style.display = 'none';
        document.getElementById("area_circulo").style.display = 'none';
        document.getElementById("area_rectangulo").style.display = 'block';
    }
}
function CalculodeArea(id) {
    if (id == area_triangulo) {
        var parametro1, parametro2, resultado;
        if (parametro1.includes(",")) {
            parametro1 = parametro1.replace(",", ".");
        }
        if (parametro2.includes(",")) {
            parametro2 = parametro2.replace(",", ".");
        }
        if (isNaN(parametro1)) {
            alert("Se ingreso un valor invalido " + id);
        }
        if (isNaN(parametro2)) {
            alert("Se ingreso un valor invalido " + id);
        }
        parametro1 = Number(document.getElementById("BaseT").value);
        parametro2 = Number(document.getElementById("AlturaT").value);
        document.getElementById("Resultado").value = (parametro1 * parametro2) / 2;
    } else if (id == area_cuadrado){
        var parametro1;
        if (parametro1.includes(",")){
            parametro1=parametro1.replace(",",".");
        }
        if (isNaN(parametro1)) {
            alert("Se ingreso un valor invalido " + id);
        }
        parametro1=Number(document.getElementById("Lado").value);
        document.getElementById("Resultado").value = parametro1 * parametro1;
    } else if (id == area_circulo){
        var parametro1;
        if (parametro1.includes(",")){
            parametro1=parametro1.replace(",",".");
        }
        if (isNaN(parametro1)) {
            alert("Se ingreso un valor invalido " + id);
        }
        parametro1=Number(document.getElementById("Radio").value);
        document.getElementById("Resultado").value = (parametro1 * parametro1) * Math.PI ;
    } else if (id == area_rectangulo){
        var parametro1, parametro2;
        if (parametro1.includes(",")) {
            parametro1 = parametro1.replace(",", ".");
        }
        if (parametro2.includes(",")) {
            parametro2 = parametro2.replace(",", ".");
        }
        if (isNaN(parametro1)) {
            alert("Se ingreso un valor invalido " + id);
        }
        if (isNaN(parametro2)) {
            alert("Se ingreso un valor invalido " + id);
        }
        parametro1 = Number(document.getElementById("BaseR").value);
        parametro2 = Number(document.getElementById("AlturaR").value);
        document.getElementById("Resultado").value = parametro1 * parametro2;
    }
}
function dibujarCanvas(id){
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var xmax = canvas.width;
    var ymax =canvas.height;
    var margen = 20;
    if (id == metros){
        if (id == area_triangulo){
            ctx.beginPath();
            ctx.moveTo(75,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.closePath();
            ctx.fill();
        } else if (id == area_circulo){
            ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#99338f";
            ctx.fill();
        } else if (id == area_cuadrado){
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0+margen,0+margen,100,100);
        } else if (id == area_rectangulo){
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0+margen,0+margen,100,250);
        }
    } else if (id == centimetros){
        if (id == area_triangulo){
            ctx.beginPath();
            ctx.moveTo(75,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.closePath();
            ctx.fill();
        } else if (id == area_circulo){
            ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#99338f";
            ctx.fill();
        } else if (id == area_cuadrado){
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0+margen,0+margen,100,100);
        } else if (id == area_rectangulo){
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0+margen,0+margen,100,250);
        }
    } else if (id == milimetros){
        if (id == area_triangulo){
            ctx.beginPath();
            ctx.moveTo(75,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.closePath();
            ctx.fill();
        } else if (id == area_circulo){
            ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#99338f";
            ctx.fill();
        } else if (id == area_cuadrado){
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0+margen,0+margen,100,100);
        } else if (id == area_rectangulo){
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0+margen,0+margen,100,250);
        }
    }

}


