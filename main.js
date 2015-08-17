document.addEventListener("DOMContentLoaded", function(event) { 
  findTimezone();
  window.setInterval(function(){
    findTimezone();
  }, 1000);
});

const targetHour = 17;
var cities = new Array();
cities[-12] = "Pacific Ocean";
cities[-11] = "Pago Pago, American Samoa"; 
cities[-10] = "Pape'ete, French Polynesia";
cities[-9] = "Gambier Islands, French Polynesia"; 
cities[-8] = "Adamstown, Pitcairn Islands";
cities[-7] = "Western USA/Canada"; 
cities[-6] = "Guatemala City, Guatemala"; 
cities[-5] = "Bogota, Columbia"; 
cities[-4] = "Santiago, Chile"; 
cities[-3] = "Sao Paulo, Brazil"; 
cities[-2] = "Atlantic Ocean"; 
cities[-1] = "Praia, Cape Verde"; 
cities[0] = "London, England"; 
cities[1] = "Lagos, Nigeria"; 
cities[2] = "Cairo, Egypt"; 
cities[3] = "Moscow, Russia"; 
cities[4] = "Baku, Azerbaijan"; 
cities[5] = "Karachi, Pakistan"; 
cities[6] = "Dhaka, Bangladesh"; 
cities[7] = "Jakarta, Indonesia"; 
cities[8] = "Guangzhou, China"; 
cities[9] = "Tokyo, Japan"; 
cities[10] = "Sydney, Australia"; 
cities[11] = "Noumea, New Caledonia";
cities[12] = "Auckland, New Zealand"; 

function getOffset() {
  var utcHour = new Date().getUTCHours();
  if(utcHour == 0) utcHour = 24;
  var offset = targetHour - utcHour;
  if(offset > 12) offset = offset - 24;
  return offset;
}

function getCity(offset) {
  return cities[offset];
}

function getTime(offset) {
  var d = new Date();

  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  var nd = new Date(utc + (3600000*offset));

  return nd;
}

function findTimezone() {
  var cityContainer = document.getElementById('cityContainer');
  var timeContainer = document.getElementById('timeContainer');
  var offset = getOffset();
  cityContainer.innerHTML = getCity(offset);
  timeContainer.innerHTML = getTime(offset).toLocaleTimeString();
};
