let form = document.querySelector(".login-form");
let password = document.querySelector(".password");
let confirmpassword = document.querySelector(".confirmpassword");
let password__span = document.querySelector(".password__span");
let confirmpassword__span = document.querySelector(".confirmpassword__span");
let btn = document.querySelector(".login-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password.value && confirmpassword.value) {
    if(password.value === confirmpassword.value){
        
    }else{
        confirmpassword__span.textContent = "Confirm password is inorrect";
        confirmpassword__span.style.color = "red";
    }
  } else {
    if (password.value) {
      password.classList.add('border-green');
    } else{
      password__span.textContent = "Enter Password";
      password__span.style.color = "red";
    }
    if (confirmpassword.value) {
      confirmpassword.classList.add('border-green');
     
    }else{
      confirmpassword__span.textContent = "Enter ConfirmPassword";
      confirmpassword__span.style.color = "red";
    }
  }
});

password.addEventListener('keydown',() => {
    password__span.textContent = ''
    confirmpassword__span.textContent = ''
})

confirmpassword.addEventListener('keydown',() => {
    password__span.textContent = ''
    confirmpassword__span.textContent = ''
})


// document.querySelector('.login-form').addEventListener('submit', function(e) {
//   e.preventDefault();


//   const username = document.getElementById('name').value;
//   const password = document.getElementById('password').value;

//   if (username.trim() === '' || password.trim() === '') {
//     alert('Please username and password.');
//   }

//   console.log('Performing login with username:', username, 'and password:', password);
// });



