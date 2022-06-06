let funcion = (frase) =>{
    let fraseEnMayuscula = frase.toUpperCase();
    let fraseEnMinuscula = frase.toLowerCase();
    if (fraseEnMayuscula === frase){
        document.write("La frase esta escrita en mayuscula <br>")
    }else if(fraseEnMinuscula === frase){
        document.write("La frase esta escrita en minuscula <br>")
    }else{
        document.write("La frase tiene mayusculas y minusculas <br>")
    }
}
let frase = prompt("escriba algo")
document.write(funcion(frase))