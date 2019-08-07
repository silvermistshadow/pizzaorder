//Back end code here
function Order() {
    this.pizzas = [];
    this.currentId = 0;
};

Order.prototype.addPizza = function(pizza) {
    pizza.id = this.assignId();
    this.pizzas.push(pizza);
};

Order.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

Order.prototype.findPizza = function(id) {
    for (var i=0; i< this.pizzas.length; i++) {
        if (this.pizzas[i]) {
            if (this.pizzas[i].id == id) {
                return this.pizzas[i];
            }
        }
    };
    return false;
};

Order.prototype.deletePizza = function(id) {
    for (var i=0; i< this.pizzas.length; i++) {
        if (this.pizzas[i]) {
            if (this.pizzas[i].id == id) {
                delete this.pizzas[i].id
            }
        }
    };
    return false;
}


function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

var smallPrice = 3;
var mediumPrice = 5;
var largePrice = 7;

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
    if (this.size === "small") {
        totalPrice += smallPrice;
    }
    else if (this.size === "medium") {
        totalPrice += mediumPrice;
    }
    else if (this.size === "large") {
        totalPrice += largePrice;
    }
    else {
        console.log("FLAGRANT SYSTEM ERROR")
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
var order = new Order();

function displayPizzaDetails(orderToDisplay) {
    var pizzaList = $("ul#pizzas");
    var htmlForPizzaInfo = "";
    orderToDisplay.pizzas.forEach(function(pizza) {
        htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + "</li>";
    });
    pizzaList.html(htmlForPizzaInfo);
};

function showPizza(pizzaId) {
    var pizza = Order.findPizza(pizzaId);
    $("#show-pizza").show();
    $(".pizzaSize").html(pizza.size);
    for (var i = 0; i<= pizza.toppings.length; i++) {
        $(".pizzaToppings").append(" " + pizza.toppings[i]);
    };
    
};

function attachPizzaListeners() {
    $("ul#pizzas").on("click", "li", function() {
      showPizza(this.id);
    });
    $("#buttons").on("click", ".deleteButton", function() {
      order.deletePizza(this.id);
      $("#show-pizza").hide();
      displayPizzaDetails(order);
    });
  };


$(document).ready(function() {
    attachPizzaListeners();
    $("form#pizzaForm").submit(function(event){
        event.preventDefault();
        $("#output").show();
        $("input:checkbox[name=topping]:checked").each(function(){       
            var topping = $(this).val();
            toppings.push(topping);
        });
        var inputSize = $("#pizzaSize").val();
        var newPizza = new Pizza(toppings, inputSize);
        var outputPrice = newPizza.getPrice();
        order.addPizza(newPizza);
        $("#output").html("Price:" + " " + outputPrice);
        displayPizzaDetails(order);
    });

});