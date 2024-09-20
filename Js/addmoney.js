/**
 * 1. add event listener to the add money button ( form submit)
 * make sure the preventDefault so that page doesn't reloads
 * 2. get the money user wants to add
 * also, get hte pin number add 
 * 3. verify the pin number , for wrong pin number ==> failed to add for right pin number , allow to add the number to the account balance
 * 
 * 4. get the current balance 
 * 5. add money to be added eith the current balance 
 * 
 * 6. display/ update the balance in the Dom/Ui
 * 
 */



document.getElementById('btn-add-money').addEventListener('click' , function(event){
    event.preventDefault();
    console.log('tofal ami tik aci')


    //step-2; get the addmoney valu
    const addMoney = document.getElementById('input-add-money').value ;
    console.log(addMoney)

    //step-3: get the pin number

    const pinNumber = document.getElementById('input-pin-number').value ;
    console.log(pinNumber);

    //step-4: chek the pin number

    if( pinNumber === '1234'){
        
         const addMoneyInput = document.getElementById('account-balnce').innerText ;
       const addCurrentBalance = parseFloat(addMoneyInput);
       const addIputBalance = parseFloat(addMoney);
       const newwBalance = addCurrentBalance + addIputBalance ;
       document.getElementById('account-balnce').innerText = newwBalance ;


        console.log('u can add money')
    }

    else{
        alert('plaese cheak your pin number')
    }

})
