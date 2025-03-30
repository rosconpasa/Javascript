

//Sumar
function suma(a, b){
    console.log(a+"+"+b+"="+(a+b));
}

suma(1,2);

//Dividir
function dividir(dividendo, divisor){
    if(divisor==0){
        console.log("No se puede dividir por cero");
    }else{
        let res = dividendo / divisor;
        console.log(dividendo+"/"+divisor+"="+res);
    }
}

dividir(0, 2);

//contador
let cont = 0;
while(cont<10){
    console.log(cont);
    cont++;
}


// concatenar cadenas
function concatenar(a, b){
    console.log("Todo junto: "+a+b)
}

concatenar("Hola, ", "Mundo!")

let rand = Math.random();
console.log("Número aleatorio: "+Math.floor(rand*100));

const PI = 3.14;
console.log("PI="+PI+"...")

let numbers = [1,2,3,4,5];


function esPrimo(n){
    if(n<2) return false;
    for(let i = 2 ; i<=Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}


console.log("Array:")
for(let i =0; i<numbers.length; i++){
    console.log("i: "+numbers[i]);
}

console.log("Imprimiendo solo los números primos del array:");
let i = 0;
for(let i=0; i<numbers.length; i++){
    if(esPrimo(numbers[i])){
        console.log("i: "+numbers[i]);
    }
}


// eliminando elementos del array
while(numbers.length>0){
    numbers.length = 0;
}

if(numbers.length===0){
    console.log("Array está vacío");
}






