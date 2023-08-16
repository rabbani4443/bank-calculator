document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountSting = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountSting);

    depositField.value ='';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalSting = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalSting);


    const newDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSting = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSting);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = newBalanceTotal;

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountSting = withdrawField.value;
    const newWithdrawAmount = parseFloat (newWithdrawAmountSting);

    withdrawField.value = ''

    const withdrawElement = document.getElementById('withdraw-total');
    const newWithdrawTotalAmountSting = withdrawElement.innerText;
    const newWithdrawTotalAmount = parseFloat(newWithdrawTotalAmountSting);

    const newWithdraw = newWithdrawTotalAmount + newWithdrawAmount;

    withdrawElement.innerText = newWithdraw;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSting = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSting);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount

    balanceTotalElement .innerText = newBalanceTotal
})