let heart=document.getElementsByClassName("heart")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalprice=document.getElementById("finalPrice")
let price=document.getElementsByClassName('price')
let Item=document.getElementsByClassName("Item")
let deletee=document.getElementsByClassName("deletee")
for(let index=0;index < heart.length;index++) {
    heart[index].addEventListener("click",function(){
        if(heart[index].style.color==="black"){
            heart[index].style.color="red"
        }
        else{
            heart[index].style.color="black"
        }
    })
    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        finalprice.value=Number(finalprice.value)+Number(price[index].textContent)

    })
    minus_btn[index].addEventListener("click",function(){
        if (Number(Quant[index].value)>0){
            Quant[index].value=Number(Quant[index].value)-1
            finalprice.value=Number(finalprice.value)-  Number(price[index].textContent)

        }
        
    })
    deletee[index].addEventListener("click",function(){
        Item[index].style.display="none"
    })
}