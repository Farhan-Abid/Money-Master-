function totalIncome(){
    const incomeInput = document.getElementById('income-input');
     const incomeAmount= parseFloat(incomeInput.value);
     return incomeAmount;
}

document.getElementById('calculate-button').addEventListener('click', function(){
    // income part input 
     

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
        
        if(previousExpenseTotal>totalIncome()){
            alert("You don't have enough money");
        }else{
            expensesTotal.innerText = previousExpenseTotal;
                    // balance after income and expenses
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceTotal = totalIncome() - previousExpenseTotal;
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
        const inputSave = document.getElementById('input-save');
        const saveAmount = parseFloat(inputSave.value);
        
        const previousSavingTotal = parseFloat(saveAmount / 100);
        const totalSavingAmount = previousSavingTotal * totalIncome() ;
        const balanceTotal = document.getElementById('balance-total');
 
        if(totalSavingAmount>balanceTotal.innerText){
            alert("Sorry!");
            console.log("sorry")
        }else{
            const totalSaving = document.getElementById('total-saving');
            totalSaving.innerText=totalSavingAmount;
            const remainingBalance = document.getElementById('remaining-balance');
            const previousRemainingBalance = parseInt(balanceTotal.innerText) - parseFloat(totalSavingAmount);
            remainingBalance.innerText = previousRemainingBalance;
        }
    
});


    

