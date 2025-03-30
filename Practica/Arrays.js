let numbers = [1,2,3,4];
let xarray = [];
console.log("Array: "+numbers);


function ImprimirPares(array){
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0){
            xarray.push(array[i]);
        }
    }
    console.log(xarray);
}

ImprimirPares(numbers);

xarray.length=0;

function newArray(array){
    console.log("Generando array con números random...");
    let tam = Math.floor(Math.random()*10);
    console.log("tamaño:"+tam);
    array.length=tam;
    for(let i=0; i<array.length; i++){
        array[i]=Math.floor(Math.random()*100);
    }
}

newArray(xarray);
console.log(xarray);




