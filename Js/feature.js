

// show cash out form
document.getElementById('btn-show-cashout').addEventListener('click' , function(){

    // show csh out btn click
    console.log(' show cash ot btn')
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
}) ;

// show and money form and hide the cash form
document.getElementById('btn-show-addmoney').addEventListener('click', function(){
 
document.getElementById('add-money-form').classList.remove('hidden');

document.getElementById('cash-out-form').classList.add('hidden');

})