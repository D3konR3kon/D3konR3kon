
const signUp = e => {
    let email = document.getElementById('emailInput').value,
        pwd = document.getElementById('floatingPwd').value,
        confirmaton = document.getElementById('pwdConfirm').value;
        

        // campare password and confirmation paswword
        if(pwd!=confirmaton){
            alert("does not match");
            return false
        }
        
   
        let formData = JSON.parse(localStorage.getItem('formData')) || [];

        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
        data.email == email && 
        data.pwd == pwd
        );
    
     if(!exist){
         formData.push({ email, pwd, confirmaton });
         localStorage.setItem('formData', JSON.stringify(formData));
         document.querySelector('.theForm').reset(); // resetting the form
         //document.getElementById('').focus();
         alert("Account Created.\n\n Please continue.");
     }
     else{
         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
     }
     //stops from loading
     e.preventDefault(); 
}
// the sign in function 
function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}