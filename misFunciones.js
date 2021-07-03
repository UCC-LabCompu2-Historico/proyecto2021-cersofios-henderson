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
        DibujarTriangulo(BaseT, AlturaT);
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
        DibujarCuadrado(Lado);
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
        DibujarCirculo(Radio);
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
        DibujarRectangulo(BaseR, AlturaR);
    }
}
/**
 * Función que permite dibujar un triángulo según la longitud de su Base y Altura
 * @method DibujarTriangulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

function DibujarTriangulo(Base, Altura){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var variable;
    variable=(Base*Altura)/10;
    ctx.beginPath();
    ctx.moveTo(50*variable,50*variable);
    ctx.lineTo(50*variable, 100*variable);
    ctx.lineTo(150*variable, 100*variable);
    ctx.closePath();
    ctx.fill();
}
/**
 * Función que permite dibujar un rectángulo según la longitud de su Base y Altura
 * @method DibujarRectangulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarRectangulo(Base, Altura){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");;
    var margen = 20;
    ctx.fillStyle = "#999999";
    ctx.fillRect(0 + margen, 0 + margen, 100, 250);

}
/**
 * Función que permite dibujar un círculo según la longitud de su Radio
 * @method DibujarCirculo
 * @param Radio - El radio ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCirculo(Radio){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var xmax = canvas.width;
    var ymax = canvas.height;
    ctx.arc(xmax / 2, ymax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#99338f";
    ctx.fill();

}
/**
 * Función que permite dibujar un cuadrado según la longitud de su Lado
 * @method DibujarCuadrado
 * @param Lado - El lado ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCuadrado(Lado){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var margen = 20;
    ctx.fillStyle = "#566bb6";
    ctx.fillRect(0 + margen, 0 + margen, 100, 100);

}


