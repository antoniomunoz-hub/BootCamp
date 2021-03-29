//1
let brands = ["Nike", "Adidas", "Reebok", "Under-Armour", "Converse"];
console.log(brands, length);



//2
let numbersArray = [];
console.log(numbersArray, numbersArray.length);

numbersArray.push(4, 5, 6);
console.log(numbersArray, numbersArray.length);
numbersArray.shift();
console.log(numbersArray, numbersArray.length);
numbersArray.unshift(2, 3);
console.log(numbersArray, numbersArray.length);

//3

function birthday (day){
    if (day === 13){
        return true;
    }
    else {
        return false;
    }
}

console.log(birthday(13));


//4

function numberString(e){
    return e.length;
}

console.log(`El string tiene una longitud de`, numberString(`Soñando`), `: letras`);

//5

const segs = (minutos) => 60 * minutos;
console.log(segs(5));