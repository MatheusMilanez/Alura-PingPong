
//Variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 13;
let raio = diametroBolinha / 2;

//variaveis da velocidade 
let velocidadeX = 6;
let velocidadeY = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//Placar

let meusPontos = 0;
let pontosDoOponente = 0;


//variaveis da raqueteDoOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
   raquetada = loadSound("raquetada.mp3");
   ponto = loadSound("ponto.mp3");
   trilha = loadSound("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(2);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  //verificarColisaoRaquete();
  verificaColisaoRaqueteBiblioteca(xRaquete , yRaquete);
  verificaColisaoRaqueteBiblioteca(xRaqueteOponente , yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha , yBolinha ,diametroBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}

function verificaColisaoBorda(){
    if(xBolinha + raio > width || xBolinha - raio< 0){
     velocidadeX *= -1;
     }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeY *= -1;
     }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}



function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
     yRaquete -= 10;
     }
   if(keyIsDown(DOWN_ARROW)){
     yRaquete += 10;
     }
  
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
     yRaqueteOponente -= 10;
     }
   if(keyIsDown(83)){
     yRaqueteOponente += 10;
     }

}

function verificarColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
     velocidadeX *= -1;
     raquetada.play();
     }
}

function verificaColisaoRaqueteBiblioteca(x , y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu){
      velocidadeX *= -1;
      raquetada.play();
      }
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosDoOponente,470,26);
}

function marcaPonto(){
  if(xBolinha > 590){
     meusPontos += 1;
     ponto.play();
     }
  
  if(xBolinha < 10){
     pontosDoOponente += 1;
    ponto.play();
     }
}