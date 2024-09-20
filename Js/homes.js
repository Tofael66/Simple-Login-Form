 
 //add money to the account

 //step-1: add event handler
 // prevent page reload after form submit
 //step-2: get bmoney handle to the add money button inside the form 
// step-3: verify the pin number




// step-1: add an event handler to the add money buton insid the form 
 document.getElementById('btn-add-money').addEventListener('click', function(event){
   // prevent page reload after form submit
   event.preventDefault();
//    console.log('ami clik hossi')


    // step-2: get money to be added to the account
 const addMoneyInput = document.getElementById('input-add-money').value ;
 console.log(addMoneyInput);

 // get the pin number
 const pinNumberInput =document.getElementById('input-pin-number').value ;
 console.log(pinNumberInput);

 //step-3: verify pin number
 // wrong way to validate pin number
  if (pinNumberInput === '1234'){
    console.log('adding money tom the account')

   //step-4: get the current blance
   const blance = document.getElementById('account-balnce').innerText ;
   console.log(typeof blance);

   // step-5: add addMoneyInput with balance
  const addMoneyNumber = parseFloat(addMoneyInput);
  const balanceNumber = parseFloat(blance);
  const newBlance = addMoneyNumber + balanceNumber ;
  console.log( newBlance);


  // step-6 update the main balance 
  document.getElementById('account-balnce').innerText = newBlance ;


 }

 else {
    alert('Failed to add money please try agin');
 }


 })

