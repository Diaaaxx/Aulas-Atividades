var valor = window.prompt("Digite o Valor")
var valor10 = Number (1-0.10) * valor   
    
document.write("<br>Se for à vista em dinheiro com 10% de desconto ficará = " + valor10)
    
var num2 = (1-0.15) * valor
        document.write("<br>Se for à vista no cartão de débito com 15% de desconto ficará = " + num2)

var num3 = (valor)
            document.write("<br>Se for à vista no cartão de crédito, preço normal de etiqueta sem juros ficará = " + num3)

var num4 = (valor/2 ) * (1+0.10)
                document.write("<br>Se for no cartão de crédito parcelada em 2x, preço normal de etiqueta mais juros de 10% ficará = " + num4) 
                
                