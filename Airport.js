var toggleSwitchVar = 1;
function printCountryTable() {
  document.getElementById("_airportContent").style.display = "none";
  document.getElementById("_countryTable").style.display = "block";

  var count = [11, 0, 4, 49, 0, 0, 30, 1, 0, 3, 118, 10, 0, 255, 32, 12, 23, 2, 13, 1, 13, 25, 18, 4, 2, 4, 39, 0, 9, 7, 0, 388, 1, 2, 29, 4, 1, 9, 11, 258, 12, 5, 3, 7, 55, 460, 0, 0, 104, 0, 33, 0, 5, 22, 13, 17, 47, 0, 10, 20, 34, 1, 13, 13, 26, 41, 2, 9, 7, 9, 18, 2, 2, 22, 34, 541, 0, 0, 0, 15, 1, 10, 306, 10, 3, 58, 24, 2, 0, 0, 6, 4, 8, 2, 6, 6, 0, 0, 10, 0, 23, 24, 205, 214, 87, 20, 50, 1, 18, 168, 4, 146, 4, 5, 41, 29, 12, 10, 35, 5, 10, 16, 11, 2, 3, 17, 24, 0, 5, 3, 0, 2, 15, 8, 61, 18, 9, 5, 1, 0, 8, 5, 0, 132, 0, 0, 1, 23, 3, 1, 39, 17, 40, 16, 1, 23, 56, 0, 59, 9, 14, 40, 2, 0, 0, 121, 21, 50, 3, 0, 31, 71, 13, 41, 118, 0, 71, 35, 0, 10, 0, 35, 415, 3, 0, 2, 3, 2, 0, 0, 7, 3, 1, 2, 58, 16, 13, 3, 2, 11, 0, 13, 3, 3, 9, 52, 0, 13, 112, 6, 16, 10, 0, 3, 69, 56, 5, 29, 9, 25, 58, 11, 4, 0, 7, 3, 37, 83, 26, 3, 1, 5, 52, 54, 172, 0, 0, 11, 25, 19, 58, 34, 2, 0, 0, 0, 12, 12, 10];
  var countries = [
    { "id": "0", "name": "Afghanistan", "dName": "Afghanistan" },
    { "id": "1", "name": "Åland Islands", "dName": "Åland Islands" },
    { "id": "2", "name": "Albania", "dName": "Albania" },
    { "id": "3", "name": "Algeria", "dName": "Algeria" },
    { "id": "4", "name": "American Samoa", "dName": "American Samoa" },
    { "id": "5", "name": "Andorra", "dName": "Andorra" },
    { "id": "6", "name": "Angola", "dName": "Angola" },
    { "id": "7", "name": "Anguilla", "dName": "Anguilla" },
    { "id": "8", "name": "Antarctica", "dName": "Antarctica" },
    { "id": "9", "name": "Antigua and Barbuda", "dName": "Antigua and Barbuda" },
    { "id": "10", "name": "Argentina", "dName": "Argentina" },
    { "id": "11", "name": "Armenia ", "dName": "Armenia " },
    { "id": "12", "name": "Aruba", "dName": "Aruba" },
    { "id": "13", "name": "Australia", "dName": "Australia" },
    { "id": "14", "name": "Austria", "dName": "Austria" },
    { "id": "15", "name": "Azerbaijan", "dName": "Azerbaijan" },
    { "id": "16", "name": "Bahamas", "dName": "Bahamas" },
    { "id": "17", "name": "Bahrain", "dName": "Bahrain" },
    { "id": "18", "name": "Bangladesh", "dName": "Bangladesh" },
    { "id": "19", "name": "Barbados", "dName": "Barbados" },
    { "id": "20", "name": "Belarus", "dName": "Belarus" },
    { "id": "21", "name": "Belgium", "dName": "Belgium" },
    { "id": "22", "name": "Belize", "dName": "Belize" },
    { "id": "23", "name": "Benin", "dName": "Benin" },
    { "id": "24", "name": "Bermuda", "dName": "Bermuda" },
    { "id": "25", "name": "Bhutan", "dName": "Bhutan" },
    { "id": "26", "name": "Bolivia", "dName": "Bolivia, Plurinational State of" },
    { "id": "27", "name": "Bonaire, Sint Eustatius and Saba", "dName": "Bonaire, Sint Eustatius and Saba" },
    { "id": "28", "name": "Bosnia and Herzegovina", "dName": "Bosnia and Herzegovina" },
    { "id": "29", "name": "Botswana", "dName": "Botswana" },
    { "id": "30", "name": "Bouvet Island", "dName": "Bouvet Island" },
    { "id": "31", "name": "Brazil", "dName": "Brazil" },
    { "id": "32", "name": "British Indian Ocean Territory", "dName": "British Indian Ocean Territory" },
    { "id": "33", "name": "Brunei Darussalam", "dName": "Brunei Darussalam" },
    { "id": "34", "name": "Bulgaria", "dName": "Bulgaria" },
    { "id": "35", "name": "Burkina Faso", "dName": "Burkina Faso" },
    { "id": "36", "name": "Burundi", "dName": "Burundi" },
    { "id": "37", "name": "Cambodia", "dName": "Cambodia" },
    { "id": "38", "name": "Cameroon", "dName": "Cameroon" },
    { "id": "39", "name": "Canada", "dName": "Canada" },
    { "id": "40", "name": "Cape Verde", "dName": "Cape Verde" },
    { "id": "41", "name": "Cayman Islands", "dName": "Cayman Islands" },
    { "id": "42", "name": "Central African Republic", "dName": "Central African Republic" },
    { "id": "43", "name": "Chad", "dName": "Chad" },
    { "id": "44", "name": "Chile", "dName": "Chile" },
    { "id": "45", "name": "China", "dName": "China" },
    { "id": "46", "name": "Christmas Island", "dName": "Christmas Island" },
    { "id": "47", "name": "Cocos (Keeling) Islands", "dName": "Cocos (Keeling) Islands" },
    { "id": "48", "name": "Colombia", "dName": "Colombia" },
    { "id": "49", "name": "Comoros", "dName": "Comoros" },
    { "id": "50", "name": "Congo", "dName": "The Democratic Republic of Congo" },
    { "id": "51", "name": "Republic of congo", "dName": "Republic of Congo" },
    { "id": "52", "name": "Cook Islands", "dName": "Cook Islands" },
    { "id": "53", "name": "Costa Rica", "dName": "Costa Rica" },
    { "id": "54", "name": "Côte d'Ivoire", "dName": "Côte d'Ivoire" },
    { "id": "55", "name": "Croatia", "dName": "Croatia" },
    { "id": "56", "name": "Cuba", "dName": "Cuba" },
    { "id": "57", "name": "Curaçao", "dName": "Curaçao" },
    { "id": "58", "name": "Cyprus", "dName": "Cyprus" },
    { "id": "59", "name": "Czech Republic", "dName": "Czech Republic" },
    { "id": "60", "name": "Denmark", "dName": "Denmark" },
    { "id": "61", "name": "Djibouti", "dName": "Djibouti" },
    { "id": "62", "name": "Dominica", "dName": "Dominica" },
    { "id": "63", "name": "Dominican Republic", "dName": "Dominican Republic" },
    { "id": "64", "name": "Ecuador", "dName": "Ecuador" },
    { "id": "65", "name": "Egypt", "dName": "Egypt" },
    { "id": "66", "name": "El Salvador", "dName": "El Salvador" },
    { "id": "67", "name": "Equatorial Guinea", "dName": "Equatorial Guinea" },
    { "id": "68", "name": "Eritrea", "dName": "Eritrea" },
    { "id": "69", "name": "Estonia", "dName": "Estonia" },
    { "id": "70", "name": "Ethiopia", "dName": "Ethiopia" },
    { "id": "71", "name": "Falkland Islands (Malvinas)", "dName": "Falkland Islands (Malvinas)" },
    { "id": "72", "name": "Faroe Islands", "dName": "Faroe Islands" },
    { "id": "73", "name": "Fiji", "dName": "Fiji" },
    { "id": "74", "name": "Finland", "dName": "Finland" },
    { "id": "75", "name": "France", "dName": "France" },
    { "id": "76", "name": "French Guiana", "dName": "French Guiana" },
    { "id": "77", "name": "French Polynesia", "dName": "French Polynesia" },
    { "id": "78", "name": "French Southern Territories", "dName": "French Southern Territories" },
    { "id": "79", "name": "Gabon", "dName": "Gabon" },
    { "id": "80", "name": "Gambia", "dName": "Gambia" },
    { "id": "81", "name": "Georgia", "dName": "Georgia" },
    { "id": "82", "name": "Germany", "dName": "Germany" },
    { "id": "83", "name": "Ghana", "dName": "Ghana" },
    { "id": "84", "name": "Gibraltar", "dName": "Gibraltar" },
    { "id": "85", "name": "Greece", "dName": "Greece" },
    { "id": "86", "name": "Greenland", "dName": "Greenland" },
    { "id": "87", "name": "Grenada", "dName": "Grenada" },
    { "id": "88", "name": "Guadeloupe", "dName": "Guadeloupe" },
    { "id": "89", "name": "Guam", "dName": "Guam" },
    { "id": "90", "name": "Guatemala", "dName": "Guatemala" },
    { "id": "91", "name": "Guernsey", "dName": "Guernsey" },
    { "id": "92", "name": "Guinea", "dName": "Guinea" },
    { "id": "93", "name": "Guinea-Bissau", "dName": "Guinea-Bissau" },
    { "id": "94", "name": "Guyana", "dName": "Guyana" },
    { "id": "95", "name": "Haiti", "dName": "Haiti" },
    { "id": "96", "name": "Heard Island and McDonald Islands", "dName": "Heard Island and McDonald Islands" },
    { "id": "97", "name": "Vatican city", "dName": "Holy See (Vatican City State)" },
    { "id": "98", "name": "Honduras", "dName": "Honduras" },
    { "id": "99", "name": "Hong Kong", "dName": "Hong Kong" },
    { "id": "100", "name": "Hungary", "dName": "Hungary" },
    { "id": "101", "name": "Iceland", "dName": "Iceland" },
    { "id": "102", "name": "India", "dName": "India" },
    { "id": "103", "name": "Indonesia", "dName": "Indonesia" },
    { "id": "104", "name": "Iran", "dName": "Islamic Republic of Iran" },
    { "id": "105", "name": "Iraq", "dName": "Iraq" },
    { "id": "106", "name": "Ireland", "dName": "Ireland" },
    { "id": "107", "name": "Isle of Man", "dName": "Isle of Man" },
    { "id": "108", "name": "Israel", "dName": "Israel" },
    { "id": "109", "name": "Italy", "dName": "Italy" },
    { "id": "110", "name": "Jamaica", "dName": "Jamaica" },
    { "id": "111", "name": "Japan", "dName": "Japan" },
    { "id": "112", "name": "Jersey", "dName": "Jersey" },
    { "id": "113", "name": "Jordan", "dName": "Jordan" },
    { "id": "114", "name": "Kazakhstan", "dName": "Kazakhstan" },
    { "id": "115", "name": "Kenya", "dName": "Kenya" },
    { "id": "116", "name": "Kiribati", "dName": "Kiribati" },
    { "id": "117", "name": "North Korea", "dName": "Democratic People's Republic of Korea(N Korea) " },
    { "id": "118", "name": "South Korea", "dName": "Republic of Korea (S Korea)" },
    { "id": "119", "name": "Kuwait", "dName": "Kuwait" },
    { "id": "120", "name": "Kyrgyzstan", "dName": "Kyrgyzstan" },
    { "id": "121", "name": "Lao People's Democratic Republic", "dName": "Lao People's Democratic Republic" },
    { "id": "122", "name": "Latvia", "dName": "Latvia" },
    { "id": "123", "name": "Lebanon", "dName": "Lebanon" },
    { "id": "124", "name": "Lesotho", "dName": "Lesotho" },
    { "id": "125", "name": "Liberia", "dName": "Liberia" },
    { "id": "126", "name": "Libya", "dName": "Libya" },
    { "id": "127", "name": "Liechtenstein", "dName": "Liechtenstein" },
    { "id": "128", "name": "Lithuania", "dName": "Lithuania" },
    { "id": "129", "name": "Luxembourg", "dName": "Luxembourg" },
    { "id": "130", "name": "Macao", "dName": "Macao" },
    { "id": "131", "name": "Macedonia", "dName": "The former Yugoslav Republic of Macedonia" },
    { "id": "132", "name": "Madagascar", "dName": "Madagascar" },
    { "id": "133", "name": "Malawi", "dName": "Malawi" },
    { "id": "134", "name": "Malaysia", "dName": "Malaysia" },
    { "id": "135", "name": "Maldives", "dName": "Maldives" },
    { "id": "136", "name": "Mali", "dName": "Mali" },
    { "id": "137", "name": "Malta", "dName": "Malta" },
    { "id": "138", "name": "Marshall Islands", "dName": "Marshall Islands" },
    { "id": "139", "name": "Martinique", "dName": "Martinique" },
    { "id": "140", "name": "Mauritania", "dName": "Mauritania" },
    { "id": "141", "name": "Mauritius", "dName": "Mauritius" },
    { "id": "142", "name": "Mayotte", "dName": "Mayotte" },
    { "id": "143", "name": "Mexico", "dName": "Mexico" },
    { "id": "144", "name": "Micronesia, Federated States of", "dName": "Micronesia, Federated States of" },
    { "id": "145", "name": "Moldova, Republic of", "dName": "Moldova, Republic of" },
    { "id": "146", "name": "Monaco", "dName": "Monaco" },
    { "id": "147", "name": "Mongolia", "dName": "Mongolia" },
    { "id": "148", "name": "Montenegro", "dName": "Montenegro" },
    { "id": "149", "name": "Montserrat", "dName": "Montserrat" },
    { "id": "150", "name": "Morocco", "dName": "Morocco" },
    { "id": "151", "name": "Mozambique", "dName": "Mozambique" },
    { "id": "152", "name": "Myanmar", "dName": "Myanmar" },
    { "id": "153", "name": "Namibia", "dName": "Namibia" },
    { "id": "154", "name": "Nauru", "dName": "Nauru" },
    { "id": "155", "name": "Nepal", "dName": "Nepal" },
    { "id": "156", "name": "Netherlands", "dName": "Netherlands" },
    { "id": "157", "name": "New Caledonia", "dName": "New Caledonia" },
    { "id": "158", "name": "New Zealand", "dName": "New Zealand" },
    { "id": "159", "name": "Nicaragua", "dName": "Nicaragua" },
    { "id": "160", "name": "Niger", "dName": "Niger" },
    { "id": "161", "name": "Nigeria", "dName": "Nigeria" },
    { "id": "162", "name": "Niue", "dName": "Niue" },
    { "id": "163", "name": "Norfolk Island", "dName": "Norfolk Island" },
    { "id": "164", "name": "Northern Mariana Islands", "dName": "Northern Mariana Islands" },
    { "id": "165", "name": "Norway", "dName": "Norway" },
    { "id": "166", "name": "Oman", "dName": "Oman" },
    { "id": "167", "name": "Pakistan", "dName": "Pakistan" },
    { "id": "168", "name": "Palau", "dName": "Palau" },
    { "id": "169", "name": "Palestinian Territory, Occupied", "dName": "Palestinian Territory, Occupied" },
    { "id": "170", "name": "Panama", "dName": "Panama" },
    { "id": "171", "name": "Papua New Guinea", "dName": "Papua New Guinea" },
    { "id": "172", "name": "Paraguay", "dName": "Paraguay" },
    { "id": "173", "name": "Peru", "dName": "Peru" },
    { "id": "174", "name": "Philippines", "dName": "Philippines" },
    { "id": "175", "name": "Pitcairn", "dName": "Pitcairn" },
    { "id": "176", "name": "Poland", "dName": "Poland" },
    { "id": "177", "name": "Portugal", "dName": "Portugal" },
    { "id": "178", "name": "Puerto Rico", "dName": "Puerto Rico" },
    { "id": "179", "name": "Qatar", "dName": "Qatar" },
    { "id": "180", "name": "Réunion", "dName": "Réunion" },
    { "id": "181", "name": "Romania", "dName": "Romania" },
    { "id": "182", "name": "Russian Federation", "dName": "Russian Federation" },
    { "id": "183", "name": "Rwanda", "dName": "Rwanda" },
    { "id": "184", "name": "Saint Barthélemy", "dName": "Saint Barthélemy" },
    { "id": "185", "name": "Saint Helena", "dName": "Ascension and Tristan da Cunha Saint Helena" },
    { "id": "186", "name": "Saint Kitts and Nevis", "dName": "Saint Kitts and Nevis" },
    { "id": "187", "name": "Saint Lucia", "dName": "Saint Lucia" },
    { "id": "188", "name": "Saint Martin (French part)", "dName": "Saint Martin (French part)" },
    { "id": "189", "name": "Saint Pierre and Miquelon", "dName": "Saint Pierre and Miquelon" },
    { "id": "190", "name": "Saint Vincent and the Grenadines", "dName": "Saint Vincent and the Grenadines" },
    { "id": "191", "name": "Samoa", "dName": "Samoa" },
    { "id": "192", "name": "San Marino", "dName": "San Marino" },
    { "id": "193", "name": "Sao Tome and Principe", "dName": "Sao Tome and Principe" },
    { "id": "194", "name": "Saudi Arabia", "dName": "Saudi Arabia" },
    { "id": "195", "name": "Senegal", "dName": "Senegal" },
    { "id": "196", "name": "Serbia", "dName": "Serbia" },
    { "id": "197", "name": "Seychelles", "dName": "Seychelles" },
    { "id": "198", "name": "Sierra Leone", "dName": "Sierra Leone" },
    { "id": "199", "name": "Singapore", "dName": "Singapore" },
    { "id": "200", "name": "Sint Maarten (Dutch part)", "dName": "Sint Maarten (Dutch part)" },
    { "id": "201", "name": "Slovakia", "dName": "Slovakia" },
    { "id": "202", "name": "Slovenia", "dName": "Slovenia" },
    { "id": "203", "name": "Solomon Islands", "dName": "Solomon Islands" },
    { "id": "204", "name": "Somalia", "dName": "Somalia" },
    { "id": "205", "name": "South Africa", "dName": "South Africa" },
    { "id": "206", "name": "South Georgia and the South Sandwich Islands", "dName": "South Georgia and the South Sandwich Islands" },
    { "id": "207", "name": "South Sudan", "dName": "South Sudan" },
    { "id": "208", "name": "Spain", "dName": "Spain" },
    { "id": "209", "name": "Sri Lanka", "dName": "Sri Lanka" },
    { "id": "210", "name": "Sudan", "dName": "Sudan" },
    { "id": "211", "name": "Suriname", "dName": "Suriname" },
    { "id": "212", "name": "Svalbard and Jan Mayen", "dName": "Svalbard and Jan Mayen" },
    { "id": "213", "name": "Swaziland", "dName": "Swaziland" },
    { "id": "214", "name": "Sweden", "dName": "Sweden" },
    { "id": "215", "name": "Switzerland", "dName": "Switzerland" },
    { "id": "216", "name": "Syrian Arab Republic", "dName": "Syrian Arab Republic" },
    { "id": "217", "name": "Taiwan", "dName": "Province of China Taiwan" },
    { "id": "218", "name": "Tajikistan", "dName": "Tajikistan" },
    { "id": "219", "name": "Tanzania", "dName": "United Republic of Tanzania" },
    { "id": "220", "name": "Thailand", "dName": "Thailand" },
    { "id": "221", "name": "Timor-Leste", "dName": "Timor-Leste" },
    { "id": "222", "name": "Togo", "dName": "Togo" },
    { "id": "223", "name": "Tokelau", "dName": "Tokelau" },
    { "id": "224", "name": "Tonga", "dName": "Tonga" },
    { "id": "225", "name": "Trinidad and Tobago", "dName": "Trinidad and Tobago" },
    { "id": "226", "name": "Tunisia", "dName": "Tunisia" },
    { "id": "227", "name": "Turkey", "dName": "Turkey" },
    { "id": "228", "name": "Turkmenistan", "dName": "Turkmenistan" },
    { "id": "229", "name": "Turks and Caicos Islands", "dName": "Turks and Caicos Islands" },
    { "id": "230", "name": "Tuvalu", "dName": "Tuvalu" },
    { "id": "231", "name": "Uganda", "dName": "Uganda" },
    { "id": "232", "name": "Ukraine", "dName": "Ukraine" },
    { "id": "233", "name": "United Arab Emirates", "dName": "United Arab Emirates" },
    { "id": "234", "name": "United Kingdom", "dName": "United Kingdom" },
    { "id": "235", "name": "United States", "dName": "United States" },
    { "id": "236", "name": "United States Minor Outlying Islands", "dName": "United States Minor Outlying Islands" },
    { "id": "237", "name": "Uruguay", "dName": "Uruguay" },
    { "id": "238", "name": "Uzbekistan", "dName": "Uzbekistan" },
    { "id": "239", "name": "Vanuatu", "dName": "Vanuatu" },
    { "id": "240", "name": "Venezuela", "dName": "Bolivarian Republic of Venezuela" },
    { "id": "241", "name": "Viet Nam", "dName": "Viet Nam" },
    { "id": "242", "name": "Virgin Islands", "dName": "British Virgin Islands" },
    { "id": "243", "name": "Virgin Islands U.S.", "dName": "Virgin Islands U.S." },
    { "id": "244", "name": "Wallis and Futuna", "dName": "Wallis and Futuna" },
    { "id": "245", "name": "Western Sahara", "dName": "Western Sahara" },
    { "id": "246", "name": "Yemen", "dName": "Yemen" },
    { "id": "247", "name": "Zambia", "dName": "Zambia" },
    { "id": "248", "name": "Zimbabwe", "dName": "Zimbabwe" }
  ];
  var apnd = document.getElementById("_countrytBody");
  apnd.innerHTML = ``;
  for (var i = 0; i < countries.length; i++) {
    apnd.innerHTML += `
    <tr onclick="showAirports('`+ countries[i].name + `')">
      <td>`+ parseInt(i + 1) + `</td>
      <td>`+ countries[i].dName + `</td>
      <td class='nOfCountries'>`+ count[i] + `</td>
    </tr>
    `;
  }
  console.log(apnd);
}


