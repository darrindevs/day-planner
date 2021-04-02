//* Create global variables 
var date = moment().format("llll");


//* Lets test moment.js 
console.log(date);// we should see the current day, date and time

//* Place the the current day and time in the jumbrotron
//$("#currentDT").text(moment().format("llll"));
$("#currentDT").append(date);


//* Create logic to dynamically style the inputs based on time past/present/future 


//* Create an event listener for the click on the Save icon for each row 
// 9am
$("#save-9")//button id
.on("click", function() {
    var entertext = $("#9").val();
    localStorage.setItem("9:00", entertext);
});
$("#9").val(localStorage.getItem("9:00"));

// 10am
$("#save-10")//button id
.on("click", function() {
    var entertext = $("#10").val();
    localStorage.setItem("10:00", entertext);
});
$("#10").val(localStorage.getItem("10:00"));

// 11am
$("#save-11")//button id
.on("click", function() {
    var entertext = $("#11").val();
    localStorage.setItem("11:00", entertext);
});
$("#11").val(localStorage.getItem("11:00"));

// 12pm
$("#save-12")//button id
.on("click", function() {
    var entertext = $("#12").val();
    localStorage.setItem("12:00", entertext);
});
$("#12").val(localStorage.getItem("12:00"));

// 1pm
$("#save-13")//button id
.on("click", function() {
    var entertext = $("#13").val();
    localStorage.setItem("13:00", entertext);
});
$("#13").val(localStorage.getItem("13:00"));

// 2pm
$("#save-14")//button id
.on("click", function() {
    var entertext = $("#14").val();
    localStorage.setItem("14:00", entertext);
});
$("#14").val(localStorage.getItem("14:00"));

// 3pm
$("#save-15")//button id
.on("click", function() {
    var entertext = $("#15").val();
    localStorage.setItem("15:00", entertext);
});
$("#15").val(localStorage.getItem("15:00"));

// 4pm
$("#save-16")//button id
.on("click", function() {
    var entertext = $("#16").val();
    localStorage.setItem("16:00", entertext);
});
$("#16").val(localStorage.getItem("16:00"));

// 5pm
$("#save-17")//button id
.on("click", function() {
    var entertext = $("#17").val();
    localStorage.setItem("17:00", entertext);
});
$("#17").val(localStorage.getItem("17:00"));