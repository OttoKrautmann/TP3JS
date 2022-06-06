let resultado = [
    num2 = 0,
    num3 = 0,
    num4 = 0,
    num5 = 0,
    num6 = 0,
    num7 = 0,
    num8 = 0,
    num9 = 0,
    num10 = 0,
    num11 = 0,
    num12 = 0,
]
let i = 1
let j = 0
for (i; i <= 50; i++){
    let dado1 = Math.floor((Math.random()*6)+1)
    let dado2 = Math.floor((Math.random()*6)+1)
    total = dado1 + dado2
    switch (total){
        case 2 :
            resultado[0] = resultado[0] + 1;
            break;
        case 3 :
            resultado[1] = resultado[1] + 1;
            break;
        case 4 :
            resultado[2] = resultado[2] + 1;
            break;
        case 5 :
            resultado[3] = resultado[3] + 1;
            break;
        case 6 :
            resultado[4] = resultado[4] + 1;
            break;
        case 7 :
            resultado[5] = resultado[5] + 1;
            break;
        case 8 :
            resultado[6] = resultado[6] + 1;
            break;
        case 9 :
            resultado[7] = resultado[7] + 1;
            break;
        case 10 :
            resultado[8] = resultado[8] + 1;
            break;
        case 11 :
            resultado[9] = resultado[9] + 1;
            break;
        default :
            resultado[10] = resultado[10] + 1;
            break;
    }
}

for(j; j<resultado.length; j++){
    document.write(`numero ${j+2}: ${resultado[j]} <br>`);
}
