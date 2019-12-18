$(document).ready(function() {
 
  $(".saveBtn").on("click", function() { //Event Listener in Jquery
    console.log(this);
    var value = $(this).siblings(".description").val();
    var time = $(this).siblings(".hour").text();
    
    localStorage.setItem(time, value);
  }); 
 
    // Setting up date and time
  $("#currentDay").text(moment());
  
    // Update seconds
    setInterval(displayTodaysDate, 1000);

    // Update date on page every second
    currentDate = $("#currentDay");
    displayTodaysDate();

    function displayTodaysDate() {
    // Display date at top of page in this format
    currentDate.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));  
  }
  //Store hours into an array
  var timeArray = [];
  //Loop through hours and push them into an array
for (var i = 9; i < 18; i++) {
    timeArray.push(moment().hour(i).format("h, a"));
}
console.log(timeArray)

  // Background colors
for (var i = 0; i < timeArray.length; i++) {
    var hour = moment().hour();
    var currentId = parseInt($(this).attr("id"))

    if (currentId < hour) {
      $(this).addClass("past")
    }
    else if (currentId > hour) {
      $(this).addClass("future")
    }
    else if (currentId === hour) {
      $(this).addClass("present")
    }
  }
});
