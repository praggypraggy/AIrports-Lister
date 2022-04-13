function disp() {
  var x = document.myform.date.value;//+ `<form id="Myform" name="myform" onsubmit="disp()"><input type="date" value="1978-05-22"><input type=submit value="bruh"></form>`;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var y = "" + x.substring(8, 10) + " " + months[parseInt(x.substring(5, 7) - 1)] + "," + x.substring(0, 4);
  document.getElementById("DATE").innerHTML = y;
  var x = `<a href="#" onclick="javascript:A()">Change Date</a>`;
  document.getElementById("A").innerHTML = x;
}
function A() {
  var x = `<div class="hel">
    <form id="Myform" name="myform">
      <input type="date" value="2021-12-14" name="date">
      <input type=button value="Set" onclick="disp()">
    </form>

  </div>`;
  document.getElementById("A").innerHTML = x;
}
function closeScheduleBox() {
  document.getElementById("_scheduleBox").style.display = "none";
  document.getElementById("nameDropdown").checked = false;
}
function openScheduleBox(id) {
  document.getElementById("_scheduleBox").style.display = "block";
  closeDropdown(id);
}
function closeDropdown(id) {
  document.getElementById(id).checked = false;
}
function showArrowDown() {
  document.getElementById("_arrowDown").style.display = "block";
}
function hideArrowDown() {
  document.getElementById("_arrowDown").style.display = "none";
}
function colorToggle(divID, num) {

  var x = document.getElementById(divID);
  var y = x.getElementsByTagName("a");
  x = x.getElementsByTagName("i");
  for (var i = 0; i < x.length; i++) {
    x[i].style.color = "transparent";
    y[i].style.color = "black";
  }
  x[num].style.color = "177dc1";
  y[num].style.color = "177dc1";
  closeDropdown("Menu")
}
function showName(name, id, divID, num) {
  document.getElementById("name").innerHTML = name + `<i class="arrowdown" id="_arrowDown"></i>`;
  closeDropdown(id);
  colorToggle(divID, num);
  document.getElementById("nameDropdown").onclick = "";

}
function showSearchBox() {
  document.getElementById("_searchBox").style.display = "block";
}

for (event of ["load", "resize"]) {
  window.addEventListener(event, function () {
    var clientWidth = document.getElementById("name").clientWidth;
    document.getElementById("nameSlide").style.width = clientWidth + 10;
    var x = document.body.clientWidth;
    if (x <= 440) {
      var y = document.getElementById("searchAndSet").style;
      y.top = 160;
      y.right = 70;
      document.getElementById("floatLoc").style.top = 160;
    }
    else {
      var y = document.getElementById("searchAndSet").style;
      y.top = 25;
      y.right = 25;
      document.getElementById("floatLoc").style.top = 70;
    }
  });
}