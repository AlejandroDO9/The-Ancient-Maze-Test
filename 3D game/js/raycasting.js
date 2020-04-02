var canvas;
var ctx;
var FPS = 60;
var jugador;
var FOV = 60;
var medioFOV = this.FOV/2;
const paredColor = '#000000';
const pisoColor = '#999999';
const jugadorColor = '#FFFFFF';
const rojo = '#F00000';
var condicion = false;
var muertePorEspectro = false;
var victoria1 = false;
var animacionLlave = false;
var tiempoAnimacion = 2300;
var llaves = 0;
var monedas = 0;
var tiempo;
var ahora;

//DIMENSIONES DEL CANVAS EN PIXELS
var canvasAncho = 960; //960
var canvasAlto = 600; //600

//OBJETO TILES
var tiles;

//ESCENARIO
var escenario;

//SPRITES
var imgMuertePorEspectro;
var imgLlaveConseguida;
var imgEstatusLlaves;
var imgEstatusMonedas;
//var imgCorrer;
//var imgArriba;
//var imgDerecha;
//var imgInteract;
var imgMoneda;
var imgLlave;
var imgEspectro;
var imgEspectro2;
var imgEnemigo;
var imgJoya;
var imgArma;
var sprites = [];
var zBuffer = [];

//**************************************************************************************
//NIVEL 1
/*
var nivel1 = [
  [1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]*/


