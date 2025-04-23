// let body = document.querySelector("body");
// let mainCont = document.querySelector("#list");
// let mainContainer = document.querySelector("#container");
// let addBtn = document.querySelector("#add");
// let input = document.querySelector("#input");
// let changeBtn = document.querySelector("#btnLChange");


// addBtn.addEventListener("click", () => {
//     const newDiv = document.createElement('li');
    
//     newDiv.innerText = input.value.trim();
//     newDiv.style.height = "30px";
//     newDiv.style.display = "flex"
//     newDiv.style.width = "90%";
//     newDiv.style.backgroundColor = "rgb(203, 118, 39)";
//     newDiv.style.color = "white";
//     newDiv.style.justifyContent = "space-between"
    
//     mainCont.appendChild(newDiv);
    
//     const dele = document.createElement("button");
//     dele.style.backgroundColor = "burlywood";
//     dele.innerText = "-"
//     dele.style.height = "20px";
//     dele.style.width = "auto";
    
    
//     const complete = document.createElement('button');
//     complete.style.height = "20px"
//     complete.style.width = "auto"
//     complete.innerText = "."
//     complete.style.borderRadius = "2px"
//     // complete.style.backgroundColor = "burlywood"
//     let text = newDiv.innerText
    
//     complete.addEventListener("click",()=>{
//     complete.classList.toggle("btn4")
//     newDiv.classList.toggle("line")
    
//   })
  
  
//   dele.addEventListener("click",()=>{
//       mainCont.removeChild(newDiv)
//     })

//     newDiv.prepend(complete)
//   newDiv.appendChild(dele);
// });

// changeBtn.addEventListener("click", () => {
//   if (changeBtn.innerText === "Dark") {
//     changeBtn.innerText = "Light";
//   } else {
//     changeBtn.innerText = "Dark";
//   }
//   mainContainer.classList.toggle("conDT");

//   changeBtn.classList.toggle("btnDChange");
//   body.classList.toggle("darkTheme");
// });

let body = document.querySelector("body");
let mainCont = document.querySelector("#list");
let mainContainer = document.querySelector("#container");
let addBtn = document.querySelector("#add");
let input = document.querySelector("#input");
let changeBtn = document.querySelector("#btnLChange");

// Add event listener for adding tasks
addBtn.addEventListener("click", () => {
  const newDiv = document.createElement('li');
  
  newDiv.innerText = input.value.trim();
  newDiv.style.height = "30px";
  newDiv.style.display = "flex";
  newDiv.style.width = "90%";
  newDiv.style.backgroundColor = "rgb(203, 118, 39)";
  newDiv.style.color = "white";
  newDiv.style.justifyContent = "space-between";

  mainCont.appendChild(newDiv);
  
  const dele = document.createElement("button");
  dele.style.backgroundColor = "burlywood";
  dele.innerText = "-";
  dele.style.height = "20px";
  dele.style.width = "auto";

  const complete = document.createElement('button');
  complete.style.height = "20px";
  complete.style.width = "auto";
  complete.innerText = ".";
  complete.style.borderRadius = "2px";
  
  newDiv.prepend(complete);
  newDiv.appendChild(dele);
});

// Event delegation: One listener for all buttons inside the list
mainCont.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const li = e.target.parentElement;

    if (e.target.innerText === "-") {
      mainCont.removeChild(li);
    }

    if (e.target.innerText === ".") {
      e.target.classList.toggle("btn4");
      li.classList.toggle("line");
    }
  }
});

// Dark mode toggle
changeBtn.addEventListener("click", () => {
  if (changeBtn.innerText === "Dark") {
    changeBtn.innerText = "Light";
  } else {
    changeBtn.innerText = "Dark";
  }
  mainContainer.classList.toggle("conDT");
  changeBtn.classList.toggle("btnDChange");
  body.classList.toggle("darkTheme");
});
