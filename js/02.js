let resultado = [];
do{
    let ciudad = prompt("ingrese el nombre de una ciudad");
    resultado.push(ciudad);
    
}while(confirm("desea seguir"))

document.write(resultado.length + "<br>")
document.write(resultado[0] + "<br>")
document.write(resultado[2] + "<br>")
document.write(resultado[resultado.length - 1] + "<br>")
resultado.push("Paris")
document.write(resultado[1] + "<br>")
resultado[1] = "Barcelona"

// document.write(resultado)