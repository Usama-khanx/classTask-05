

document.getElementById("calculateBtn").addEventListener('click', function(){

   var inputdate = document.getElementById("inputDateField").value;

   var allYears = document.getElementById("yearsBtn");
   var allMonths = document.getElementById("monthsBtn");
   var allDays = document.getElementById("datesBtn");

   if(inputdate){

      
      var birthDay = new Date(inputdate);
      
      var birthYear = birthDay.getFullYear();
      var birthMonth = birthDay.getMonth();
      var birthDate = birthDay.getDate();
      
      
      var current = new Date();
      
      var currentYear = current.getFullYear();
      var currentMonth = current.getMonth();
      var currentDate = current.getDate();
      
      
      var year = currentYear - birthYear;
      var month = currentMonth - birthMonth;
      var date = currentDate - birthDate;


    

      allYears.innerHTML = `${year}`;
      allMonths.innerHTML = `${month}`;
      allDays.innerHTML = `${date}`;

   }
   
   
})
