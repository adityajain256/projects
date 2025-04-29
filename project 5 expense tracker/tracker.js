// theme changing button
let theme = document.querySelector("#theme");
let body = document.querySelector('body');

theme.addEventListener('click',()=>{
    theme.classList.toggle("dark");
    body.classList.toggle("darkBody");
});

// creating global variable 
let arr = []
let newArr;
//try to showcase reale time date and month in month section 
let monthH = document.querySelector("#h");
let my = new Date()
monthH.innerText = my;

// let month = document.querySelector("#month");
let date = document.querySelector("#inpDate");
let spent = document.querySelector("#inpAmount");
let description = document.querySelector('#inpDes');
let enter = document.querySelector("#enterBtn");
let mainbody = document.querySelector('main');
let newDiv;
let history = document.querySelector('#history');

enter.addEventListener("click", ()=>{

    // creating small name variable for input values 
    let dateV = date.value;
    let spentV = spent.value;
    let desV = description.value;
    let userExpense;
    let data;
    if(dateV == ''){
        alert("Enter date");
    }
    else if(spentV == ''){
        alert("Enter amount");
    }
    else if (desV == ''){
        alert("Enter some description");
    }
    // if every thing is filled then 
    else{

        // storing data inside local storage 
        userExpense = { "date": dateV, "amount": spentV, "description": desV};
        localStorage.setItem('userExpense', JSON.stringify(userExpense));
        data = JSON.parse(localStorage.getItem('userExpense'));

        // push data inside an array 
        arr.push(data); 
        newDiv = document.createElement('div');
        newDiv.style.display = "flex"
        newDiv.style.flexDirection = 'row'
    
        newDiv.innerHTML = `
            <div id="date">
                <h1>${data.date}</h1>
              </div>
              <div id="amount">
                <h1>${data.amount}</h1>
              </div>
              <div id="Description">
                <h1>${data.description}</h1>               
            </div>` 
    
        history.appendChild(newDiv);

        if(enter){
            spent.value = ''
            description.value = ''
        }
    }
    // saving global arr inside an newArr 
    localStorage.setItem('arr', JSON.stringify(arr));
    newArr = JSON.parse(localStorage.getItem('arr'));
    console.log(newArr);
    
})



// i can not understand what kind of mistake i am making but i will 

let sumo = document.querySelector('#sum');
function addd(){
    let amountt;
    let sume = 0;
    let i = 0;
    while(i<length.newArr){
        amountt[i] =  Number(newArr[i].amount);

        sume += amountt[i];
        i++;

    }
    console.log(typeof newArr[1].amount)
    console.log(amountt);
    console.log(typeof amountt);
    console.log(amountt + 10)
    console.log(sume);
    console.log(typeof sume);
    
    
    console.log(sume)
}
sumo.addEventListener('click', addd);







//creating delete button's logic
let dele = document.querySelector('#deleteBtn');

// i just reload the window so that everything got restart but i am also thinking that this button is not the last logic i should have to write few more code for it so that it can be a perfect expance tracker
function delee(){
    window.location.reload();
}

dele.addEventListener('click', delee);

// day 27-04-2025 ends and it's alredy 28-04-2025 next time i will work on sum of the expence facility 


    console.log("aditya jain");


