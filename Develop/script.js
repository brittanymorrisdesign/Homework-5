$(document).ready(function() {
  $(".saveBtn").on("click", function() { //Event Listener in Jquery
    console.log(this);
    var value = $(this).siblings(".description").val();
    var time = $(this).siblings(".hour").text();
    
    localStorage.setItem(time, value);
  }); 
 
   
    // Setting up date and time
  $("#currentDay").text(moment());
  
    // Update date on page every second
    currentDate = $("#currentDay");
    displayTodaysDate();

    function displayTodaysDate() {
    // Display date at top of page in this format
    currentDate.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));  
  }














  
  });
