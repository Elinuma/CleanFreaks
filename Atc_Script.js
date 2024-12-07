const Pname = ["Dishwashing Liquid","Laundry Cleaners","Glass Cleaners",
  "Bleach","Laundry Bleach","Bleach Powder",
  "Laundry Disinfectant","Disinfecting Wipes","Disinfecting Spray"
];

const Prices = [50,100,150,100,150,100,100,50,300];
var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var a5 = 0;
var a6 = 0;
var a7 = 0;
var a8 = 0;
var a9 = 0;

var counter = 0;

$(document).ready(function(){
  $("#S1").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[0] +" = " + Prices[0] + " PHP");  
  var txt3 = document.createElement("h3");
   a1++;
  
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
  
  
  });
});
$(document).ready(function(){
  $("#S2").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[1] +" = " + Prices[1] + " PHP");  
  var txt3 = document.createElement("h3");
  a2++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});

$(document).ready(function(){
  $("#S3").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[2] +" = " + Prices[2] + " PHP");  
  var txt3 = document.createElement("h3");
  a3++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});
$(document).ready(function(){
  $("#B1").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[3] +" = " + Prices[3] + " PHP");  
  var txt3 = document.createElement("h3");
  a4++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});
$(document).ready(function(){
  $("#B2").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[4] +" = " + Prices[4] + " PHP");  
  var txt3 = document.createElement("h3");
  a5++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});
$(document).ready(function(){
  $("#B3").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[5] +" = " + Prices[5] + " PHP");  
  var txt3 = document.createElement("h3");
  a6++;
  counter++;
  limiter();
  $(".rContainer").append(txt2,txt3);  
   
  });
});
$(document).ready(function(){
  $("#D1").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[6] +" = " + Prices[6] + " PHP");  
  var txt3 = document.createElement("h3");
  a7++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});
$(document).ready(function(){
  $("#D2").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[7] +" = " + Prices[7] + " PHP");  
  var txt3 = document.createElement("h3");
  a8++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});
$(document).ready(function(){
  $("#D3").click(function(){
  var txt2 = $("<h3></h3>").text(Pname[8] +" = " + Prices[8] + " PHP");  
  var txt3 = document.createElement("h3");
  a9++;
  counter++;
  limiter();
  $(".rContainer").prepend(txt2,txt3);  
   
  });
});

function limiter(){
  var no=0;
  if (counter >= 7){
  document.getElementByTagName("h3").style.display = "none";
} 

  
document.getElementById('other').innerHTML = "Products: " + counter;
 

var finalA1= Prices[0] * a1;
var finalA2=  Prices[1] * a2 ;
var finalA3=  Prices[2] * a3 ;
var finalA4=  Prices[3] * a4 ;
var finalA5=  Prices[4] * a5 ;
var finalA6=  Prices[5]* a6 ;
var finalA7=  Prices[6]* a7 ;
var finalA8=  Prices[7]* a8 ;
var finalA9=  Prices[8]* a9 ;

let FinalPrice = finalA1 + finalA2 + finalA3 + finalA4 + finalA5 + finalA6 + finalA7 + finalA8 + finalA9;
document.getElementById('total').innerHTML = "Total Amount: " + FinalPrice + " PHP";
}
function fake(){
  alert("Your order has been placed");
}