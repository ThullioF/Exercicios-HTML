function ex1(){
    let number1= Number(document.getElementById("1").value)
    let number2= Number(document.getElementById("2").value)
    let sub= number1 - number2
    alert(sub)
}

function ex2(){
    let number1= Number(document.getElementById("1").value)
    let number2= Number(document.getElementById("2").value)
    let number3= Number(document.getElementById("3").value)
    let multi= number1 * number2 * number3
    alert(multi)
}

function ex3(){
    let number1= Number(document.getElementById("1").value)
    let number2= Number(document.getElementById("2").value)
    let div= number1 / number2
    alert(div)
}

function ex4(){
    let number1= Number(document.getElementById("1").value)
    let number2= Number(document.getElementById("2").value)
    let media= (number1*2 + number2*3) / 5
    alert(media)
}

function ex5(){
    let number1= Number(document.getElementById("1").value)
    let desconto= number1*0.10
    let total= number1-desconto
    alert(total)
}

function ex6(){
    let number1= Number(document.getElementById("1").value)
    let number2= Number(document.getElementById("2").value)
    let comissao= number2*0.04
    let total= number1 + comissao
    alert("comissão " + comissao + " total " + total)
}

function ex7(){
    let number1= Number(document.getElementById("1").value)
    let x= number1*0.15
    let engordar= number1+x
    let y= number1*0.20
    let emagrecer= number1-y
    alert("engordar: " + engordar + " emagrecer: " + emagrecer)
}

function ex8(){
    let number1= Number(document.getElementById("1").value)
    let gramas= number1*1000
    alert(gramas)
}

function ex9(){
    let number1= Number(document.getElementById("1").value)
    let number2= Number(document.getElementById("2").value)
    let number3= Number(document.getElementById("3").value)
    let area= ((number1+number2)*number3) / 2
    alert(area)
}

function ex10(){
    let number1= Number(document.getElementById("1").value)
    let area= number1*number1
    alert(area)
}