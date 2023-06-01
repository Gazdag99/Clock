//ALL THE ELEMENTS STORED 
let date,h,m,s; 
let timer = document.getElementById("timer"); 
//RAINBOW COLORS 

function showTime(){
   date = new Date();
    h = date.getHours(); 
    m = date.getMinutes(); 
    s = date.getSeconds(); 

    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s; 

    timer.innerText= `${h}:${m}:${s}`
    setTimeout(showTime,1000)
}
 
showTime(); 
