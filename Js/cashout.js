

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('ami click')


    const cashoutMoney =document.getElementById('input-cash-out').value ;
    console.log(cashoutMoney);

    const cashPin =document.getElementById('cash-pin-number').value ;
    console.log(cashPin);


    if(cashPin === '1234'){
        const currentBalence =document.getElementById('account-balnce').innerText ;

        const balanceFolt = parseFloat(currentBalence);
        const cashInpushFlot = parseFloat(cashoutMoney);
        const currentNew= balanceFolt - cashInpushFlot ;
    
        document.getElementById('account-balnce').innerText = currentNew
        console.log('money cash out')

    }

    else{
        alert('vul pin number diso')
    }

})