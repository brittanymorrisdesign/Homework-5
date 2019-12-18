$(document).ready(function() {
 
  $(".saveBtn").on("click", function() { //Event Listener in Jquery
    console.log(this);
    var value = $(this).siblings(".description").val();
    var time = $(this).attr("data-time");
    var hour = moment().hour();

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
  function setColors() {
    let currentHr = moment().format("H");
    console.log(moment().format("H"));
      $(".time-block").each(function() {
    let currentId = ($(this).attr("id"));

    if (currentHr < currentId ) {
      $(this).addClass("past")
    }
    else if (currentHr > urrentId ) {
      $(this).addClass("future")
    }
    else if (currentHr === currentId ) {
      $(this).addClass("present")
    }
  })
}




setColors();
});
