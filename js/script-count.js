//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount 

//taking price value in variable
var price = document.getElementById("price").innerText;
var total ;

function calcularprecio(){
    price= 4.95;
    valorInicial=291;
    try{ 
        // valor ingresado
        var intparseValue=parseInt(document.getElementById("quantity").value) || 0;
        
        // document.getElementById("price").innerText = intparseValue
        if(intparseValue==""){ 
            // total= 4.95;
            document.getElementById("price").innerText = price
        }else if(1<=intparseValue && intparseValue<=290 ){
            price= 4.95;
            // total= 4.95;
            document.getElementById("price").innerText = price
        }else if(290<intparseValue ){   
            
            var diferenciaValor= intparseValue-valorInicial;
            var divisionValor=diferenciaValor/6;
            var divisionRound=Math.trunc(divisionValor); 
            var divisionPrecioNew=divisionRound/10; 
            var newPrecio = 5+divisionPrecioNew;
            document.getElementById("price").innerText = newPrecio
            // price+= 0.15;
            // // total= 5.1;
            // // total = Math.round((valueCount * price)*100)/100;
            // document.getElementById("price").innerText = Math.round((price)*100)/100
            
        }
        // else{ 
        //     //292 increment desde 5 + precio aument 0.1
        //     // price+= 1.85;
        //     // total= 5.1+6.8--1.85;
        //     // total = Math.round((valueCount * price)*100)/100;
        //     // document.getElementById("price").innerText = Math.round((price)*100)/100 
           
        // } 
    }catch(e){ }
}
//price calculation function
function priceTotal(pmCount) {
    var intvalueCountPrice=parseInt(valueCount);
    if(100<=intvalueCountPrice && intvalueCountPrice<=291 ){
        price= 4.95;
        // total= 4.95;
        document.getElementById("price").innerText = price
    }else if(200<intvalueCountPrice && intvalueCountPrice<=302 ){ 
       if(pmCount=="pc"){
        price+= 0.15;
        // total = Math.round((valueCount * price)*100)/100;
        document.getElementById("price").innerText = Math.round((price)*100)/100
       }else if(pmCount=="mc"){
        price-= 1.7;
        // total = Math.round((valueCount * price)*100)/100;
        document.getElementById("price").innerText = Math.round((price)*100)/100
       }
    }else{
        if(pmCount=="pc"){
        price+= 1.7;
        // total = Math.round((valueCount * price)*100)/100;
        document.getElementById("price").innerText = Math.round((price)*100)/100
        }else if(pmCount=="mc"){
        price-= 1.7;
        // total = Math.round((valueCount * price)*100)/100;
        document.getElementById("price").innerText = Math.round((price)*100)/100
        }
        
    }
    // alert(pmCount);
   
}

//plus button
document.querySelector(".plus-btn").addEventListener("click", function() {
    //getting value of input
    valueCount = document.getElementById("quantity").value;
     var intvalueCount=parseInt(valueCount);
    //input value increment by 1
    intvalueCount +=100;
    valueCount =intvalueCount ;

    //setting increment input value
    document.getElementById("quantity").value = intvalueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }  
    //calling price function
    priceTotal("pc");
})

//plus button
document.querySelector(".minus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    var intvalueCount2=parseInt(valueCount);
if(0 < intvalueCount2 && intvalueCount2 < 200){
    //getting value of input 
    var intvalueCount=parseInt(valueCount);
    //input value increment by 1
    intvalueCount =100;
    valueCount =intvalueCount;

    //setting increment input value
    document.getElementById("quantity").value = intvalueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    } 
    //calling price function
    priceTotal("mc");
}else if (intvalueCount2 > 100  ) {
    var intvalueCount=parseInt(valueCount);
    //input value increment by 1
    intvalueCount -=100;
    valueCount =intvalueCount ;

    //setting increment input value
    document.getElementById("quantity").value = intvalueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    } 
    //calling price function
    priceTotal("mc");
}
}) 