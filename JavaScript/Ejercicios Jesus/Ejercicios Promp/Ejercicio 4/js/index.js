var pregunta = confirm("Quiere aceptar la ventana Actual")
var myUrl = window.open("http://127.0.0.1:5500/","miventana","width=300,height=200,menubar=no")

if (pregunta == true) {
        window.close(); // SEGUN QUE NAVEGADOR FUNCIONA O NO
}else if (pregunta == false){
        window.location.href = "https://www.google.es";
}

