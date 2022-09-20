var aumento = window.prompt("Digite o valor")
var aumento15 = (aumento <=50) * (aumento*0.15) 
var resultado15 = (+aumento + aumento15)
document.write(" <br> Até R$50 - 15% de aumento, o preço será de  =  " + resultado15)

    var aumento10 = (aumento >=50 && 100>= aumento) * (aumento*0.10) 
    var resultado10 = (+aumento + aumento10)
    document.write(" <br> Entre R$50 e R$100 - 10% de aumento, o preço será de  =  " + resultado10)

    var aumento5 = (aumento >=100) * (aumento*0.05) 
    var resultado5 = (+aumento + aumento5)
                    document.write("<br>Acima de R$100 - 5% de aumento, o preço será de  =  " + resultado5)