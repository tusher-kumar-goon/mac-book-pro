
document.getElementById('cost-memory0').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0;
    totalCalc()
});
document.getElementById('cost-memory16').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180;
    totalCalc()
});
// storage
document.getElementById('cost-storage256').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0;
    totalCalc()
});
document.getElementById('cost-storage512').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 100;
    totalCalc()
});
document.getElementById('cost-storage1TB').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180;
    totalCalc()
});

// delivary charge
document.getElementById('free-delivery').addEventListener('click', function () {
    const oldPrice = document.getElementById('Delivery-Charge');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0;
    totalCalc()
});
document.getElementById('charge-delivery').addEventListener('click', function () {
    const oldPrice = document.getElementById('Delivery-Charge');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 20;
    totalCalc()
});
function totalCalc() {
    const real_price = 1299;
    const a = document.getElementById('Extra-Memory').innerText;
    const ab = Number(a);
    const b = document.getElementById('Extra-Storage').innerText;
    const bc = Number(b);
    const c = document.getElementById('Delivery-Charge').innerText;
    const ca = Number(c);
    const totalPrice = real_price + ab + bc + ca;
    document.getElementById('total-price').innerText = totalPrice;
};