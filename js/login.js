

document.getElementById('btn-login')
.addEventListener('click',function(event){
  event.preventDefault()
    console.log('this is clickable btn');
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber =document.getElementById('pin-number').value;

    if(phoneNumber === '12' && pinNumber === '1234'){
        console.log('you are login')
        window.location.href = '/home.html';
    }
    else{
        alert('your phone or pin no match')
    }
    
})
