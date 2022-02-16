document.getElementById('calculate-button').addEventListener('click', function(){
    // income part input 
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;
    
    // expenses input 
    const foodInput = document.getElementById('food-input');
    const foodPriceText = foodInput.value;
    const foodPrice = parseFloat(foodPriceText);
    
    const rentInput = document.getElementById('rent-input');
    const rentPriceText = rentInput.value;
    const rentPrice = parseFloat(rentPriceText);
    
    const clothesInput = document.getElementById('clothes-input');
    const clothesPriceText = clothesInput.value;
    const clothesPrice = parseFloat(clothesPriceText);

    // getting the total expenses

    const expensesTotal = document.getElementById('expense-total');
    const expensesTotalText = expensesTotal.innerText;
    expensesTotal.innerText = foodPrice + rentPrice + clothesPrice;
    
    // clear input field
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';


    

})