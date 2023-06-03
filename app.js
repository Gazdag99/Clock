//ALL THE ELEMENTS STORED
let date, h, m, s, month, season, timeOfDay, pH, pM, pS;
let timer = document.getElementById("timer");
//RAINBOW COLORS

function showTime() {
  date = new Date();
  
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  month = date.getMonth();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  pH = parseInt(h);
  pM = parseInt(m);
  pS = parseInt(s);

  //Teszting Times


  timer.innerText = `${h}:${m}:${s}`;
  setTimeout(showTime, 1000);
  getTimeOfDay(pH);
  console.log(timeOfDay);
  setBackground();
}

showTime();

switch (month) {
  case 11:
  case 0:
  case 1:
    season = "winter";
    break;
  case 2:
  case 3:
  case 4:
    season = "spring";
    break;
  case 5:
  case 6:
  case 7:
    season = "summer";
    break;
  case 8:
  case 9:
  case 10:
    season = "autumn";
    break;
}

function getTimeOfDay(hours){

  if(season === "summer"){
    if(hours >= 5 && hours < 6){
      timeOfDay = "sun";
      console.log("sunrise");
    } else if(hours >= 6 && hours < 21){
      timeOfDay ='day';
      console.log("daytime");
    } else if(hours >=21 && hours < 22){
      timeOfDay = "sun";
      console.log("sunset");
    } else if(hours >= 22 || hours < 5 ){
      timeOfDay = "night";
      console.log("night");
      
    }
  };

  if(season === "winter"){
    if(hours >= 8 && hours < 9){
      timeOfDay = "sun";
      console.log("sunrise");
    } else if(hours >= 9 && hours < 16){
      timeOfDay ='day';
      console.log("daytime");
    } else if(hours >= 16 && hours < 17){
      timeOfDay = "sun";
      console.log("sunset");      
    } else if(hours >= 17 || hours < 8){
      timeOfDay = "night";
      console.log("night");

    }
  };

  if(season ==="spring"){
    if(hours >= 6 && hours < 7){
      timeOfDay = "sun";
      console.log("sunrise");
    } else if(hours >= 7 && hours < 18){
      timeOfDay ='day';
      console.log("daytime");
    } else if(hours >=18 && hours < 19){
      timeOfDay = "sun";
      console.log("sunset");
    } else if(hours >= 19 || hours < 6 ){
      timeOfDay = "night";
      console.log("night");
    }
  };

  if(season ==="autumn"){
    if(hours >= 6 && hours < 7){
      timeOfDay = "sun";
      console.log("sunrise");
    } else if(hours >= 7 && hours < 17){
      timeOfDay ='day';
      console.log("daytime");
    } else if(hours >=17 && hours < 18){
      timeOfDay = "sun";
      console.log("sunset");
    } else if(hours >= 18 || hours < 6 ){
      timeOfDay = "night";
      console.log("night");
    }
  };

}

function setBackground(){
  document.body.style.background = `url(./img/${season}_${timeOfDay}.png)`
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center"
}
