//current day of the week, and date and time of the year

  var today = moment();
  $("#currentDay").text(today.format("dddd MMM Do, YYYY k:mm:ss"));

  //change color of description cell based on thiem of day
  var hours = $(".hour");
    console.log(hours);

  var hourDescription = $(".description");
  
  var currentHour = parseInt(moment().format("H"));
    console.log(currentHour);

    
  hourDescription.each(function(){

    var hour = $(this).attr("data-hour");
    console.log(hour);
      if (hour == currentHour) {
        $(this).css("background-color", "#ff596e");

      }
      else if (hour < currentHour) {
        $(this).css("background-color", "lightgray");
      }
      else{
        $(this).css("background-color", "lightgreen");
      }

  });

// declare variable for local storage for Text Area 1
var textArea1 = document.querySelector("#textarea1");
var saveButtonEl1 = document.querySelector("#savedBtn1");
console.log(saveButtonEl1);

 

function displayTextDescription1(taskTextValue) {
 textArea1.textContent = taskTextValue;
}
saveTextArea1();
function saveTextArea1() {
 var textWrapper1 = localStorage.getItem("textWrapper1");


  if (!textWrapper1) {
    return;
  }

  textArea1.textContent = textWrapper1;
}

saveButtonEl1.addEventListener("click", function(event) {
  event.preventDefault();

  var textWrapper1 = document.querySelector("#textarea1").value;

  if (textWrapper1 === "") {
    displayTextDescription1("Text Area cannot be blank");
  } else {
    displayTextDescription1();

    localStorage.setItem("textWrapper1", textWrapper1);
    saveTextArea1();
  }
  
});

  // declare variable for local storage for Text Area 2
  var textArea2 = document.querySelector("#textarea2");
  var saveButtonEl2 = document.querySelector("#savedBtn2");
  console.log(saveButtonEl2);
 
   saveTextArea2();
 
  function displayTextDescription2(taskTextValue) {
   textArea2.textContent = taskTextValue;
  }
  
  function saveTextArea2() {
   var textWrapper2 = localStorage.getItem("textWrapper2");
 
  
    if (!textWrapper2) {
      return;
    }
  
    textArea2.textContent = textWrapper2;
  }
  
  saveButtonEl2.addEventListener("click", function(event) {
    event.preventDefault();
  
    var textWrapper2 = document.querySelector("#textarea2").value;
  
    if (textWrapper2 === "") {
      displayTextDescription2("Text Area cannot be blank");
    } else {
      displayTextDescription2();
  
      localStorage.setItem("textWrapper2", textWrapper2);
      saveTextArea2();
    }
  });

   // declare variable for local storage for Text Area 3
 var textArea3 = document.querySelector("#textarea3");
 var saveButtonEl3 = document.querySelector("#savedBtn3");
 console.log(saveButtonEl3);

  

 function displayTextDescription3(taskTextValue) {
  textArea3.textContent = taskTextValue;
 }
 saveTextArea3();
 function saveTextArea3() {
  var textWrapper3 = localStorage.getItem("textWrapper3");

 
   if (!textWrapper3) {
     return;
   }
 
   textArea3.textContent = textWrapper3;
 }
 
 saveButtonEl3.addEventListener("click", function(event) {
   event.preventDefault();
 
   var textWrapper3 = document.querySelector("#textarea3").value;
 
   if (textWrapper3 === "") {
     displayTextDescription3("Text Area cannot be blank");
   } else {
     displayTextDescription3();
 
     localStorage.setItem("textWrapper3", textWrapper3);
     saveTextArea3();
   }
 });

  // declare variable for local storage for Text Area 4
  var textArea4 = document.querySelector("#textarea4");
  var saveButtonEl4 = document.querySelector("#savedBtn4");
  console.log(saveButtonEl4);

 
  function displayTextDescription4(taskTextValue) {
   textArea4.textContent = taskTextValue;
  }
   
  saveTextArea4();
  function saveTextArea4() {
   var textWrapper4 = localStorage.getItem("textWrapper4");
 
  
    if (!textWrapper4) {
      return;
    }
  
    textArea4.textContent = textWrapper4;
  }
  
  saveButtonEl4.addEventListener("click", function(event) {
    event.preventDefault();
  
    var textWrapper4 = document.querySelector("#textarea4").value;
  
    if (textWrapper4 === "") {
      displayTextDescription4("Text Area cannot be blank");
    } else {
      displayTextDescription4();
  
      localStorage.setItem("textWrapper4", textWrapper4);
      saveTextArea4();
    }
  });

   // declare variable for local storage for Text Area 5
 var textArea5 = document.querySelector("#textarea5");
 var saveButtonEl5 = document.querySelector("#savedBtn5");
 console.log(saveButtonEl5);

 function displayTextDescription5(taskTextValue) {
  textArea5.textContent = taskTextValue;

 }
 saveTextArea5();
 function saveTextArea5() {
  var textWrapper5 = localStorage.getItem("textWrapper5");

 
   if (!textWrapper5) {
     return;
   }
 
   textArea5.textContent = textWrapper5;
 }
 
 saveButtonEl5.addEventListener("click", function(event) {
   event.preventDefault();
 
   var textWrapper5 = document.querySelector("#textarea5").value;
 
   if (textWrapper5 === "") {
     displayTextDescription5("Text Area cannot be blank");
   } else {
     displayTextDescription5();
 
     localStorage.setItem("textWrapper5", textWrapper5);
     saveTextArea5();
   }
 });

  // declare variable for local storage for Text Area 6
  var textArea6 = document.querySelector("#textarea6");
  var saveButtonEl6 = document.querySelector("#savedBtn6");
  console.log(saveButtonEl6);

  function displayTextDescription6(taskTextValue) {
   textArea6.textContent = taskTextValue;
  }

  saveTextArea6();
  function saveTextArea6() {
   var textWrapper6 = localStorage.getItem("textWrapper6");
 
  
    if (!textWrapper6) {
      return;
    }
  
    textArea6.textContent = textWrapper6;
  }
