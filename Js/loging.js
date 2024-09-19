
// form submit reloding  the page

// step -1 set event handle
document.getElementById('button-id').addEventListener('click', function(event){
    // step-2: prevent default behavior (prevent reloading browser)
event.preventDefault(); // vejal to beginers
console.log('logig btn  click');


// steo-3: get the phone number and the pin number 
const  getPhone = document.getElementById('phone-num').value;

const pinNumber = document.getElementById('pin-number').value
  // console.log(getPhone, pinNumber);

  // step -4: validate phone and pin
  //this is temporary .tou should not like this

  if (phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are loging')
  }
  // step-5: allow the user to use the website
  else{
    alert('worng phone number or pin');
  }

document.getElementById('button-id').addEventListener('click', function(event){
event.preventDefault();
})




})