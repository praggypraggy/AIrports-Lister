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
function printCountryTable(){
  var countries =['Afghanistan','Åland Islands','Albania','Algeria',
  'American Samoa','Andorra','Angola','Anguilla',
  'Antarctica','Antigua and Barbuda','Argentina',
  'Armenia	','Aruba','Australia','Austria','Azerbaijan',
  'Bahamas','Bahrain','Bangladesh','Barbados','Belarus',
  'Belgium','Belize','Benin','Bermuda','Bhutan',
  'Bolivia, Plurinational State of',
  'Bonaire, Sint Eustatius and Saba','Bosnia and Herzegovina',
  'Botswana','Bouvet Island','Brazil',
  'British Indian Ocean Territory','Brunei Darussalam',
  'Bulgaria','Burkina Faso','Burundi','Cambodia',
  'Cameroon','Canada','Cape Verde','Cayman Islands',
  'Central African Republic','Chad','Chile','China',
  'Christmas Island','Cocos (Keeling) Islands','Colombia',
  'Comoros','Congo','Congo, the Democratic Republic of the',
  'Cook Islands','Costa Rica','Côte d\'Ivoire','Croatia',
  'Cuba','Curaçao','Cyprus','Czech Republic','Denmark',
  'Djibouti','Dominica','Dominican Republic','Ecuador',
  'Egypt','El Salvador','Equatorial Guinea','Eritrea',
  'Estonia','Ethiopia','Falkland Islands (Malvinas)',
  'Faroe Islands','Fiji','Finland','France','French Guiana',
  'French Polynesia','French Southern Territories','Gabon',
  'Gambia','Georgia','Germany','Ghana','Gibraltar','Greece',
  'Greenland','Grenada','Guadeloupe','Guam','Guatemala',
  'Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti',
  'Heard Island and McDonald Islands','Holy See (Vatican City State)',
  'Honduras','Hong Kong','Hungary','Iceland','India','Indonesia',
  'Iran, Islamic Republic of','Iraq','Ireland','Isle of Man','Israel',
  'Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya',
  'Kiribati','Korea, Democratic People\'s Republic of',
  'Korea, Republic of','Kuwait','Kyrgyzstan',
  'Lao People\'s Democratic Republic','Latvia','Lebanon','Lesotho',
  'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao',
  'Macedonia, the former Yugoslav Republic of','Madagascar','Malawi',
  'Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique',
  'Mauritania','Mauritius','Mayotte','Mexico',
  'Micronesia, Federated States of','Moldova, Republic of','Monaco',
  'Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar',
  'Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand',
  'Nicaragua','Niger','Nigeria','Niue','Norfolk Island',
  'Northern Mariana Islands','Norway','Oman','Pakistan','Palau',
  'Palestinian Territory, Occupied','Panama','Papua New Guinea','Paraguay',
  'Peru','Philippines','Pitcairn','Poland','Portugal','Puerto Rico',
  'Qatar','Réunion','Romania','Russian Federation','Rwanda',
  'Saint Barthélemy','Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis','Saint Lucia','Saint Martin (French part)',
  'Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa'
  ,'San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia',
  'Seychelles','Sierra Leone','Singapore','Sint Maarten (Dutch part)',
  'Slovakia','Slovenia','Solomon Islands','Somalia','South Africa',
  'South Georgia and the South Sandwich Islands','South Sudan'
  ,'Spain','Sri Lanka','Sudan','Suriname','Svalbard and Jan Mayen',
  'Swaziland','Sweden','Switzerland','Syrian Arab Republic',
  'Taiwan, Province of China','Tajikistan','Tanzania, United Republic of',
  'Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago',
  'Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu',
  'Uganda','Ukraine','United Arab Emirates','United Kingdom','United States',
  'United States Minor Outlying Islands','Uruguay','Uzbekistan','Vanuatu',
  'Venezuela, Bolivarian Republic of','Viet Nam','Virgin Islands, British',
  'Virgin Islands, U.S.','Wallis and Futuna','Western Sahara','Yemen'
  ,'Zambia','Zimbabwe'];
  var apnd = document.getElementById("_countryTbody");  
  console.log(apnd);
  for(var i=0;i<countries.length;i++){
    apnd.innerHTML +=`
    <tr onclick="showAirports('`+countries[i]+`')">
      <td>`+countries[i]+`</td>
      <td class='nOfCountries'>0</td>
    </tr>
    `;
  }
  
  console.log(apnd);
}

function closeAllBox() {
  document.getElementById("_scheduleBox").style.display = "none";
  document.getElementById('_countryBox').style.display = "none";
  document.getElementById("nameDropdown").checked = false;
}

function closeBox(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById("nameDropdown").checked = false;
}

function openBox(id) {
  document.getElementById(id).style.display = "block";
  if (id === "_countryBox"){
    printCountryTable();
  }
  closeDropdown("Menu");
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