

document.getElementById("calculateBtn").addEventListener('click', function(){

   var inputdate = document.getElementById("inputDateField").value;

   var allYears = document.getElementById("yearsBtn");
   var allMonths = document.getElementById("monthsBtn");
   var allDays = document.getElementById("daysBtn");

   if(inputdate){
    var mydate = new Date;

    var yr = mydate.getFullYear()
    var mn = mydate.getDate()
    var dd =mydate.getDay()

    allDays.textContent += dd;
    allMonths.textContent += mn;
    allYears.textContent += yr;

   }
   
})
