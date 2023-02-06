let fName = document.getElementById('first_name');
let sName = document.getElementById('last_name');
let email= document.getElementById('e_mail');
let tel = document.getElementById('tel_number');
let usPas = document.getElementById('user_password');
let confPas = document.getElementById('user_password_conf');

let fNameError = document.getElementById('first_name_error');
let sNameError = document.getElementById('second_name_error');
let emailError = document.getElementById('email_error');
let telError = document.getElementById('tel_number_error');
let usPasError = document.getElementById('user_password_error');
let confPasError = document.getElementById('confirm_password_error');

fName.addEventListener('input', function (event) {
    if(fName.value ===''){
        fNameError.innerText = '*Type your name';
    }else{
        fNameError.innerText = '';
    }
})

sName.addEventListener('input', function (event) {
    if(sName.value ===''){
        sNameError.innerText = '*Type your last name';
    }else{
        sNameError.innerText = '';
    }
})

email.addEventListener('input', function (event) {
    if(email.value ===''){
        emailError.innerText = '*Type your e-mail';
    }else{
        emailError.innerText = '';
    }
})

tel.addEventListener('input', function (event) {
    if(tel.value ===''){
        telError.innerText = '*Type your phone number';
    }else{
        telError.innerText = '';
    }
})

usPas.addEventListener('input', function (event) {
    if(usPas.value ===''){
        usPasError.innerText = '*Type your password';
    }else{
        usPasError.innerText = '';
    }
})
function check(){
    if(usPas.value.length > 5)
    {
        usPasError.innerHTML = ""
    }else{
        usPasError.innerHTML = "*You have to enter at least 5 digit!"
    return;
    }
    
    if(usPas.value == confPas.value){
        usPasError.innerHTML = ''
    }else{
        usPasError.innerHTML = '*Your passwords do not match'
    }
}
        
    