var nivel1 = [
  [1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1],
  [1,0,0,0,1,0,1,0,0,0,0,4,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
  [1,4,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1],
  [1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1],
  [1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1],
  [1,0,0,1,1,5,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1],
  [1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,2],
  [1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,3],
  [1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1],
  [1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1],
  [1,0,0,1,0,0,1,1,1,4,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
  [1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
  [1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1],
  [1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,4,1],
  [1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,4],
  [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

//**************************************************************************************
//ENTRADA TECLADO Y MOUSE

/*document.addEventListener('mousedown', function mouseDown(clickD){
  var elementD = canvas;
  var offsetXD = 0, offsetYD = 0
  if (elementD.offsetParent) {
    do {
      offsetXD += elementD.offsetLeft;
      offsetYD += elementD.offsetTop;
    } while ((elementD = elementD.offsetParent));
  }
  clickXD = clickD.pageX - offsetXD;
  clickYD = clickD.pageY - offsetYD;

  if(clickXD <= 160 && clickXD >= 32){
    if(clickYD <= 522 && clickYD >= 458){
      jugador.arriba();
    }
  }
  if(clickXD <= 160 && clickXD >= 32){
    if(clickYD <= 590 && clickYD >= 526){
      jugador.abajo();
    }
  }
  if(clickXD <= 934 && clickXD >= 870){
    if(clickYD <= 590 && clickYD >= 458){
      jugador.derecha();
    }
  }
  if(clickXD <= 869 && clickXD >= 802){
    if(clickYD <= 590 && clickYD >= 458){
      jugador.izquierda();
    }
  }
  if(clickXD <= 614 && clickXD >= 550){
    if(clickYD <= 524 && clickYD >= 460){
      jugador.interactuarD();
    }
  }
  if(clickYD <= 524 && clickYD >= 460){
    if(clickXD <= 386 && clickXD >= 322){
      jugador.correrX();
    }
    if(clickXD <= 454 && clickXD >= 390){
      jugador.correrXSuelta();
    }
  }
  console.log('X: ' + clickXD + '  Y: ' + clickYD);
});

document.addEventListener('mouseup', function mouseUp(clickU){
  var elementU = canvas;
  var offsetXU = 0, offsetYU = 0
  if (elementU.offsetParent) {
    do {
      offsetXU += elementU.offsetLeft;
      offsetYU += elementU.offsetTop;
    } while ((elementU = elementU.offsetParent));
  }
  clickXU = clickU.pageX - offsetXU;
  clickYU = clickU.pageY - offsetYU;

  if(clickXU <= 160 && clickXU >= 32){
    if(clickYU <= 522 && clickYU >= 458){
      jugador.avanzaSuelta();
    }
  }
  if(clickXU <= 160 && clickXU >= 32){
    if(clickYU <= 590 && clickYU >= 526){
      jugador.avanzaSuelta();
    }
  }
  if(clickXU <= 934 && clickXU >= 870){
    if(clickYU <= 590 && clickYU >= 458){
      jugador.giraSuelta();
    }
  }
  if(clickXU <= 866 && clickXU >= 802){
    if(clickYU <= 590 && clickYU >= 458){
      jugador.giraSuelta();
    }
  }
  console.log('X: ' + clickXU + '  Y: ' + clickYU);
});*/

document.addEventListener('keydown', function(tecla){
  //console.log('presiona: ' + tecla.keyCode);
  switch (tecla.keyCode) {
    case 38: //arriba
      jugador.arriba();
    break;

    case 40: //abajo
      jugador.abajo();
    break;

    case 37: //izquierda
      jugador.izquierda();
    break;

    case 39: //derecha
      jugador.derecha();
    break;

    case 65: //a
      jugador.ataqueA();
    break;

    case 68: //d
      jugador.interactuarD();
    break;

    case 83: //s
      jugador.ataqueS();
    break;

    case 90: //z
      jugador.pocionZ();
    break;

    case 88: //x
      jugador.correrX();
    break;

    case 32: //espacio
      jugador.cambiarArmaEspacio();
    break;

    case 13: //enter
      jugador.menuEnter();
    break;
  }
});

document.addEventListener('keyup', function(tecla){
  switch (tecla.keyCode) {
    case 38: //arriba
      jugador.avanzaSuelta();
    break;

    case 40: //abajo
      jugador.avanzaSuelta();
    break;

    case 37: //izquierda
      jugador.giraSuelta();
    break;

    case 39: //derecha
      jugador.giraSuelta();
    break;

    case 83: //s
      jugador.ataqueSSuelta();
    break;

    case 88: //x
      jugador.correrXSuelta();
    break;
  }
});
//**************************************************************************************
//SUELO Y TECHO
function sueloTecho(){
  this.ctx.fillStyle = '#00002F';
  this.ctx.fillRect(0,0,escenario.anchoC,(escenario.altoC/2));

  this.ctx.fillStyle = '#1B1209';
  this.ctx.fillRect(0,escenario.altoC/2,escenario.anchoC,escenario.altoC);
}
//**************************************************************************************
//ESTATUS DE LAS LLAVES, LAS MONEDAS Y LAS POCIONES
function estatus(){
  ctx.imageSmoothingEnabled = false;
  this.ctx.drawImage(imgEstatusLlaves, 0, (llaves) * 64, 64, 64, 880, 10, 64, 64);
  this.ctx.drawImage(imgEstatusMonedas, 0, (monedas) * 64, 64, 64, 880, 84, 64, 64);

  /*ctx.drawImage(imgArriba,0,0,132,132,32,458,132,132);
  ctx.drawImage(imgDerecha,0,0,132,132,802,458,132,132);
  ctx.drawImage(imgCorrer,0,0,132,64,322,460,132,64);
  ctx.drawImage(imgInteract,0,0,64,64,550,460,64,64);*/
}
//**************************************************************************************
//FUNCION PUNTO MEDIO DE TILE
function mapaX(coordenadaX){
  this.coordenadaX = coordenadaX;
  return ((this.coordenadaX * escenario.anchoT) + (escenario.anchoT/2));
}
function mapaY(coordenadaY){
  this.coordenadaY = coordenadaY;
  return ((this.coordenadaY * escenario.altoT) + (escenario.altoT/2));
}
//**************************************************************************************
//NORMALIZACION DE ANGULOS
function normalizaAngulo(angulo){
  angulo = angulo % (2 * Math.PI);

  if(angulo < 0){
    angulo = angulo + (2 * Math.PI);
  }

  return angulo;
}
//**************************************************************************************
//CALCULAR DISTANCIA ENTRE DOS PUNTOS
function distanciaEntrePuntos(x1,y1,x2,y2){
  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}
//**************************************************************************************
//CONVERSION A RADIANES
function convierteEnRadianes(angulo){
  angulo = angulo * (Math.PI/180);
  return angulo;
}
//**************************************************************************************
//VARIABLES PARA LOS SPRITES
var ray;
//**************************************************************************************
//COMPRUEBA LA VICTORIA1
function compruebaVictoria1(x,y,angulo){
  this.x = x;
  this.y = y;
  this.angulo = angulo;
  if((this.x<mapaX(39)&&this.x>mapaX(36))){
    if((this.y>mapaY(12)&&this.y<mapaY(14))){
      if((this.angulo>=Math.PI*1.8684790319 || this.angulo<=Math.PI*0.13687325105)){
        if(llaves >= 1){
          victoria1 = true;
          llaves -= 1;
        }
      }
    }
  }
}
//**************************************************************************************
//INTERACTUA CON OBJETO
function interactuar(){
  ahora = Date.now();
  for(a=0; a<sprites.length; a++){
    if(sprites[a].visible==true && sprites[a].distancia<=Math.sqrt(((2*escenario.anchoT)*(2*escenario.anchoT))+((2*escenario.altoT)*(2*escenario.altoT)))){
      switch (sprites[a].ID) {
        case 'llave':
          llaves += 1;
          sprites[a].x = 3;
          sprites[a].y = 0;
          animacionLlave = true;
          sprites[a].visible = false;
          //console.log(ahora);
        break;
        case 'moneda':
          monedas += 1;
          sprites[a].x = 3;
          sprites[a].y = 0;
          sprites[a].visible = false;
        break;
      }
    }
  }
  //console.log('estas interactuando con: ' + sprites[spriteVisible].ID);
}
//**************************************************************************************
//CLASE SPRITES
const FOVradianes = convierteEnRadianes(FOV);
const FOV_medio = convierteEnRadianes(medioFOV);
class Sprite{
  constructor(x,y,imagen,ID){
    this.ID = ID;
    this.x = x;
    this.y = y;
    this.imagen = imagen;
    this.distancia = 0;
    this.angulo = 0;
    this.visible = false;
    //console.log('contruido');
  }

  calculaAngulo(){
    var vectX = this.x - jugador.x;
    var vectY = this.y - jugador.y;
    var anguloJugadorObjeto = Math.atan2(vectY, vectX);
    var diferenciaAngulo = jugador.anguloRotacion - anguloJugadorObjeto;
    //
    if(diferenciaAngulo < (-1 * Math.PI)){
      diferenciaAngulo += 2.0 * Math.PI;
    }
    if(diferenciaAngulo > Math.PI){
      diferenciaAngulo -= 2.0 * Math.PI;
    }
    diferenciaAngulo = Math.abs(diferenciaAngulo);
    if(diferenciaAngulo < FOV_medio){
      this.visible = true;
    }
    else{
      this.visible = false;
    }
  //  console.log('angulo ' + this.visible +' ' + FOV_medio );
  }

  calculaDistancia(){
    this.distancia = distanciaEntrePuntos(jugador.x, jugador.y, this.x, this.y);
    //console.log(this.distancia);
  }

  actualizaDatos(){
    this.calculaAngulo();
    this.calculaDistancia();
    //console.log('act');
  }

  dibuja(){
    this.actualizaDatos();
    if(this.visible == true){
      var altoTile = canvasAlto;
      var distanciaPlanoProyeccion = (canvasAncho/2) / Math.tan(FOV/2);
      var alturaSprite = (altoTile/this.distancia) * distanciaPlanoProyeccion;
      //SE CALCULA DONDE EMPIEZA Y DONDE ACABA LA LINEA, CENTRANDOLA EN LA PANTALLA (EN VERTICAL)
      var y0 = parseInt(canvasAlto/2) - parseInt(alturaSprite/2);
      var y1 = y0 + alturaSprite;
      var altoTextura = 64;
      var anchoTextura = 64;
      var alturaTextura = y0 - y1;
      var anchuraTextura = alturaTextura;
      var viewDist = canvasAncho;
      var dx = this.x - jugador.x;
      var dy = this.y - jugador.y;
      var spriteAngle = Math.atan2(dy,dx) - jugador.anguloRotacion;
      var x0 = Math.tan(spriteAngle) * viewDist;
      var x = (canvasAncho/2 + x0 - anchuraTextura/2);
      ctx.imageSmoothingEnabled = false;
      //PROPORCION DE ANCHURA DE X (SEGUN NOS ACERQUEMOS, SE VERAN MAS ANCHAS LAS LINEAS VERTICALES)
      var anchuraColumna = alturaTextura/altoTextura;
      //SE DIBUJA EL SPRITE COLUMNA A COLUMNA PARA EVITAR QUE SE VEA TRAS UN MURO
      //SE HACE CON DOS BUCLES PARA ASEGURAR QUE LO HAGA LINEA POR LINEA Y NO TIRAS DE LA IMAGEN
      for(let i=0; i<anchoTextura; i++){
        for(let j=0; j<anchuraColumna; j++){
          //console.log( i + ' ' + j);
          var x1 = parseInt(x+((i-1)*anchuraColumna)+j);
          //SE COMPARA LA LINEA ACTUAL CON LA DISTANCIA DEL ZBUFFER PARA DECIDIR SI SE DIBUJA
          if(zBuffer[x1] > this.distancia){
            ctx.drawImage(this.imagen,i,0,1,altoTextura-1,x1,y1,1,alturaTextura);
          }
        }
      }
    }
  }
}
//**************************************************************************************
//CLASE RAYOS
class Rayo{
  constructor(con,escenario,x,y,anguloJugador,incrementoAngulo,columna){
    this.ctx = con;
    this.escenario = escenario;
    this.x = x;
    this.y = y;
    this.angulo = anguloJugador;
    this.incrementoAngulo = incrementoAngulo;
    this.columna = columna;
    this.distancia = 0;

    this.wallHitX = 0;
    this.wallHitY = 0;

    this.wallHitXHorizontal = 0;
    this.wallHitYHorizontal = 0;

    this.wallHitXVertical = 0;
    this.wallHitYVertical = 0;

    this.pixelTextura = 0;
    this.idTextura = 0;
  }

  setAngulo(angulo){
    this.anguloJugador = angulo;
    this.angulo = normalizaAngulo(angulo + this.incrementoAngulo);
  }

  cast(){
    this.xIntercept = 0;
    this.yIntercept = 0;
    this.xStep = 0;
    this.yStep = 0;

    //DIRECCION DE LA VISTA
    this.arriba = true;
    this.derecha = true;

    if(this.angulo < Math.PI){
      this.arriba = false;
    }
    if(this.angulo > Math.PI/2 && this.angulo < 3*Math.PI/2){
      this.derecha = false;
    }

    //COLISIONES:
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //HORIZONTAL
    var choqueHorizontal = false;
    //SE BUSCA LA PRIMERA INTERSECCION
    this.yIntercept = Math.floor(this.y/this.escenario.altoT) * this.escenario.altoT;
    //SI APUNTA HACIA ABAJO, SE INCREMENTA UN TILE
    if(!this.arriba){
      this.yIntercept += this.escenario.altoT;
    }
    var adyacente = (this.yIntercept - this.y) / Math.tan(this.angulo);
    this.xIntercept = this.x + adyacente;
    //SE CALCULA LA DISTANCIA DE LOS PASOS
    this.yStep = escenario.altoT;
    this.xStep = this.yStep / Math.tan(this.angulo);
    //SI APUNTA HACIA ARRIBA
    if(this.arriba){
      this.yStep = -this.yStep;
    }
    //SE COMPRUEBA QUE EL PASO X ES COHERENTE
    if((!this.derecha && this.xStep>0)||(this.derecha && this.xStep<0)){
      this.xStep = -this.xStep;
    }
    var siguienteXHorizontal = this.xIntercept;
    var siguienteYHorizontal = this.yIntercept;
    //SI APUNTA HACIA ARRIBA SE RESTA UN PIXEL PARA EVITAR COLISION FALSA
    if(this.arriba){
      siguienteYHorizontal--;
    }
    //BUCLE PARA DETECTAR PUNTO DE COLISION
    while(!choqueHorizontal){
      //SE OBTIENE LA CASILLA REDONDEANDO PARA ABAJO
      var casillaX = parseInt(siguienteXHorizontal/this.escenario.anchoT);
      var casillaY = parseInt(siguienteYHorizontal/this.escenario.altoT);
      if(this.escenario.colision(casillaX,casillaY)){
        choqueHorizontal = true;
        this.wallHitXHorizontal = siguienteXHorizontal;
        this.wallHitYHorizontal = siguienteYHorizontal;
      }
      else{
        siguienteXHorizontal += this.xStep;
        siguienteYHorizontal += this.yStep;
      }
    }
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //VERTICAL
    var choqueVertical = false;
    //SE BUSCA LA PRIMERA INTERSECCION
    this.xIntercept = Math.floor(this.x/this.escenario.anchoT)*this.escenario.anchoT;
    //SI APUNTA A LA DERECHA SE AUMENTA UN TILE
    if(this.derecha){
      this.xIntercept += this.escenario.anchoT;
    }
    //SE LE SUMA EL CATETO OPUESTO
    var opuesto = (this.xIntercept - this.x) * Math.tan(this.angulo);
    this.yIntercept = this.y + opuesto;
    //SE CALCULA LA DISTANCIA DE CADA PASO
    this.xStep = this.escenario.anchoT;
    //SI VA A LA IZQUIERDA SE INVIERTE
    if(!this.derecha){
      this.xStep = -this.xStep;
    }
    //PASO EN Y
    this.yStep = this.escenario.anchoT*Math.tan(this.angulo);
    //SI VA HACIA ARRIBA SE INVIERTE
    if((this.arriba && this.yStep > 0) || (!this.arriba && this.yStep < 0)){
      this.yStep = -this.yStep;
    }
    //SI VA HACIA LA IZQUIERDA SE LE RESTA UN PIXEL PARA EVITAR FALSO TILE
    var siguienteXVertical = this.xIntercept;
    var siguienteYVertical = this.yIntercept;
    if(!this.derecha){
      siguienteXVertical--;
    }
    //BUCLE PARA DETECTAR COLISION
    while(!choqueVertical && siguienteXVertical >= 0 && siguienteYVertical >= 0 && siguienteXVertical < canvasAncho && siguienteYVertical < canvasAlto){
      var casillaX = parseInt(siguienteXVertical/this.escenario.anchoT);
      var casillaY = parseInt(siguienteYVertical/this.escenario.altoT);
      if(this.escenario.colision(casillaX, casillaY)){
        choqueVertical = true;
        this.wallHitXVertical = siguienteXVertical;
        this.wallHitYVertical = siguienteYVertical;
      }
      else{
        siguienteXVertical += this.xStep;
        siguienteYVertical += this.yStep;
      }
    }
    //SE COMPRUEBA SI LA COLISION ES HORIZONTAL O VERTICAL
    var distanciaHorizontal = 9999;
    var distanciaVertical = 9999;
    if(choqueHorizontal){
      distanciaHorizontal = distanciaEntrePuntos(this.x, this.y, this.wallHitXHorizontal, this.wallHitYHorizontal);
    }
    if(choqueVertical){
      distanciaVertical = distanciaEntrePuntos(this.x, this.y, this.wallHitXVertical, this.wallHitYVertical);
    }
    if(distanciaHorizontal<distanciaVertical){
      this.wallHitX = this.wallHitXHorizontal;
      this.wallHitY = this.wallHitYHorizontal;
      this.distancia = distanciaHorizontal;
      var casilla = parseInt(this.wallHitX/this.escenario.anchoT);
      this.pixelTextura = this.wallHitX - (casilla * this.escenario.anchoT);
    }
    else{
      this.wallHitX = this.wallHitXVertical;
      this.wallHitY = this.wallHitYVertical;
      this.distancia = distanciaVertical;
      var casilla = parseInt(this.wallHitY/this.escenario.altoT);
      this.pixelTextura = this.wallHitY - (casilla * this.escenario.altoT);
    }
    this.idTextura = this.escenario.tile(this.wallHitX,this.wallHitY);
    //CORRECCION OJO DE PEZ
    this.distancia = this.distancia * Math.cos(this.anguloJugador - this.angulo);
    //SE GUARDA LA INFO EN EL ZBUFFER
    zBuffer[this.columna] = this.distancia;
  }

  renderPared(){
    var altoTile = canvasAlto; //600
    var distanciaPlanoProyeccion = (canvasAncho/2)/Math.tan(medioFOV);
    var alturaMuro = (altoTile/this.distancia) * distanciaPlanoProyeccion;
    //SE CALCULA DONDE EMPIEZA Y DONDE ACABA LA LINEA
    var y0 = parseInt(canvasAlto/2) - parseInt(alturaMuro/2);
    var y1 = y0 + alturaMuro;
    var x = this.columna;
    //SE DIBUJA LA IMAGEN
    var altoTextura = 64;
    var alturaImagen = y0 - y1;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(
      tiles,                                          //IMAGEN PNG
      this.pixelTextura,                              //X CLIPPING
      (this.idTextura - 1) * altoTextura,             //Y CLIPPING
      1,                                              //ANCHO CLIPPING
      64,                                             //ALTO CLIPPING
      this.columna,                                   //X DONDE EMPIEZA A DIBUJAR
      y1,                                             //Y DONDE EMPIEZA A DIBUJAR
      1,                                              //ANCHURA REAL DE 1 PX
      alturaImagen
    );
    //SE DIBUJA LA COLUMNA (LINEA)
    //this.ctx.beginPath();
    //this.ctx.moveTo(x, y0);
    //this.ctx.lineTo(x, y1);
    //this.ctx.strokeStyle = '#805500';
    //this.ctx.stroke();
  }

    dibuja(){
    this.cast();
    this.renderPared();

    //MOSTRAR LINEA RAYO
    //var xDestino = this.wallHitX;
    //var yDestino = this.wallHitY;

    //this.ctx.beginPath();
    //this.ctx.moveTo(this.x, this.y);
    //this.ctx.lineTo(xDestino, yDestino);
    //this.ctx.strokeStyle = rojo;
    //this.ctx.stroke();
  }
}

//**************************************************************************************
//CLASE ESCENARIO
class Level {
  constructor(can,con,arr){
    this.canvas = can;
    this.ctx = con;
    this.matriz = arr;

    //DIMENSIONES DE LA MATRIZ
    this.altoM = this.matriz.length;
    this.anchoM = this.matriz[0].length;

    //DIMENSIONES REALES DEL CANVAS
    this.altoC = this.canvas.height;
    this.anchoC = this.canvas.width;

    //DIMENSIONES DE LOS TILES
    this.altoT = parseInt(this.altoC/this.altoM);
    this.anchoT = parseInt(this.anchoC/this.anchoM);
  }

  //COLISIONES
  colision(x,y){
    var choca = false;
    if(this.matriz[y][x]!=0){
      choca = true;
    }
    return choca;
  }

  tile(x,y){
    var casillaX = parseInt(x/this.anchoT);
    var casillaY = parseInt(y/this.altoT);
    return(this.matriz[casillaY][casillaX]);
  }

  dibuja(){
    var color;

    for (var y = 0; y < this.altoM; y++) {
      for (var x = 0; x < this.anchoM; x++) {
        if(this.matriz[y][x]==1){
          color = paredColor;
        }
        else {
          color = pisoColor;
        }
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.anchoT, y * this.altoT, this.anchoT, this.altoT);
      }
    }
  }
}

//**************************************************************************************
//CLASE JUGADOR

class Player{
  constructor(con,escenario,x,y){
    this.ctx = con;
    this.escenario = escenario;
    this.x = x;
    this.y = y;
    this.avanza = 0; // 0 = PARADO, 1 = ADELANTE, -1 = ATRAS
    this.gira = 0; // 1 = DERECHA, -1 = IZQUIERDA
    this.anguloRotacion = Math.PI/2;
    this.velMov = 3; //PIXELS
    this.velGiro = 5 * (Math.PI / 180); //GRADOS

    //RAYOS
    this.numRayos = canvasAncho;
    this.rayos=[];
    //CALCULAR EL ANGULO DE CADA RAYO
    var incrementoAngulo = convierteEnRadianes(FOV/this.numRayos);
    var anguloInicial = convierteEnRadianes(this.anguloRotacion - medioFOV);
    var anguloRayo = anguloInicial;
    //SE CREAN LOS RAYOS
    for(let i = 0; i<this.numRayos; i++){
      this.rayos[i] = new Rayo(this.ctx, this.escenario, this.x, this.y, this.anguloRotacion, anguloRayo, i);
      anguloRayo += incrementoAngulo;
    }
  }

  arriba(){
    this.avanza = 1;
  }

  abajo(){
    this.avanza = -1;
  }

  izquierda(){
    this.gira = -1;
  }

  derecha(){
    this.gira = 1;
  }

  ataqueA(){

  }

  ataqueS(){

  }

  interactuarD(){
    compruebaVictoria1(this.x,this.y,this.anguloRotacion);
    interactuar();
  }

  pocionZ(){

  }

  correrX(){
    this.velMov = 10;
    this.velGiro = 13 * (Math.PI / 180);
  }

  cambiarArmaEspacio(){

  }

  avanzaSuelta(){
    this.avanza = 0;
  }

  giraSuelta(){
    this.gira = 0;
  }

  ataqueSSuelta(){

  }

  correrXSuelta(){
    this.velMov = 3;
    this.velGiro = 5* (Math.PI / 180);
  }

  menuEnter(){

  }

    //COLISIONES
    colision(x,y){
      var choca = false;

      //CALCULO DE LA CASILLA DEL JUGADOR
      var casillaX = parseInt(x/this.escenario.anchoT);
      var casillaY = parseInt(y/this.escenario.altoT);

      if(this.escenario.colision(casillaX,casillaY)){
        choca = true;
      }

      return choca;
    }

  //PARA MOVERSE (TRIGONOMETRIA)
  actualiza(){
    //AVANZA
    var nuevaX = this.x + (this.avanza * Math.cos(this.anguloRotacion) * this.velMov);
    var nuevaY = this.y + (this.avanza * Math.sin(this.anguloRotacion) * this.velMov);

    if(!this.colision(nuevaX,nuevaY)){
      this.x = nuevaX;
      this.y = nuevaY;
    }

    //GIRO
    this.anguloRotacion += this.gira * this.velGiro;
    this.anguloRotacion = normalizaAngulo(this.anguloRotacion);

    //SE ACTUALIZA EL ANGULO DEL RAYO
    for(let i = 0; i<this.numRayos; i++){
      this.rayos[i].x = this.x;
      this.rayos[i].y = this.y;
      this.rayos[i].setAngulo(this.anguloRotacion);
    }
  }

  dibuja(){
    this.actualiza();

    //SE DIBUJAN LOS RAYOS
    for(let i = 0; i<this.numRayos; i++){
      this.rayos[i].dibuja();
    }

    //this.ctx.fillStyle = jugadorColor;
    //this.ctx.fillRect(this.x-3, this.y-3, 6, 6);

    //LINEA DE DIRECCION
    //var xDestino = this.x + Math.cos(this.anguloRotacion) * 40;
    //var yDestino = this.y + Math.sin(this.anguloRotacion) * 40;

    //this.ctx.beginPath();
    //this.ctx.moveTo(this.x, this.y);
    //this.ctx.lineTo(xDestino, yDestino);
    //this.ctx.strokeStyle = '#FFFFFF';
    //this.ctx.stroke();
  }
}


//**************************************************************************************
function renderSprites(){
  //ALGORITMO DEL PINTOR
  sprites.sort(function(obj1, obj2){
    return obj2.distancia - obj1.distancia;
  });
  //SE DIBUJAN LOS SPRITES UNO POR UNO
  for(a=0; a<sprites.length; a++){
    sprites[a].dibuja();
    //console.log(sprites[a]);
  }
}

function inicializaSprites(){
  //SE CARGAN LOS SPRITES
  imgMoneda = new Image();
  imgMoneda.src = 'img/moneda.png';
  imgLlave = new Image();
  imgLlave.src = 'img/llave.png';
  imgEspectro = new Image();
  imgEspectro.src = 'img/espectro.png';
  //SE CREAN LOS OBJETOS PARA LAS IMAGENES
  sprites[0] = new Sprite(mapaX(38),mapaY(21),imgLlave, 'llave');
  sprites[1] = new Sprite(mapaX(15),mapaY(19),imgMoneda, 'moneda');
  sprites[2] = new Sprite(mapaX(10),mapaY(10),imgMoneda, 'moneda');
}

function inicializa(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  condicion = false;
  muertePorEspectro = false;
  victoria1 = false;
  llaves = 0;

  //MUERTE POR ESPECTRO
  imgMuertePorEspectro = new Image();
  imgMuertePorEspectro.src = 'img/muerteporespectro.png';

  //VICTORIA 1
  imgVictoria1 = new Image();
  imgVictoria1.src = 'img/victoria1.png';

  //IMAGEN LLAVE CONSEGUIDA
  imgLlaveConseguida = new Image();
  imgLlaveConseguida.src = 'img/consiguellave.png';

  //ESTATUS LLAVES, MONEDAS Y POCIONES
  imgEstatusLlaves = new Image();
  imgEstatusLlaves.src = 'img/estatusllaves.png';
  imgEstatusMonedas = new Image();
  imgEstatusMonedas.src = 'img/estatusmonedas.png';

  /*imgCorrer = new Image();
  imgCorrer.src = 'img/correr.png';
  imgArriba = new Image();
  imgArriba.src = 'img/arriba.png';
  imgDerecha = new Image();
  imgDerecha.src = 'img/derecha.png';
  imgInteract = new Image();
  imgInteract.src = 'img/interactuar.png';*/

  //CARGAMOS LA IMAGEN DE LOS TILES
  tiles = new Image();
  tiles.src = 'img/walls.png';

  //MODIFICAMOS EL TAMAÑO DEL CANVAS
  canvas.width = canvasAncho;
  canvas.height = canvasAlto;

  //ESCENARIO
  escenario = new Level(canvas,ctx,nivel1);

  //JUGADOR
  jugador = new Player(ctx, escenario, mapaX(1), mapaY(1));                   //INICIO
  //jugador = new Player(ctx, escenario, mapaX(37), mapaY(8));                //PUERTA
  //jugador = new Player(ctx, escenario, mapaX(33), mapaY(22));               //LLAVE

  //INICIALIZAMOS SPRITES
  inicializaSprites();

  //INICIAMOS EL BUCLE PRINCIPAL DEL JUEGO
  setInterval(function(){principal();},1000/FPS);
}

function borraCanvas(){
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

function principal(){
  if(muertePorEspectro==false && victoria1==false){
    borraCanvas();
    //if modo == 0
    //escenario.dibuja();
    //if modo == 1
    sueloTecho();
    jugador.dibuja();
    renderSprites();
    estatus();
    tiempo = Date.now();
    if(animacionLlave==true){
      if(tiempo <= ahora + tiempoAnimacion){
      //var uu = ahora + tiempoAnimacion;
        //console.log(tiempo + ' < ' + uu);
        ctx.drawImage(imgLlaveConseguida,0,0,canvasAncho,canvasAlto,0,0,canvasAncho,canvasAlto);
      }
      else{
        animacionLlave = false;
      }
    }
    //console.log('tiempo: ' + tiempo);
    //console.log('Tile x = ' + parseInt(jugador.x/escenario.anchoT) + '  Tile y = ' + parseInt(jugador.y/escenario.altoT) + '  Angulo = ' + jugador.anguloRotacion);
  }
  if(muertePorEspectro==true && victoria1==false){
    ctx.drawImage(imgMuertePorEspectro,0,0,canvasAncho,canvasAlto,0,0,canvasAncho,canvasAlto);
  }
  if(victoria1==true && muertePorEspectro==false){
    ctx.drawImage(imgVictoria1,0,0,canvasAncho,canvasAlto,0,0,canvasAncho,canvasAlto);
  }

  if((jugador.x<mapaX(6)&&jugador.x>mapaX(4))&&(jugador.y>mapaY(6.5)&&jugador.y<mapaY(7))){
    if(condicion == false){
      condicion = true;
      sprites[3]= new Sprite(mapaX(5),mapaY(4),imgEspectro, 'espectro');
    }
  }
  if(condicion == true && (jugador.x<mapaX(6)&&jugador.x>mapaX(4))&&(jugador.y>mapaY(3)&&jugador.y<mapaY(6)) && sprites[3].visible==true){
    muertePorEspectro = true;
  }
}
