/**
 * Función que permite mostrar u ocultar div según la elección de los radio button
 * @method mostrar_ocultar
 * @param {string} valor - El valor de los radio button (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @return
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
/**
 * Función que permite calcular el área de las figuras (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @method CalculodeArea
 * @return {number} Resultado del Área
 */

function CalculodeArea() {
    var BaseT, AlturaT, Lado, Radio, BaseR, AlturaR;
    BaseT = document.getElementById("BaseT").value;
    AlturaT = document.getElementById("AlturaT").value;
    Lado = document.getElementById("Lado").value;
    Radio = document.getElementById("Radio").value;
    BaseR = document.getElementById("BaseR").value;
    AlturaR = document.getElementById("AlturaR").value;

    if (document.getElementById("triangulo").checked) {

        if (BaseT.includes(",")) {
            BaseT = BaseT.replace(",", ".");
        }
        if (AlturaT.includes(",")) {
            AlturaT = AlturaT.replace(",", ".");
        }
        if(BaseT<0){
            alert("Se ingreso un valor incorrecto en Base del Triángulo ");
        }
        if(AlturaT<0){
            alert("Se ingreso un valor incorrecto en Altura del Triángulo ");
        }
        if (isNaN(BaseT)) {
            alert("Se ingreso un valor incorrecto en Base del Triángulo ");
        }
        if (isNaN(AlturaT)) {
            alert("Se ingreso un valor incorrecto en Altura del Triángulo ");
        }

        document.getElementById("Resultado").value = (BaseT * AlturaT) / 2;
    } else if (document.getElementById("cuadrado").checked) {
        if (Lado.includes(",")) {
            Lado = Lado.replace(",", ".");
        }
        if(Lado<0){
            alert("Se ingreso un valor incorrecto en el Lado del Cuadrado ");
        }
        if (isNaN(Lado)) {
            alert("Se ingreso un valor incorrecto en el Lado del Cuadrado ");
        }
        document.getElementById("Resultado").value = Lado * Lado;
    } else if (document.getElementById("circulo").checked) {
        if (Radio.includes(",")) {
            Radio = Radio.replace(",", ".");
        }
        if(Radio<0){
            alert("Se ingreso un valor incorrecto en el Radio del Círculo ");
        }
        if (isNaN(Radio)) {
            alert("Se ingreso un valor incorrecto en el Radio del Círculo ");
        }
        document.getElementById("Resultado").value = (Radio * Radio) * Math.PI;
    } else if (document.getElementById("rectangulo").checked) {

        if (BaseR.includes(",")) {
            BaseR = BaseR.replace(",", ".");
        }
        if (AlturaR.includes(",")) {
            AlturaR = AlturaR.replace(",", ".");
        }
        if(BaseR<0){
            alert("Se ingreso un valor incorrecto en Base del Rectángulo ");
        }
        if(AlturaR<0){
            alert("Se ingreso un valor incorrecto en Altura del Rectángulo ");
        }
        if (isNaN(BaseR)) {
            alert("Se ingreso un valor incorrecto en la Base del Rectángulo ");
        }
        if (isNaN(AlturaR)) {
            alert("Se ingreso un valor incorrecto en la Altura del Rectángulo ");
        }
        document.getElementById("Resultado").value = AlturaR * BaseR;
    }
}
/**
 * Función que permite dibujar las figuras geométricas según su Unidad de Medida
 * @method dibujarCanvas
 * @return {canvas} dibujo de la figura geométrica
 */
function dibujarCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var xmax = canvas.width;
    var ymax = canvas.height;
    var margen = 20;
    if (document.getElementById("metros").checked) {
        if (document.getElementById("triangulo").checked) {
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.closePath();
            ctx.fill();
        } else if (document.getElementById("circulo").checked) {
            ctx.arc(xmax / 2, ymax / 2, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#99338f";
            ctx.fill();
        } else if (document.getElementById("cuadrado").checked) {
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0 + margen, 0 + margen, 100, 100);
        } else if (document.getElementById("rectangulo").checked) {
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0 + margen, 0 + margen, 100, 250);
        }
    } else if (document.getElementById("centimetros").checked) {
        if (document.getElementById("triangulo").checked) {
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.closePath();
            ctx.fill();
        } else if (document.getElementById("circulo").checked) {
            ctx.arc(xmax / 2, ymax / 2, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#99338f";
            ctx.fill();
        } else if (document.getElementById("cuadrado").checked) {
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0 + margen, 0 + margen, 100, 100);
        } else if (document.getElementById("rectangulo").checked) {
            ctx.fillStyle = "#566bb6";
            ctx.fillRect(0 + margen, 0 + margen, 100, 250);
        }
    } else if (document.getElementById("milimetros").checked) {
        if (document.getElementById("triangulo").checked) {
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.closePath();
            ctx.fill();
        } else if (document.getElementById("circulo").checked) {
            ctx.arc(xmax / 2, ymax / 2, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#999999";
            ctx.fill();
        } else if (document.getElementById("cuadrado").checked) {
            ctx.fillStyle = "#999999";
            ctx.fillRect(0 + margen, 0 + margen, 100, 100);
        } else if (document.getElementById("rectangulo").checked) {
            ctx.fillStyle = "#999999";
            ctx.fillRect(0 + margen, 0 + margen, 100, 250);
        }
    }
}


