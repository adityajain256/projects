let theme = document.querySelector("#theme");
let body = document.querySelector('body')
// theme changing button
theme.addEventListener('click',()=>{
    theme.classList.toggle("dark");
    body.classList.toggle("darkBody");
});

// creating global variable 
let arr = []

//try to showcase reale time date and month in month section 
let monthH = document.querySelector("#h");

let my = new Date()

monthH.innerText = my
// let month = document.querySelector("#month");
let date = document.querySelector("#inpDate");
let spent = document.querySelector("#inpAmount");
let description = document.querySelector('#inpDes');
let enter = document.querySelector("#enterBtn");
let mainbody = document.querySelector('main');
let newDiv;


enter.addEventListener("click", ()=>{

    // creating small name variable for input values 
    // let monthV = month.value;
    let dateV = date.value;
    let spentV = spent.value;
    let desV = description.value;
    let userExpense;
    let data;

    // checking condition whether every thing is filled or not  
    // if(monthV == ''){
    //     // alert("Enter motnh");
    // }
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

        data = JSON.parse(localStorage.getItem('userExpense'))

        // console.log(data.month);

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
    
        mainbody.after(newDiv);
    }
    localStorage.setItem('arr', JSON.stringify(arr));
    newArr = JSON.parse(localStorage.getItem('arr'));
    console.log(newArr);

});

let dele = document.querySelector('#deleteBtn');

dele.addEventListener('click', ()=>{
    newDiv.innerHTML = '';
    localStorage.removeItem(newArr.data)
})