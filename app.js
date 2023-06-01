//ALL THE ELEMENTS STORED 
let date,h,m,s; 
let timer = document.getElementById("timer"); 

const hexCodes = [
    "#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FFFF00",
    "#CCFF00", "#99FF00", "#66FF00", "#33FF00", "#00FF00", "#00FF33",
    "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#00CCFF", "#0099FF",
    "#0066FF", "#0033FF", "#0000FF", "#3300FF", "#6600FF", "#9900FF",
    "#CC00FF", "#FF00FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033",
    "#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FFFF00",
    "#CCFF00", "#99FF00", "#66FF00", "#33FF00", "#00FF00", "#00FF33",
    "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#00CCFF", "#0099FF",
    "#0066FF", "#0033FF", "#0000FF", "#3300FF", "#6600FF", "#9900FF",
    "#CC00FF", "#FF00FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033"
  ];

  
function showTime(){
   date = new Date();
    h = date.getHours(); 
    m = date.getMinutes(); 
    s = date.getSeconds(); 

    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s; 

    timer.innerText= `${h}:${m}:${s}`
    rainbowColor();
    setTimeout(showTime,1000)
}
 
showTime(); 

function rainbowColor(){
    if (s >= 1 && s <= hexCodes.length) {
        document.body.style.background = hexCodes[s - 1];
      }
}