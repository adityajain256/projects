let number = document.querySelector('h3');
let incBtn = document.querySelector('#inc');
let resetBtn = document.querySelector('#reset');
let change = document.querySelector('#change');


incBtn.addEventListener("click",()=>{
    let newN = parseInt(number.innerText);
    newN += 1;

    number.innerText = newN
})

resetBtn.addEventListener("click",()=>{
    alert("Count reseted! ")
    let newNumber = parseInt(number.innerText);

    newNumber = 0;

    number.innerText = newNumber;
})

change.addEventListener("click", ()=>{
    document.querySelector("#header").classList.toggle('headerDark')
    change.classList.toggle("dark")
    document.querySelector("body").classList.toggle('light')
    document.querySelector('#count').classList.toggle("countDark")
})
