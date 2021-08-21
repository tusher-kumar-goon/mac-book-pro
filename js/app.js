// const oneButton = document.getElementById('first');
// const twoButton = document.getElementById('second');
// const threeButton = document.getElementById('third');
// const fourButton = document.getElementById('fourth');
// const fiveButton = document.getElementById('fiveth');
// const sixButton = document.getElementById('sixth');
// const sevenButton = document.getElementById('seventh');

// const extraMemory = document.getElementById('extra-ram');
// const extraStorage2 = document.getElementById('extra-storage')

// oneButton.addEventListener('click', function () {
//     console.log('onenum')
// });
// twoButton.addEventListener('click', function () {
//     extraMemory.innerText = '180';
// });
// threeButton.addEventListener('click', function () {
//     extraStorage2.innerText = '0'
// });
// fourButton.addEventListener('click', function () {
//     console.log('fournum')
// });
// fiveButton.addEventListener('click', function () {
//     console.log('fivenum')
// });

document.getElementById('cost-memory0').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0;
})
document.getElementById('cost-memory16').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180;
})
// storage
document.getElementById('cost-storage256').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0;
})
document.getElementById('cost-storage512').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 100;
})
document.getElementById('cost-storage1TB').addEventListener('click', function () {
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180;
})

// delivary charge
document.getElementById('free-delivery').addEventListener('click', function () {
    const oldPrice = document.getElementById('Delivery-Charge');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0;
})
document.getElementById('charge-delivery').addEventListener('click', function () {
    const oldPrice = document.getElementById('Delivery-Charge');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 20;
})
function totalCalc() {
    document.getElementById('Best-Price').innerText = parseFloat(bestPrice);
    document.getElementById('Extra-Memory').innerText = parseInt(extraMemory);
    document.getElementById('Extra-Storage').innerText = parseInt(extraStorage);
    document.getElementById('Delivery-Charge').innerText = parseInt(deliveryCharge);
    document.getElementById('total-price').innerText = parseInt(totalPrice);
    const totalPrice = bestPrice + extraMemory + extraStorage + deliveryCharge;


}