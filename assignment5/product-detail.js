//localStorage.setItem("none", null);
//localStorage.setItem("sm", null);
//localStorage.setItem("vm", null);
//localStorage.setItem("choc", null);

$(document).ready(function() {

    // get current bun settings
    var quantity = JSON.parse(localStorage.getItem("quantity"));
    var glazing = JSON.parse(localStorage.getItem("glazing"));
    
    //getting already existing quantities per bun type
    var none = (isNaN(none = parseInt(JSON.parse(localStorage.getItem("none")))) ? 0 : none);
    var sm = (isNaN(sm = parseInt(JSON.parse(localStorage.getItem("sm")))) ? 0 : sm);
    var vm = (isNaN(vm = parseInt(JSON.parse(localStorage.getItem("vm")))) ? 0 : vm);
    var choc = (isNaN(choc = parseInt(JSON.parse(localStorage.getItem("choc")))) ? 0 : choc);
    
    //Uncomment to see what values 
//    alert(none);
//    alert(sm);
//    alert(vm);
//    alert(choc);
    
    
    //if there are buns already in the cart show the cart number
    if((none+sm+vm+choc) > 0) {
        $("#itemno").text(String(none+sm+vm+choc));
        $("#itemno").css("border", "1px solid black");
    } else {
        $("#itemno").css("border", "");
    }
     
    // update the page when glazing changes
    $("#glazing").change(function () {
        var glazing = $("#glazing").val();

        if(glazing == "none") {
            $("#product-pic").attr("src", "img/original.png");
        }

        else if(glazing == "sm") {
            $("#product-pic").attr("src", "img/sugarmilk.png");
        }

        else if(glazing == "vm") {
            $("#product-pic").attr("src", "img/vanillamilk.png");
        }

        else if(glazing == "choc") {
            $("#product-pic").attr("src", "img/doublechoc.png");
        }
    });
    
    //adding buns to the cart
    $("#add2cart").click(function() {
        
        var glazing = $("#glazing").val();
        var quantity = parseInt($("#quantity").val());
        
        if(glazing == "none") {
            if(JSON.parse(localStorage.getItem("none")) == null) {
                localStorage.setItem("none", JSON.stringify(quantity));
            } else {
                localStorage.setItem("none", JSON.stringify(JSON.parse(localStorage.getItem("none")) + quantity));
            }
        }
        
        else if(glazing == "sm") {
            if(JSON.parse(localStorage.getItem("sm")) == null) {
                localStorage.setItem("sm", JSON.stringify(quantity));
            } else {
                localStorage.setItem("sm", JSON.stringify(JSON.parse(localStorage.getItem("sm")) + quantity));
            }
        }
        
        else if(glazing == "vm") {
            if(JSON.parse(localStorage.getItem("vm")) == null) {
                localStorage.setItem("vm", JSON.stringify(quantity));
            } else {
                localStorage.setItem("vm", JSON.stringify(JSON.parse(localStorage.getItem("vm")) + quantity));
            }
        }
        
        else if(glazing == "choc") {
            if(JSON.parse(localStorage.getItem("choc")) == null) {
                localStorage.setItem("choc", JSON.stringify(quantity));
            } else {
                localStorage.setItem("choc", JSON.stringify(JSON.parse(localStorage.getItem("choc")) + quantity));
            }
        }
        
        if($("#itemno").text() == " ") {
            $("#itemno").text(String(quantity));
            $("#itemno").css("border", "1px solid black");
        } else {
            $("#itemno").text(String(parseInt($("#itemno").text()) + quantity));
        }

    });
    
    var cart = document.getElementById("cart");
    
    //Setup None Items in Cart
    
    //check that a none bun has been added to the cart
    if(none > 0) {
        var noneItem = document.createElement('li');
        var noneImg = document.createElement("img");
        noneImg.setAttribute("src", "img/original.png");

        var noneHeader = document.createElement("h3");
        noneHeader.appendChild(document.createTextNode("Original Bun"));
        
        var noneQuantity = document.createElement("p");
        noneQuantity.appendChild(document.createTextNode("Quantity: " + String(none)));
        
        var noneGlazing = document.createElement("p");
        noneGlazing.appendChild(document.createTextNode("Glazing: None"));
        
        var noneDelete = document.createElement("p");
        var noneDeleteInput = document.createElement("input");
        noneDeleteInput.setAttribute("id", "removeNone");
        noneDeleteInput.setAttribute("type", "button");
        noneDeleteInput.setAttribute("value", "Remove Item");
        noneDelete.appendChild(noneDeleteInput);
        var noneDiv = document.createElement("div");
        
        noneItem.appendChild(noneImg);
        noneDiv.appendChild(noneHeader);
        noneDiv.appendChild(noneQuantity);
        noneDiv.appendChild(noneGlazing);
        noneDiv.appendChild(noneDelete);
        noneItem.appendChild(noneDiv);

        cart.appendChild(noneItem);
    }
    
    if(sm > 0) {
        var smItem = document.createElement('li');
        var smImg = document.createElement("img");
        smImg.setAttribute("src", "img/sugarmilk.png");

        var smHeader = document.createElement("h3");
        smHeader.appendChild(document.createTextNode("Original Bun"));

        var smQuantity = document.createElement("p");
        smQuantity.appendChild(document.createTextNode("Quantity: " + String(sm)));
        
        var smGlazing = document.createElement("p");
        smGlazing.appendChild(document.createTextNode("Glazing: Sugar Milk"));
        
        var smDelete = document.createElement("p");
        var smDeleteInput = document.createElement("input");
        smDeleteInput.setAttribute("id", "removeSm");
        smDeleteInput.setAttribute("type", "button");
        smDeleteInput.setAttribute("value", "Remove Item");
        smDelete.appendChild(smDeleteInput);
        var smDiv = document.createElement("div");
        
        smItem.appendChild(smImg);
        smDiv.appendChild(smHeader);
        smDiv.appendChild(smQuantity);
        smDiv.appendChild(smGlazing);
        smDiv.appendChild(smDelete);
        smItem.appendChild(smDiv);
        
        cart.appendChild(smItem);
    }
    
    if(vm > 0) {
        var vmItem = document.createElement('li');
        var vmImg = document.createElement("img");
        vmImg.setAttribute("src", "img/vanillamilk.png");

        var vmHeader = document.createElement("h3");
        vmHeader.appendChild(document.createTextNode("Original Bun"));

        var vmQuantity = document.createElement("p");
        vmQuantity.appendChild(document.createTextNode("Quantity: " + String(vm)));
        
        var vmGlazing = document.createElement("p");
        vmGlazing.appendChild(document.createTextNode("Glazing: Vanilla Milk"));
        
        var vmDelete = document.createElement("p");
        var vmDeleteInput = document.createElement("input");
        vmDeleteInput.setAttribute("id", "removevm");
        vmDeleteInput.setAttribute("type", "button");
        vmDeleteInput.setAttribute("value", "Remove Item");
        vmDelete.appendChild(vmDeleteInput);
        var vmDiv = document.createElement("div");
        
        vmItem.appendChild(vmImg);
        vmDiv.appendChild(vmHeader);
        vmDiv.appendChild(vmQuantity);
        vmDiv.appendChild(vmGlazing);
        vmDiv.appendChild(vmDelete);
        vmItem.appendChild(vmDiv);
        
        cart.appendChild(vmItem);
    }
    
    if(choc > 0) {
        var chocItem = document.createElement('li');
        var chocImg = document.createElement("img");
        chocImg.setAttribute("src", "img/doublechoc.png");

        var chocHeader = document.createElement("h3");
        chocHeader.appendChild(document.createTextNode("Original Bun"));

        var chocQuantity = document.createElement("p");
        chocQuantity.appendChild(document.createTextNode("Quantity: " + String(choc)));
        
        var chocGlazing = document.createElement("p");
        chocGlazing.appendChild(document.createTextNode("Glazing: Double Chocolate"));
        
        var chocDelete = document.createElement("p");
        var chocDeleteInput = document.createElement("input");
        chocDeleteInput.setAttribute("id", "removechoc");
        chocDeleteInput.setAttribute("type", "button");
        chocDeleteInput.setAttribute("value", "Remove Item");
        chocDelete.appendChild(chocDeleteInput);
        var chocDiv = document.createElement("div");
        
        chocItem.appendChild(chocImg);
        chocDiv.appendChild(chocHeader);
        chocDiv.appendChild(chocQuantity);
        chocDiv.appendChild(chocGlazing);
        chocDiv.appendChild(chocDelete);
        chocItem.appendChild(chocDiv);
        
        cart.appendChild(chocItem);
    }

});
    
