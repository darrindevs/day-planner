//this also worked for event listener, but had to create for each individual time block
// 12pm
$("#save-12")
.on("click", function() {
    var text = $("#12").val();
    localStorage.setItem("12:00", text);
});
$("#12").val(localStorage.getItem("12:00"));

// 1pm
$("#save-13")
.on("click", function() {
    var text = $("#13").val();
    localStorage.setItem("13:00", text);
});
$("#13").val(localStorage.getItem("13:00")); // and so on