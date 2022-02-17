document.getElementById('calculate-button').addEventListener('click', function(){
    // income part input 
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    
    
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
    // const fullExpenseTotal = parseFloat(expensesTotalText);
    const previousExpenseTotal = parseFloat(foodPrice + rentPrice + clothesPrice);
    expensesTotal.innerText = previousExpenseTotal;

    // balance after income and expenses
    
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(incomeAmount - previousExpenseTotal);
    balanceTotal.innerText =  previousBalanceTotal;
    
    
    // clear input field
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
});
    // second calculate button handler

    document.getElementById('second-calculate-button').addEventListener('click', function(){
        const inputSave = document.getElementById('input-save');
        const saveAmountText = inputSave.value;
        const saveAmount = parseFloat(saveAmountText);

    // savings and remaining balance code 

    const totalSaving = document.getElementById('total-saving');
    const totalSavingText = totalSaving.innerText ;
    const previousSavingTotal = parseFloat((saveAmount / 100) * incomeAmount) ;
    totalSaving.innerText = previousSavingTotal;

        
    })


    

