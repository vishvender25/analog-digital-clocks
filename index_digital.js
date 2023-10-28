// const rotate_second = true;

// var sec_hand = document.getElementById("sec-hand");
// var runner;

// function start(){
//     runner = setInterval(function(){
//         degrees++;
//         sec_hand.style.transform = 'rotate(' + degrees + 'deg)';
//     },50)
// }

// document.addEventListener("click" , start);

var hours = 0;
var minutes = 0;
var sec = 0;
var am_pm = "AM"

function gettime(){
var curr_date = new Date();

hours = curr_date.getHours()
minutes = curr_date.getMinutes();
sec = curr_date.getSeconds();
sec = (sec < 10) ? `0${sec}` : sec;
minutes = (minutes < 10) ? `0${minutes}` : minutes;
am_pm = (hours >= 12) ? " PM" : " AM";

update();

}

function update(){
    document.getElementById("hours").textContent =`${hours} : `;
    document.getElementById("minutes").textContent = `${minutes} : `;
    document.getElementById("seconds").textContent = sec;
    document.getElementById("am-pm").textContent = am_pm;    
}

setInterval(gettime,1000);

