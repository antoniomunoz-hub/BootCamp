
    // ----------uso de js externo----------

function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
    }
    document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

    // ----------Depuracion / logging----------
    // alert("Mensaje");
    console.log("");


    // ----------Variables---------
    // var-> function scope
    // let / const -> block scope

    function saludar( ) {
        console.log("Inicial: ", contador);

        // Comprobar con var y con let y ver diferencias
        for (var contador = 0; contador < 6; contador++){
        console.log(contador);
        }
        console.log("Final: ", contador);
    }

    saludar();

    console.clear();
    // Inicializacion
    let day;
    day = 5;

    let monthName = "Octubre";

    let hour, minute, second;

    let array = [15, 20, 25]
    console.log(array[0], array[1], array[2]); 
    let [var1, var2, var3] = [15, 20, 25]; //AVANZADA
    console.log(var1, var2,var3);

    // const -> Block Scope
    const x=1;
    // x = 2 ERROR UNA CONSTANTE NO PUEDE SER SOBREESCRITA
    // const y; error missing = in const

    console.clear();

    // ---------- Tipos de Datos ----------
    let str = String("Im a string");
    let str2 = "Im another string"; // Recomendado  
    console.log(typeof str, typeof str2, typeof "");

    // let str = "string" ES IGUAL A "string"

    let num = Number (5);
    let num2 = 5;
    console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof"5");
