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

})