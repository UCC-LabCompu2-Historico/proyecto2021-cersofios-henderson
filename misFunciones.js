var Posicionx=0;
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
        if (BaseT>0 && AlturaT>0 && !isNaN(BaseT) && !isNaN(AlturaT)){
            document.getElementById("Resultado").value = (BaseT * AlturaT) / 2;
            DibujarTriangulo();
            AnimarTriangulo();
            localStorage.setItem("BaseT", BaseT);
            localStorage.setItem("AlturaT", AlturaT);
        }

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
        DibujarCuadrado();
        AnimarCuadrado();
        localStorage.setItem("Lado", Lado);
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
        DibujarCirculo();
        AnimarCirculo();
        localStorage.setItem("Radio", Radio);
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
        DibujarRectangulo();
        AnimarRectangulo();
        localStorage.setItem("BaseR", BaseR);
        localStorage.setItem("AlturaR", AlturaR);
    }
}
/**
 * Función que permite dibujar un triángulo según la longitud de su Base y Altura
 * @method DibujarTriangulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
Posicionx=0;
function DibujarTriangulo(){
    var Base, Altura;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    var anchoMax;
    Base=localStorage.getItem("BaseT");
    Altura=localStorage.getItem("AlturaT");
    anchoMax=canvas.width;
    ctx.beginPath();
    ctx.moveTo(100+Posicionx, 100);
    ctx.lineTo(Base/2+Posicionx,Altura);
    ctx.lineTo(Base+Posicionx,100);
    ctx.closePath();
    ctx.strokeStyle = "#572f84";
    ctx.stroke();
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
}
/**
 * Función que permite dibujar un rectángulo según la longitud de su Base y Altura
 * @method DibujarRectangulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

function DibujarRectangulo(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    var base, altura;
    var margen=50;
    base=localStorage.getItem("BaseR")*0.1;
    altura=localStorage.getItem("AlturaR")*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#572f84";
    ctx.fillRect(Posicionx, 0 + margen, 100*base, 100*altura);
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
}
/**
 * Función que permite dibujar un círculo según la longitud de su Radio
 * @method DibujarCirculo
 * @param Radio - El radio ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCirculo(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //var xmax = canvas.width;
    var ymax = canvas.height;
    var radio;
    radio=localStorage.getItem("Radio")*0.1;
    canvas.width = canvas.width;
    ctx.arc(Posicionx, ymax / 2, 20*radio, 0, 2 * Math.PI);
    ctx.fillStyle = "#87367e";
    ctx.fill();
    ctx.stroke();
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
    ctx.stroke();

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
    lado=localStorage.getItem("Lado")*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#87367e";
    ctx.fillRect(Posicionx, 0 + margen, 100*lado, 100*lado);
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }

}
/**
 * Función que permite animar un triángulo según la longitud de su Base y Altura
 * @method AnimarTriangulo
 * @return {canvas} dibujo de la figura geométrica
 */
function AnimarTriangulo(){
    setInterval(DibujarTriangulo(),1000);
}
/**
 * Función que permite animar un rectángulo según la longitud de su Base y Altura
 * @method AnimarRectangulo
 * @return {canvas} dibujo de la figura geométrica
 */
function AnimarRectangulo(){
    setInterval(DibujarRectangulo,1000);
}
/**
 * Función que permite animar un círculo según la longitud de su Radio
 * @method AnimarCirculo
 * @return {canvas} dibujo de la figura geométrica
 */
function AnimarCirculo() {
    setInterval(DibujarCirculo, 1000);
}
/**
 * Función que permite animar un cuadrado según la longitud de su Lado
 * @method AnimarCuadrado
 * @return {canvas} dibujo de la figura geométrica
 */
function AnimarCuadrado(){
    setInterval(DibujarCuadrado, 1000);
}