saveButtonEl6.addEventListener("click", function(event) {
  event.preventDefault();

  var textWrapper6 = document.querySelector("#textarea6").value;

  if (textWrapper6 === "") {
    displayTextDescription6("Text Area cannot be blank");
  } else {
    displayTextDescription6();

    localStorage.setItem("textWrapper6", textWrapper6);
    saveTextArea6();
  }
});
  
  // declare variable for local storage for Text Area 7
var textArea7 = document.querySelector("#textarea7");
var saveButtonEl7 = document.querySelector("#savedBtn7");
console.log(saveButtonEl7);

function displayTextDescription7(taskTextValue) {
 textArea7.textContent = taskTextValue;
}

saveTextArea7();

function saveTextArea7() {
 var textWrapper7 = localStorage.getItem("textWrapper7");


  if (!textWrapper7) {
    return;
  }

  textArea7.textContent = textWrapper7;
}

saveButtonEl7.addEventListener("click", function(event) {
  event.preventDefault();

  var textWrapper7 = document.querySelector("#textarea7").value;

  if (textWrapper7 === "") {
    displayTextDescription7("Text Area cannot be blank");
  } else {
    displayTextDescription7();

    localStorage.setItem("textWrapper7", textWrapper7);
    saveTextArea7();
  }
});

// declare variable for local storage for Text Area 8
var textArea8 = document.querySelector("#textarea8");
var saveButtonEl8 = document.querySelector("#savedBtn8");
console.log(saveButtonEl8);

function displayTextDescription8(taskTextValue) {
 textArea8.textContent = taskTextValue;
}

saveTextArea8();
function saveTextArea8() {
 var textWrapper8 = localStorage.getItem("textWrapper8");


  if (!textWrapper8) {
    return;
  }

  textArea8.textContent = textWrapper8;
}

saveButtonEl8.addEventListener("click", function(event) {
  event.preventDefault();

  var textWrapper8 = document.querySelector("#textarea8").value;

  if (textWrapper8 === "") {
    displayTextDescription8("Text Area cannot be blank");
  } else {
    displayTextDescription8();

    localStorage.setItem("textWrapper8", textWrapper8);
    saveTextArea8();
  }
});

//declare variable for local storage for Text Area 9
var textArea9 = document.querySelector("#textarea9");
var saveButtonEl9 = document.querySelector("#savedBtn9");
console.log(saveButtonEl9);

function displayTextDescription9(taskTextValue) {
 textArea9.textContent = taskTextValue;
}

saveTextArea9();
function saveTextArea9() {
 var textWrapper9 = localStorage.getItem("textWrapper9");


  if (!textWrapper9) {
    return;
  }

  textArea9.textContent = textWrapper9;
}

saveButtonEl9.addEventListener("click", function(event) {
  event.preventDefault();

  var textWrapper9 = document.querySelector("#textarea9").value;

  if (textWrapper9 === "") {
    displayTextDescription9("Text Area cannot be blank");
  } else {
    displayTextDescription9();

    localStorage.setItem("textWrapper9", textWrapper9);
    saveTextArea9();
  }
});