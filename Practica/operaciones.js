// sumar
function sumar(a,b){
    return a+b;
}

// restar
function restar(a, b){
    return console.log(a-b);
}

// dividir 

function dividir (dividendo, divisor){
    if(dividendo===0){
        console.log("No se puede dividir por cero");
    }else{
        return console.log(dividendo/divisor);
    }
}

console.log(sumar(1,2));
restar(1,2);
dividir(1,2);