var total = 0.00;
var pizzaText = new String();
var amountText= new String();


function Calc() {
    
    PizzaSize();
    SelectToppings("meats");
    CheeseType();
    CrustType();
    SauceType();    
    SelectToppings("veggies");

    CreateReceipt();
   
};

/* Get the pizza size selected, add total for final bill, 
and save text for receipt and amounts */

function PizzaSize() {
    var result = document.querySelector('input[name="size"]:checked').value; 
    //query the radio button and set which ever one is checked for result
    
    if (result == "Personal Pizza") {    
        total = total + 6.00;        
        amountText = amountText + "$6.00<br>";
    } else if (result == "Medium Pizza") {
        total = total + 10.00;
        amountText = amountText + "$10.00<br>";
    } else if (result == "Large Pizza") {
        total = total + 14.00
        amountText = amountText + "$14.00<br>";
    } else {
        total = total + 16.00
        amountText = amountText + "$16.00<br>";
    };

    pizzaText = pizzaText + result + "<br>";
};

/* Get the cheese selected, add total for final bill, 
and save text for receipt and amounts */

function CheeseType() {
    var result = document.querySelector('input[name="cheese"]:checked').value; 
    //query the radio button and set which ever one is checked for result
            
    if (result == "Extra Cheese") {
        total = total + 3.00;
        amountText = amountText + "$3.00<br>";
    } else {
        amountText = amountText + "$0.00<br>";
    };

    pizzaText = pizzaText + result + "<br>";
};


/* Get the crust selected, add total for final bill, 
and save text for receipt and amounts */

function CrustType() {    
    var result = document.querySelector('input[name="crust"]:checked').value; 
    //query the radio button and set which ever one is checked for result
    
    if (result == "Cheese Stuffed Crust") {
        total = total + 3.00;        
        amountText = amountText + "$3.00<br>";
    } else {
        amountText = amountText + "$0.00<br>";
    };

    pizzaText = pizzaText + result + "<br>";
};

/* Get the sauce selected, add total for final bill, 
and save text for receipt and amounts */

function SauceType() {    
    var result = document.querySelector('input[name="sauce"]:checked').value; 
    //query the radio button and set which ever one is checked for result
        
    pizzaText = pizzaText + result + "<br>";
    amountText = amountText + "$0.00<br>";
};
 
/* Get the toppings selected, add total for final bill, 
and save text for receipt and amounts */

// Pass the checkbox name to the function (meats or veggies)
function SelectToppings(toppingName) {
    //get the array of toppings
    var toppingsList = document.getElementsByName(toppingName);
    var toppingsChecked = [];
    
    // loop over them all to determine which were checked   
    for (var i=0; i<toppingsList.length; i++) {
        if (toppingsList[i].checked) {
            toppingsChecked.push(toppingsList[i]);                
        }
    }

    /* Determine amount for toppings, first one free, $1 for extra
    add to final bill and receipt text*/
    if (toppingsChecked.length > 1) {
        total = total + (toppingsChecked.length -1);
        amountText = amountText + "$" + (toppingsChecked.length -1) + ".00<br>";
    } else {
        amountText = amountText + "$" + "0.00<br>";
    }   


    //Save toppings selected to receipt text
    if (toppingsChecked.length == 0) {
        pizzaText = pizzaText + "No " + toppingName + " selected<br>";
    } else     
    if (toppingsChecked.length > 1) {
        for (var i=0; i<toppingsChecked.length-1; i++) {  
            pizzaText = pizzaText + toppingsChecked[i].value + ", ";             
        };
        pizzaText = pizzaText + toppingsChecked[i].value + "<br>";
    } else if (toppingsChecked.length == 1) {
        pizzaText = pizzaText + toppingsChecked[0].value + "<br>"; 
    }
};

function CreateReceipt() {

    //Display receipt when order placed
    var receipt = document.getElementById("receipt");
    receipt.style.display = "block";
   
    //Write items and amounts selected on receipt
    pizzaText = pizzaText + "<br><b>Order Total:</b>";
    amountText = amountText + "<br><b>$" + total + ".00</b>";
    document.getElementById("receiptItems").innerHTML = pizzaText.toString();
    document.getElementById("receiptAmounts").innerHTML = amountText.toString();
    receipt.scrollIntoView();
   
};

function ClearScreen() {
    //clear the page and scroll to top
    window.location.reload();
    document.documentElement.scrollTop = 0;
}
      

  