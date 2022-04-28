function storeDetails(){

    var emailor = document.getElementById('emailInput');
    var userName = document.getElementById('floatingUser');
    var pwd = document.getElementById('floatingPwd');
    var pwdCon = document.getElementById('pwdConfirm');
    
    
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(emailor.value.length == 0){
        alert('Please fill in email');

    }else if(userName.value.length == 0){
        alert('Please fill in username')
    
    }else if(pwd.value.length == 0){
        alert('Please fill in password');

    }else if(pwdCon.value.length == 0){
        alert('Please confirm paasword');
    }
    else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}