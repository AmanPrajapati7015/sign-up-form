const password1 = document.querySelector("#password");
const password2 = document.querySelector("#c-password");
const errorMessage = document.querySelector("span.pswd-error");
const form = document.querySelector("form");


function check_pswd(){
    if (password1.value== password2.value){
        password1.classList.remove("error");
        password2.classList.remove("error");
        errorMessage.style.display="none";
        form.removeAttribute("onsubmit");
    }
    else{
        password1.classList.add("error");
        password2.classList.add("error");
        errorMessage.style.display="inline";
        form.setAttribute("onsubmit", "return false;");
    }
}

password1.addEventListener("input", check_pswd);
password2.addEventListener("input", check_pswd);
