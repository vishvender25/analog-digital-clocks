
function getDate(){
    var currDate = new Date();
    var sec = currDate.getSeconds();
    var min = currDate.getMinutes();
    var hour = currDate.getHours();
    rotate_hands(sec,min, hour);
}

function rotate_hands(sec, min, hour){
   var sec_ratio = sec/60;
   var min_ratio = (min+(sec/60))/60;
   var hour_ratio = (hour + (min/60) + (sec/3600)) /12;
    
    var angle_sec = sec_ratio*360;
    var angle_min = (min_ratio * 360);
    var angle_hour = (hour_ratio*360);
     document.querySelector("[hand=sec]").style.transform = `rotate(${angle_sec}deg)`
     document.querySelector("[hand=min]").style.transform = `rotate(${angle_min}deg)`
     document.querySelector("[hand=hour]").style.transform = `rotate(${angle_hour}deg)`

}


// document.querySelector("[hand=hour]");
// document.querySelector("[hand=min]");
// document.querySelector("[hand=sec]");

setInterval(getDate, 1000);

