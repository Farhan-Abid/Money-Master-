function incomeTotal(){
    
}

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

    if( foodPrice >= 0 && rentPrice >= 0 && clothesPrice >= 0){
         // getting the total expenses

        const expensesTotal = document.getElementById('expense-total');
        const expensesTotalText = expensesTotal.innerText;
        // const fullExpenseTotal = parseFloat(expensesTotalText);
        const previousExpenseTotal = parseFloat(foodPrice + rentPrice + clothesPrice);
        
        if(previousExpenseTotal>incomeAmount){
            alert("You don't have enough money")
        }else{
            expensesTotal.innerText = previousExpenseTotal;
                    // balance after income and expenses
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(incomeAmount - previousExpenseTotal);
         balanceTotal.innerText =  previousBalanceTotal;
        }

    }
    else{
        alert('Please do not type negative numbers!');
    }
    
    
    // clear input field
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
});
    // second calculate button handler

document.getElementById('second-calculate-button').addEventListener('click', function(){
        // add income input to event handler

        const incomeInput = document.getElementById('income-input');
        const incomeAmountText = incomeInput.value;
        const incomeAmount = parseFloat(incomeAmountText);
        


        const inputSave = document.getElementById('input-save');
        const saveAmountText = inputSave.value;
        const saveAmount = parseFloat(saveAmountText);
        // inputSave.value = saveAmount;
        
        
        const previousSavingTotal = parseFloat(saveAmount / 100);
        const totalSavingAmount = previousSavingTotal * incomeAmount ;
        

   
     const balanceTotal = document.getElementById('balance-total');
 
        if(saveAmount>balanceTotal.innerText){
            alert("Sorry!");
        }else{
            const totalSaving = document.getElementById('total-saving');
            totalSaving.innerText=totalSavingAmount;
        }
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;
    const previousRemainingBalance = parseFloat(balanceTotalinnerText - totalSavingAmount);
    remainingBalance.innerText = previousRemainingBalance;
});


    

