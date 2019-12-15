$(document).ready(function() {
  $(".saveBtn").on("click", function() { //Event Listener in Jquery
    console.log(this);
    var value = $(this).siblings(".description").val();
    var time = $(this).siblings(".hour").text();
    
    localStorage.setItem(time, value);
  }); 
  $("#currentDay").text(moment());
  
  });