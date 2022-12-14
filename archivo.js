








function dibujar(){


var canvas = document.getElementById('miCanvas');
var contexto = canvas.getContext('2d');
var gradienteLineal = contexto.createLinearGradient(0,0,0,230); 
  gradienteLineal.addColorStop(0.1, 'rgb(7, 118, 188)'); // azul
  gradienteLineal.addColorStop(0.6, 'rgb(203, 239, 245)'); // azul claro
  
  contexto.fillStyle = gradienteLineal;
  contexto.fillRect (0, 0, 1000, 500);
// gradiente lineal vertical  para el suelo
  var gradienteLineal = contexto.createLinearGradient(0,230,0,350); 
  gradienteLineal.addColorStop(0, 'rgb(5, 78, 5)'); // verde oscuro
  gradienteLineal.addColorStop(0.4, 'rgb(70, 163, 42)'); // verde claro
  gradienteLineal.addColorStop(0.9, 'white');
  contexto.fillStyle = gradienteLineal;
  contexto.fillRect (0, 240, 1000, 500);






var lienzo = document.getElementById('miCanvas');
if (lienzo && lienzo.getContext) {
var contexto = lienzo.getContext("2d");
if (contexto) {
					var X = lienzo.width/2;
					var Y = lienzo.height/2;
					var r = 90;
					contexto.strokeStyle = "#FFF333";
					contexto.fillStyle = "#FFF333";
					contexto.lineWidth = 5;
					contexto.arc(X,50,r,0,2*Math.PI);
					contexto.fill();
					contexto.stroke();
			}

		}
var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 700, ay = 150;
						var pcx = 600, pcy = 15;
						var zx = 500, zy = 150;
																
						ctx.strokeStyle = "green";
						ctx.lineWidth = 5;
						ctx.beginPath();
                                                ctx.fillStyle="green";
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
                                                ctx.fill();
						ctx.stroke();
				}

		}


var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 650, ay = 150;
						var pcx = 700, pcy = 15;
						var zx = 900, zy = 150;
																
						ctx.strokeStyle = "green";
						ctx.lineWidth = 5;
						ctx.beginPath();
                                                ctx.fillStyle="green";
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
                                                ctx.fill();
						ctx.stroke();
				}

		}

var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 850, ay = 150;
						var pcx = 850, pcy = 15;
						var zx = 1100, zy = 150;
																
						ctx.strokeStyle = "green";
						ctx.lineWidth = 5;
						ctx.beginPath();
                                                ctx.fillStyle="green";
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
                                                ctx.fill();
						ctx.stroke();
				}

		}
var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 20, ay = 150;
						var pcx = 150, pcy = 15;
						var zx = 200, zy = 150;
																
						ctx.strokeStyle = "green";
						ctx.lineWidth = 5;
						ctx.beginPath();
                                                ctx.fillStyle="green";
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
                                                ctx.fill();
						ctx.stroke();
				}

		}

                var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 500, ay = 150;
						var pcx = 350, pcy = 15;
						var zx = 300, zy = 150;
																
						ctx.strokeStyle = "green";
						ctx.lineWidth = 5;
						ctx.beginPath();
                                                ctx.fillStyle = 'green';
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
                                                ctx.fill();
						ctx.stroke();
				}
		}


var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 100, ay = 150;
						var pcx = 250, pcy = 10;
						var zx = 430, zy = 170;
																
						ctx.strokeStyle = "green";
						ctx.lineWidth = 5;
						ctx.beginPath();
                                                ctx.fillStyle = 'green';
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
                                                ctx.fill();
						ctx.stroke();
				}
		}


var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 440, ay =175;
						var pcx = 550, pcy = 200;
						var zx = 400, zy = 240;
																
						ctx.strokeStyle = "#33FCFF";
						ctx.lineWidth = 5;
						ctx.beginPath();
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
						ctx.stroke();
				}
		}


var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 500, ay =150;
						var pcx = 700, pcy = 200;
						var zx = 700, zy = 240;
																
						ctx.strokeStyle = "#33FCFF";
						ctx.lineWidth = 5;
						ctx.beginPath();
                      				ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
   
						ctx.stroke();
				}
		}
		var canvas = document.getElementById("miCanvas");
	if(canvas && canvas.getContext){
var ctx = miCanvas.getContext("2d");
if(ctx){
var cW = width = 550, cX = cW/2;
var cH = height = 550, cY = cH/2;
var rad = Math.PI / 180;

var nVertices = 9;
var R=65,r=R/nVertices,x,y,phi;
var rotacion = Math.PI/3;
ctx.lineWidth =3;

ctx.strokeStyle = "#6ab150";
ctx.strokeStyle = "green";
ctx.beginPath();

   for (var t = 1; t <= 360; t ++) {
    phi = t * rad;
    x	=	cX+(R+r)*Math.cos(phi)-r*Math.cos(rotacion+(R+r)/r*phi);	
    y	=	cY+(R+r)*Math.sin(phi)-r*Math.sin(rotacion+(R+r)/r*phi);
    ctx.lineTo(x, y);
  }
 ctx.fillStyle = 'green';
 ctx.fill();
 ctx.closePath();
 ctx.stroke();
	}
	}


var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 250, ay = 340;
						var pcx = 275, pcy = 400;
						var zx = 250, zy = 450;
																
						ctx.strokeStyle = "brown";
						ctx.lineWidth = 5;
						ctx.beginPath();
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
						ctx.stroke();
				}
		}



var canvas = document.getElementById("miCanvas");
		if (canvas && canvas.getContext) {
		var ctx = canvas.getContext("2d");
			if (ctx) {
						var ax = 300, ay = 340;
						var pcx = 275, pcy = 400;
						var zx = 300, zy = 450;
																
						ctx.strokeStyle = "brown";
						ctx.lineWidth = 5;
						ctx.beginPath();
						ctx.moveTo(ax,ay);// aquí empieza la curva
						ctx.quadraticCurveTo(pcx,pcy,zx,zy);
						ctx.stroke();
				}
		}















}
