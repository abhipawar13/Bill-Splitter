let amountInput=document.querySelector('#amount');
let friendsInput=document.querySelector('#friends');
let errorText="";
let result="";
let resultText=document.querySelector('#resultText');
let messageDiv=document.querySelector('.message')

function cal(){
if(amountInput.value !=='' && friendsInput.value!==''){
    result=eval(`${amountInput.value}/${friendsInput.value}`);
    resultText.textContent=`${result} Rs per person`;
   
    messageDiv.classList.add("success");
}
else if(amountInput.value ===''&& friendsInput.value===''){
    errorText="Amount and Number of friends need to filled up...";
    resultText.textContent=errorText;
    messageDiv.classList.add('error');

    // console.log(errorText);
}
else if(friendsInput.value ==''){
    errorText="Number of friends need to filled up..."
    resultText.textContent=errorText;
    messageDiv.classList.add('error');
    // console.log(errorText);
}
else{
    errorText="Amount need to be fiiled up..."
    resultText.textContent=errorText;
    messageDiv.classList.add('error');
    // console.log(errorText);
}
    // console.log(amountInput.value);
    // console.log(friendsInput.value);
}