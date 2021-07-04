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
    var base, altura, hipotenusa;
    canvas.width = canvas.width;
    base=Base*0.1;
    altura=Altura*0.1;
    hipotenusa=Math.sqrt(base*base+altura*altura);
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(150*base,100);
    ctx.lineTo(150*base, 150*hipotenusa);
    ctx.closePath();
    ctx.fillStyle = "#572f84";
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
    var ctx = canvas.getContext("2d")
    var base, altura;
    var margen=50;
    base=Base*0.1;
    altura=Altura*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#572f84";
    ctx.fillRect(0 + margen, 0 + margen, 100*base, 100*altura);
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
    var radio;
    radio=Radio*0.1;
    canvas.width = canvas.width;
    ctx.arc(xmax / 2, ymax / 2, 20*radio, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#87367e";
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
    var margen = 50;
    var lado;
    lado=Lado*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#87367e";
    ctx.fillRect(0 + margen, 0 + margen, 100*lado, 100*lado);

}


