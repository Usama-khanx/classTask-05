

document.getElementById("calculateBtn").addEventListener('click', function(){

   var inputdate = document.getElementById("inputDateField");

    var allYears = document.getElementById("yearsBtn");
    var allMonths = document.getElementById("monthsBtn");
    var allDays = document.getElementById("daysBtn");



    allDays.textContent = inputdate.value;
    allMonths.textContent = inputdate.value;
    allYears.textContent = inputdate.value;

    var mydate = new Date;

    var yr = mydate.getFullYear()
    var mn = mydate.getDate()
    var dd =mydate.getDay()

    

    // var today = new Date();

    // var doomsday = new Date("June 30, 2035");
    // var msToday = today.getTime();
    // var msDoomsday = doomsday.getTime();
    // var msDiff = msDoomsday - msToday;
    // var dDiff = msDiff / (1000 * 60 * 60 * 24);
    // dDiff = Math.floor(dDiff);

    // console.log(dDiff)






})

