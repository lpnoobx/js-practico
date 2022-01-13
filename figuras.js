//codigo del cuadrado 

console.group("cuadrados");
//const ladoCuadrado =5 ;
//console.log("los lados del cuadrado miden "+ladoCuadrado + " cm");
//const perimetroCuadrado = ladoCuadrado *4 ;
function perimetroCuadrado(lado){
    return lado *4 ;
}

//console.log("El perimetro del cuadrado es  "+perimetroCuadrado+ " cm");

//const areaCuadrado  = ladoCuadrado *ladoCuadrado ;
function areaCuadrado(lado){
 return lado*lado ;
}
//console.log("El Area del cuadrado es   "+areaCuadrado+ " cm2");

console.groupEnd();

//codigo del triangulo 
console.group("Triangulos");
//const ladoTriangulo1 = 6 ;
//const ladoTriangulo2 = 6 ;
//const baseTriangulo = 4 ;

//console.log("los lados del triangulo miden "+ladoTriangulo1 + " cm , " + ladoTriangulo2+" cm , "+baseTriangulo+" cm");

//const alturaTriangulo = 5.5 ;
//console.log("La altura   del trinagulo es  "+alturaTriangulo+ " cm");

//const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 +baseTriangulo ;
//console.log("El perimetro del trinagulo es  "+perimetroTriangulo+ " cm");

function perimetroTriangulo(lado1 , lado2 , base){
    return lado1 +lado2 +base ;
}

//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2 ;
//console.log("El Area del triangulo es   "+areaTriangulo+ " cm2");

function areaTriangulo(altura,base){
      return (altura* base)/2 ;
}
console.groupEnd();
//codigo del circulo
console.group("circulos");
//const radiocirculo = 4;
//console.log("El radio del circulo es  "+radiocirculo+ " cm");

//const DiametroCirculo = radiocirculo *2 ;
function DiametroCirculo(radio){
    return radio*2 ;
}
//console.log("El diametro del circulo es  "+DiametroCirculo+ " cm");

const PI1 =3.1415 ;
//const PI2 =Math.PI ;
function permitroCirculo(radio){
    const diametro =DiametroCirculo(radio);
    return diametro *PI1 ;
}
//const permitroCirculo = DiametroCirculo*PI1 ;
//console.log("El perimetro del circulo es  "+permitroCirculo+ " cm");

//const areacirculo = (radiocirculo*radiocirculo)*PI1 ;
//console.log("El area del circulo es  "+areacirculo+ " cm");

function areacirculo(radio){
 return (radio*radio)*PI1;
}
//onst areaCirculo =
console.groupEnd();