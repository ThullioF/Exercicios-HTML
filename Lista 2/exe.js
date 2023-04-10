function exe1(){
    let number1 = Number(document.getElementById("1").value)
    let number2 = Number(document.getElementById("2").value)
    let number3 = Number(document.getElementById("3").value)
    let number4 = Number(document.getElementById("4").value)
    let media = (number1 + number2 + number3 + number4) / 4
    let resultado = media

    if (media < 7) {
        resultado = "(reprovado)"
    } else{
        resultado = "(aprovado)"
    }

    document.getElementById("resultado").innerHTML = resultado
    document.getElementById("media").innerHTML = media
}

function exe2(){
    let number1 = Number(document.getElementById("1").value)
    let number2 = Number(document.getElementById("2").value)
    let media = (number1 + number2) / 2
    let resultado = media

    if (media < 3) {
        resultado = "reprovado"
    } else if(media < 7){
        resultado = "exame"
    } else {
        resultado = "aprovado"
    }

    document.getElementById("resultado").innerHTML = resultado
    document.getElementById("media").innerHTML = media
}