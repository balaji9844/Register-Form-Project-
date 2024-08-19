var register_button = document.querySelector("button");

register_button.addEventListener("click",function(){
    event.preventDefault();
    register_button.textContent="registered";
    register_button.style.backgroundColor="green";

})