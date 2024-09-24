const converterbotao = document.querySelector(".botao")
const select = document.querySelector(".select1")

function converterValores() {
   const inputValor = document.querySelector(".input-valor").value
   const valorReal = document.querySelector(".valor-br")
   const valorAmerica = document.querySelector(".valor-america")


 
   const dolar = 5.64 
   const euro = 6.21
   const libra = 7.35
   const bitcoin = 314.974


   const converterValor = inputValor / dolar


   if (select.value == "dolar") {
      valorAmerica.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(converterValor)


   }

   if (select.value == "euro") {
      valorAmerica.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValor / euro)



   }


   valorReal.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
   }).format(inputValor)


}


function trocaMoeda() {
   const textoDolar = document.getElementById("converter-nome")
   const trocaImg = document.querySelector(".logo-america")

   if (select.value == "dolar") {
      textoDolar.innerHTML = "Dólar Americano"
      trocaImg.src = "./assets/logo-americano.png"
 }

   if (select.value == "euro") {
      textoDolar.innerHTML = "Euro"
      trocaImg.src = "./assets/logo-euro.png"
    }

    converterValores()
}

select.addEventListener("change", trocaMoeda)
converterbotao.addEventListener("click", converterValores)