$(document).on("click", "#removeNone", function() {
    $(this).parent().parent().parent().remove();
    var noneQuant = (isNaN(none = parseInt(JSON.parse(localStorage.getItem("none")))) ? 0 : none);
    localStorage.setItem("none", 0);
    $("#itemno").text(String(parseInt($("#itemno").text()) - noneQuant));
    
});

$(document).on("click", "#removeSm", function() {
    $(this).parent().parent().parent().remove();
    var noneQuant = (isNaN(none = parseInt(JSON.parse(localStorage.getItem("sm")))) ? 0 : none);
    localStorage.setItem("sm", 0);
    $("#itemno").text(String(parseInt($("#itemno").text()) - noneQuant));
    
});

$(document).on("click", "#removevm", function() {
    $(this).parent().parent().parent().remove();
    var noneQuant = (isNaN(none = parseInt(JSON.parse(localStorage.getItem("vm")))) ? 0 : none);
    localStorage.setItem("vm", 0);
    $("#itemno").text(String(parseInt($("#itemno").text()) - noneQuant));
    
});

$(document).on("click", "#removechoc", function() {
    $(this).parent().parent().parent().remove();
    var noneQuant = (isNaN(none = parseInt(JSON.parse(localStorage.getItem("choc")))) ? 0 : none);
    localStorage.setItem("choc", 0);
    $("#itemno").text(String(parseInt($("#itemno").text()) - noneQuant));
    
});