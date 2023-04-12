// Register
let form = document.querySelector('.form');
let fName = document.querySelector('.fName');
let lastInput = document.querySelector('.lastNameInput');
let formBnt = document.querySelector('.form-btn');
let userInput = document.querySelector(".userNameInput");
let password = document.querySelector(".password");
let confirmpassword = document.querySelector(".confirmpassword");
let password__span = document.querySelector(".password__span");
let confirmpassword__span = document.querySelector(".confirmpassword__span");

let FnameSpan = document.querySelector('.fname-span');
let lastNameSpan = document.querySelector('.lname-span');
let userNameSpan = document.querySelector('.userNameSpan');
    

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (fName.value === '') {
        FnameSpan.classList.add('false');
        FnameSpan.textContent = 'Enter Name'
    } else {
        FnameSpan.classList.add('true');
        FnameSpan.textContent = 'Correct'
    }
    if (lastInput.value === '') {
        lastNameSpan.classList.add('false');
        lastNameSpan.textContent = 'Enter LastName'
    } else {
        lastNameSpan.classList.add('true');
        lastNameSpan.textContent = 'Correct';
    }

    if (userInput.value === '') {
        userNameSpan.classList.add('false');
        userNameSpan.textContent = 'Enter NickName';
    } else {
        userNameSpan.classList.add('true');
        userNameSpan.textContent = 'Correct';
    }
    if (password.value && confirmpassword.value) {
        if(password.value === confirmpassword.value){
            confirmpassword__span.textContent = 'Correct';
            confirmpassword__span.classList.add = 'true';
        }else{
            confirmpassword__span.textContent = "Confirm password is inorrect";
            confirmpassword__span.style.color = "red";
        }
      } else {
        if (!password.value) {
          password__span.textContent = "Enter Password";
          password__span.style.color = "red";
        } 
        if (!confirmpassword.value) {
          confirmpassword__span.textContent = "Enter ConfirmPassword";
          confirmpassword__span.style.color = "red";
        }
      }
})