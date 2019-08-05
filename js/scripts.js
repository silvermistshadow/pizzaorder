//Back end code here
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.getPrice = function() {
    var basePrice = 5;
    var totalPrice = basePrice;
    if (this.toppings.includes("cheese")) {
        totalPrice += cheese.price;
    }
    if (this.toppings.includes("pepperoni")) {
        totalPrice += pepperoni.price;
    }
    if (this.toppings.includes("anchovy")) {
        totalPrice += anchovy.price;
    }
    if (this.toppings.includes("bacon")) {
        totalPrice += bacon.price;
    }
    var dollarPrice = "$" + totalPrice.toString();
    return dollarPrice;
}

function Topping (price) {
    this.price = price;
}

var cheese = new Topping(1);
var pepperoni = new Topping(2);
var anchovy = new Topping(4);
var bacon = new Topping(3);

var toppings = [];









//UI starts here

$(document).ready(function() {
    $("form#pizzaForm").submit(function(event){
        event.preventDefault();
        $("input:checkbox[name=topping]:checked").each(function(){       
            var topping = $(this).val();
            toppings.push(topping);
        });

    });

});