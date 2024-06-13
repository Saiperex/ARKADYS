const user_label = document.querySelector(".user label");
const user_input = document.querySelector(".user input");

const password_label = document.querySelector(".password label");
const password_input = document.querySelector(".password input");
//user
user_input.addEventListener("focus", function()
{
    if (user_input.value === "")
    {
        user_label.classList.add('label_activo');
        user_input.classList.add('input_activo');
    }
})
user_input.addEventListener("blur", function() {
    if (user_input.value === "") {
        user_label.classList.remove('label_activo');
        user_input.classList.remove('input_activo')
    }
});
//password
password_input.addEventListener("focus", function()
{
    if (password_input.value === "")
    {
        password_label.classList.add('label_activo');
        password_input.classList.add('input_activo');
    }
})
password_input.addEventListener("blur", function() {
    if (password_input.value === "") {
        password_label.classList.remove('label_activo');
        password_input.type = "password";
        password_input.classList.remove('input_activo');
    }
});
//ojo
const eye = document.querySelector(".password i")
eye.addEventListener("click", function() {
    if (password_input.value !== "") { 
        if (password_input.type === "password") {
            password_input.type = "text";
        } else {
            password_input.type = "password";
        }
    }
});
