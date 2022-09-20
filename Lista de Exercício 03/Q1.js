var hora = window.prompt("Digite a Hora")
console.log(hora) 
if (hora >=6  && hora <=12 ){
    document.write("Bom dia")
    } else if (hora >=13   && hora <=18 ){
    document.write("Boa Tarde")
        } else if (hora <=19 || hora <=24 ){
    document.write("Boa Noite")
            }else{ (hora >=25 || hora <=100 )
            document.write("Erro")
} 