function printAirportTable(countryName, features) {
  document.getElementById("_airportContent").style.display = "block";
  document.getElementById("_countryTable").style.display = "none";
  document.getElementById("_countryName").innerHTML = countryName;
  var apnd = document.getElementById("_airporttBody");
  var airportName;
  apnd.innerHTML = ``;
  for (var i = 0; i < features.length; i++) {

    if (features[i].properties["name:en"] === features[i].properties.name || features[i].properties["name:en"] === undefined)
      airportName = features[i].properties.name
    else
      airportName =
        features[i].properties["name:en"] +
        `<br>` +
        features[i].properties.name;
    apnd.innerHTML += `
    <tr onclick="showAirport(features[`+ i + `].geometry.coordinates)">
      <td>`+ parseInt(i + 1) + `</td>
      <td>
        `+ airportName + `
      </td>
      <td class='nOfCountries'>`+ features[i].properties.iata + `</td>
    </tr>
    `;
  }
  console.log(apnd);
}

function closeAllBox() {
  document.getElementById('_countryBox').style.display = "none";
}

function closeBox(id) {
  document.getElementById(id).style.display = "none";
}

function openBox(id) {
  document.getElementById(id).style.display = "block";
  if (id === "_countryBox") {
    printCountryTable();
  }
}

function toggleSwitch() {
  if (toggleSwitchVar === 0) {
    toggleSwitchVar = 1;
    openBox("_countryBox");
    document.getElementById("toggleOn").style.display = "block";
    document.getElementById("toggleOff").style.display = "none";
  }
  else {
    toggleSwitchVar = 0;
    closeBox("_countryBox");
    document.getElementById("toggleOff").style.display = "block";
    document.getElementById("toggleOn").style.display = "none";
  }
}

function openloading(msg) {
  document.getElementById("pin").style.display = "block";
  document.getElementById("pulse").style.display = "block";
  document.getElementById("_loadingScript").style.display = "block";
  document.getElementById("_loadingBox").style.display = "block";
  document.getElementById("_loadingScript").innerHTML = msg;
}
function closeloading() {
  document.getElementById("pin").style.display = "none";
  document.getElementById("pulse").style.display = "none";
  document.getElementById("_loadingScript").style.display = "none";
  document.getElementById("_loadingBox").style.display = "none";
  console.log('closing loading');
}