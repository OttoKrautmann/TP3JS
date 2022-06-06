let parametro = (numero) => {
    let resto = numero %2;
    console.log(resto)
    return resto 
}

let number = prompt("ingrese un numero")
if(parametro(number) == 0){
    document.write(`El numero ${number} es par`)
}else{
    document.write(`El numero ${number} es impar`)
}