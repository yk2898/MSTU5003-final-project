/******************************
Faces:
******************************/
var face_counter = function(event){
    let id = event.target.id;
    var counter = document.getElementById(id + "-counter");
    counter.innerHTML++;
}

var button1 = document.getElementById("btn_count1");
var counter1 = document.getElementById("face_count1");

 counter1.innerHTML = 0;
 button1.onclick = function()
 {
    counter1.innerHTML++;
 };

 var button2 = document.getElementById("btn_count2");
 var counter2 = document.getElementById("face_count2");

 counter2.innerHTML = 0;
 button2.onclick = function()
 {
    counter2.innerHTML++;
 };

 var button3 = document.getElementById("btn_count3");
 var counter3 = document.getElementById("face_count3");

 counter3.innerHTML = 0;
 button3.onclick = function()
 {
    counter3.innerHTML++;
 };

 var button4 = document.getElementById("btn_count4");
 var counter4 = document.getElementById("face_count4");

 counter4.innerHTML = 0;
 button4.onclick = function()
 {
    counter4.innerHTML++;
 };

 var button5 = document.getElementById("btn_count5");
 var counter5 = document.getElementById("face_count5");

 counter5.innerHTML = 0;
 button5.onclick = function()
 {
    counter5.innerHTML++;
 };




window.onload = function() {
  var counter = document.getElementById(id + "-counter");
  document.getElementById("btn_reset");
  var count_value = 0;
  
  counter.onclick = function() { 
  count_value = 0; counter.innerHTML = count_value; 
  }  
  
};





/******************************
Text:
******************************/
function crying_face() {
  var complaint;
  var text = prompt(
    "Comment if any complaints."
  );
	if (text == null || text == "") {
    alert ("Your comment is empty.");
  } else {
    Complaint = "Your complaint: " + text;
  }
  document.getElementById("btn_count1").innerHTML = complaint;
}                          
                          
