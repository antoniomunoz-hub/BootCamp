
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

    

    // ---------- Tipos de Datos ----------
    
    
    // ----------Primitivos----------
    let str = String("Im a string");
    let str2 = "Im another string"; // Recomendado  
    console.log(typeof str, typeof str2, typeof "");

    // let str = "string" ES IGUAL A "string"

    let num = Number (5);
    let num2 = 5;
    console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof"5");

    let bool = Boolean(true);
    let bool2 = false;
    console.log(typeof bool, typeof bool2, typeof true, typeof "true");

    let undef;
    console.log(undef, typeof undef);

    let selectedColor = null; //Limpiar una variable
    console.log(selectedColor, typeof selectedColor);

    // ----------Objetos----------
    array = Array(1, 2, 3);
    let array2 = [1, 2, 3];
    console.log(array,array2);
    console.log(typeof array, typeof array2);

    console.log(typeof new Date("2021-05-21"));
    console.log(typeof new Error("Mensaje de Error"));

    console.clear();
    // ----------Strings----------
    str = "Hola Futuro";
    console.log(str, str.length);
    console.log(str.indexOf("Futuro"), str.indexOf("Cadena no Presente"));
    console.log("La ultima ocurrecia de `u` esta en el indice", str.lastIndexOf("u"));

    console.log(str.substring(1, 3));

    console.log("Hola mundo".concat(" .Adios mundo"));
    console.log("Hola mundo" + ".Adios mundo."); //Equivalente a concat
    str = str + ". Adios mundo.";
    str += ". Adios mundo.";
    console.log(str);
    console.log(str.replace("futuro", "mundo"));
    console.log(str.replaceAll("mundo", "futuro"));
    console.log(str.toLocaleLowerCase());
    console.log(str.toUpperCase());

    console.log(`El dia de mi cumpleaños es ${day}`); //String template
    console.log("El dia de mi cumpleaños es", day);

    //----------Parsing ( conversion de un tipo a otro )----------
    let number = Number("asdasd"); // Nan = Not a Number. No genera error.
    console.log(number, typeof number);

    number = Number("1000");
    console.log(number, typeof number);

    number+= "1000"; // Entiende que es una concatenacion, no una suma
    console.log(number, typeof number);

    console.log("1" + 1, "1" - 1);// con el + contaquena, el - no tiene otro valor que no sea restar 

    // ----------Objetos----------
    let person = {
        name: "Oscar",
        age: 30,
        blonde: false,
        jump() {
            console.log("Hey, mira como salto!!");
        }//Funcion 
    }

    console.log(person);
    console.log(`Se llama ${person.name} y tiene ${person.age} años`);
    
    person.name = "Dimitrov";
    // Acceso por punto / Dot notation

    console.log(person, typeof person);
    console.log(`Se llama ${person.name} y tiene ${person.age} años`);

    // Acceso por corchetes / Brackets notation

    let propertyName = "age";
    console.log(person[propertyName]);

    //Ampliacion

    person.children = ["Marta","Peter"];
    console.log(person);
    console.log(person.children);

    person.jump();

    // {} Objeto, [] Array tambien es objeto, "" String
    console.log(typeof{}, typeof [], typeof"");

    

