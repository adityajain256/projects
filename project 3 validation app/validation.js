let inptName = document.querySelector("#inp");
let inptEmail = document.querySelector("#inpEmail");
let submitBtn = document.querySelector("#button");
let message = document.querySelector("#mess");
let div = document.querySelector("#last")

function submit(event){
    event.preventDefault();
    const fullName = inptName.value;
    const Email = inptEmail.value;
    message.style.margin ="20px"

    if(fullName.length == 0){
        message.innerText = "First enter your name then submit the form"
        message.classList.add('error');
    }
    else if(fullName.length < 3){
        message.innerText = "Name must have minimum 3 characters"
        message.classList.add('error')
    }
    
    else if(Email.length < 9 || !Email.includes('@') || !Email.includes('.com')){
        message.innerText = "Enter a valid email"
        message.classList.add('error')
    }

    else{
        submitBtn.innerText = "Submitted";
        message.innerText = "Your form is submitted succesfully"
        message.classList.add('successful')
        alert("submitted")
        message.classList.remove('error')
    }
    
    
}

const resetButton = document.createElement('button');
resetButton.innerText = "RESET";
resetButton.classList.add("reset")

div.appendChild(resetButton);


resetButton.addEventListener("click",()=>{
    inptName.value = "";
    inptEmail.value = "";

})

submitBtn.addEventListener("click", submit)

inptName.addEventListener("input", () => {
    if (inptName.value.length < 3) {
        message.innerText = "Name must be at least 3 characters";
        message.classList.add("error");
    } else {
        message.innerText = "";
        message.classList.remove("error");
    }

    if(!Email.includes("@") || !Email.includes(".com")){
        message.innerText = "Enter a valid email";
        message.classList.add('error');
    }else{
        message.innerText = "";
        message.classList.remove("error");
    }
});
