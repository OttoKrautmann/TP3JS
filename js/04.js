let parametro = (numero) => {
    let resto = numero %2;
    console.log(resto);
    if(resto == 0){
        document.write(`El numero ${number} es par <br>`)
    }else{
        document.write(`El numero ${number} es impar <br>`)
    }
}

let number = prompt("ingrese un numero")
document.write(parametro(number))

// no se xq en pantalla me muestra un undefined siempre