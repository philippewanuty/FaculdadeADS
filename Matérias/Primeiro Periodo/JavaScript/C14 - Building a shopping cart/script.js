var productValue = [25.0, 50.0];
var totalAmount = [0, 0];
var quantity = [0, 0];

function addItem(item) {
  var Quantity = document.getElementById('quantity' + item);
  var Amount = document.getElementById('amount' + item);
  quantity[item] += 1;
  totalAmount[item] = Number.parseFloat(productValue[item]) * quantity[item];
  Quantity.innerHTML = quantity[item];
  Amount.innerHTML = totalAmount[item].toFixed(2);
  sumAmount();
}

function removeItem(item) {
  if (quantity[item] > 0) {
    quantity[item] -= 1;
  }
  var Quantity = document.getElementById('quantity' + item);
  var Amount = document.getElementById('amount' + item);
  totalAmount[item] = Number.parseFloat(productValue[item]) * quantity[item];
  Quantity.innerHTML = quantity[item];
  Amount.innerHTML = totalAmount[item].toFixed(2);
  sumAmount();
}

function sumAmount() {
  var totalPurchase = document.getElementById('totalPurchaseAmount');
  amountValue = 0;

  for (var i = 0; i < totalAmount.length; i++) {
    amountValue += totalAmount[i];
  }

  totalPurchase.innerHTML = amountValue.toFixed(2);
}
