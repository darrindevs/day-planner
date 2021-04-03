//* Create global variables 
var date = moment().format("llll");

//* Lets test moment.js 
console.log("it is now " + date);// we should see the current day, date and time

//* Place the the current day and time in the jumbrotron
//$("#currentDT").text(moment().format("llll"));
$("#currentDT").append(date);


//* Create logic to dynamically style the inputs based on time past/present/future 

// Moment.js gets current date and time 
var now = new Date().getHours();
console.log("now=" + now);

if (now > 9) {
    $("#9").addClass("past");
} else if (now >= 9 && now < 10) {
    $("#9").addClass("present");
} else if (now < 9) {
    $("#9").addClass("future");
}

if (now > 10) {
    $("#10").addClass("past");
} else if (now >= 10 && now < 11) {
    $("#10").addClass("present");
} else if (now < 10) {
    $("#10").addClass("future");
}

if (now > 11) {
    $("#11").addClass("past");
} else if (now >= 11 && now < 12) {
    $("#11").addClass("present");
} else if (now < 11) {
    $("#11").addClass("future");
}

if (now > 12) {
    $("#12").addClass("past");
} else if (now >= 12 && now < 13) {
    $("#12").addClass("present");
} else if (now < 12) {
    $("#12").addClass("future");
}

if (now > 13) {
    $("#13").addClass("past");
} else if (now >= 13 && now < 14) {
    $("#13").addClass("present");
} else if (now < 13) {
    $("#13").addClass("future");
}

if (now > 14) {
    $("#14").addClass("past");
} else if (now >= 14 && now < 15) {
    $("#14").addClass("present");
} else if (now < 14) {
    $("#14").addClass("future");
}

if (now > 15) {
    $("#15").addClass("past");
} else if (now >= 15 && now < 16) {
    $("#15").addClass("present");
} else if (now < 15) {
    $("#15").addClass("future");
}

if (now > 16) {
    $("#16").addClass("past");
} else if (now >= 16 && now < 17) {
    $("#16").addClass("present");
} else if (now < 16) {
    $("#16").addClass("future");
}

if (now > 17) {
    $("#17").addClass("past");
} else if (now >= 17 && now < 18) {
    $("#17").addClass("present");
} else if (now < 17) {
    $("#17").addClass("future");
}

if (now > 18) {
    $("#18").addClass("past");
} else if (now >= 18 && now < 19) {
    $("#17").addClass("present");
} else if (now < 18) {
    $("#18").addClass("future");
};

//* One click listener 

var rowContEl = $("#row-container");// we are listening on the entire container 
rowContEl.on('click', '.row-btn', function (event) {
    // within the rowContEl container we want to target clicks on the buttons = row-btn classes
    console.log("hello");// print hello if the click event is working 
    console.log(event.target);// now print the element that is clicked 
    var elementID = $(this).attr('id'); // make var elementID the value of the id attribute
    console.log("hey" + elementID);// check it by console logging - the result is "save-9" etc - the button id
    console.log(elementID.slice(5));// check to see what we get if we slice the first 5 characters = 9
    elementID = elementID.slice(5); // we now want to update elementID to equal "9" instead of "save-9" because....
    var text = $("#" + elementID).val();//because we want to make var text equal to the input id of "9", so we do some slicing and concatenation to set the value of text to "#9" etc
    localStorage.setItem(elementID + ":00", text);// we now concatenate elementID with ":00" because that is the format in the code we are keeping 

//todo update the html like 9
  });



$("#9").val(localStorage.getItem("9:00"));
$("#10").val(localStorage.getItem("10:00"));
$("#11").val(localStorage.getItem("11:00"));
$("#12").val(localStorage.getItem("12:00"));
$("#13").val(localStorage.getItem("13:00"));
$("#14").val(localStorage.getItem("14:00"));
$("#15").val(localStorage.getItem("15:00"));
$("#16").val(localStorage.getItem("16:00"));
$("#17").val(localStorage.getItem("17:00"));



$("#reset")//button id
.on("click", function() {
    localStorage.storage.clear();
    console.log(click);
});


//todo remove 6pm

