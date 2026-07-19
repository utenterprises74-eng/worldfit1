let cart = [];
let total = 0;

function addToCart(product, price){

cart.push(product + " - ₹" + price);

total += price;

document.getElementById("cartItems").innerHTML =
cart.join("<br>");

document.getElementById("total").innerHTML =
"Total: ₹" + total;
}

document
.getElementById("checkoutForm")
.addEventListener("submit", function(e){

e.preventDefault();

if(cart.length === 0){
alert("Please add at least one product.");
return;
}

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let address = document.getElementById("address").value;
let city = document.getElementById("city").value;
let state = document.getElementById("state").value;
let pincode = document.getElementById("pincode").value;

let message =
`🛒 NEW ORDER

Name: ${name}

Mobile: ${mobile}

Address:
${address}

City: ${city}

State: ${state}

Pincode: ${pincode}

Products:
${cart.join("\n")}

Total Amount: ₹${total}`;

let phone = "91XXXXXXXXXX"; // अपना WhatsApp नंबर

let url =
"https://wa.me/" +
phone +
"?text=" +
encodeURIComponent(message);

window.open(url,"_blank");

});