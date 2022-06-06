let perimetro = (base, altura) =>{
    document.write(`El perimetro de un rectangulo con base ${base} y altura ${altura} es ${2*(base+altura)}`)
}

let base = parseInt(prompt("ingrese la base"))
let altura = parseInt(prompt("ingrese la altura"))
document.write(perimetro(base, altura))