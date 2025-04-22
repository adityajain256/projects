let date = document.querySelector("#date");
let second = document.querySelector("#sec");
let minute = document.querySelector("#minutes");
let hour = document.querySelector("#hour");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let history = document.querySelector("#history");
let lapBtn = document.querySelector("#lap");
let dateValue = new Date();

date.innerText = `${dateValue.getDate()}/${dateValue.getMonth() + 1}/${dateValue.getFullYear()}`;

let count = 0 ;
let countMin = 0;
let countHour = 0;
let id;
startBtn.addEventListener("click",() => {
    startBtn.classList.add("hide");
    id = setInterval(() => {
        count++;
        if(count == 60){
            count = 0;
            countMin++;
            minute.innerText = countMin;
            if(countMin == 60){
                countMin = 0;
                countHour++;
                hour.innerText = countHour;
            }
        }
        second.innerText = count;
    },1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    
    
});

stopBtn.addEventListener('click', (() => {
    clearInterval(id);
    startBtn.disabled = false;
    startBtn.classList.remove("hide");
    startBtn.innerText = "Resume";
}))

lapBtn.addEventListener('click', (() => {
    let newLine = document.createElement("li");
    newLine.innerText = `Hour: ${countHour} Minute: ${countMin} Second: ${count}`;
    history.appendChild(newLine);

}));

resetBtn.addEventListener('click', (() => {
    clearInterval(id);
    count = 0;
    countMin = 0;
    countHour = 0;
    second.innerText = count;
    minute.innerText = countMin;
    hour.innerText = countHour;
    startBtn.disabled = false;

}))