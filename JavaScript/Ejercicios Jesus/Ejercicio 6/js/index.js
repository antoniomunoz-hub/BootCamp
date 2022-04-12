console.log("estoy dentro");

function changeToFarenheit(){
    var grados = 27;
    var farenheit = (grados * 9) / 5 + 32 ;
    console.log(farenheit);
    document.write(`${grados} grados equivalen a ${farenheit}`)
}
   
function changeToMeters(){
    var millas = 15;
    var metros = millas * 1852;
    console.log(metros);
}

function calulatePercent(){
    var precioPagado = 100;
    var precioReal = 200;
    var dto = precioReal - precioPagado;
    var percent = dto*100 / precioReal
    console.log(percent);
}

function area(){
    var base = 5;
    var altura = 2;
    var area = (base*altura) / 2;
    console.log(area);
}

function perimetro(){
    var base = 5;
    var altura = 2;
    var hipotenusa = (base^2 + altura^2);
    hipotenusa =  Math.sqrt(hipotenusa)
    var perimetro = base + altura + hipotenusa;
    console.log(perimetro);
}