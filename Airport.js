var toggleSwitchVar = 1;


function printCountryTable(countries) {
  document.getElementById("_airportContent").style.display = "none";
  document.getElementById("_countryTable").style.display = "block";
  document.getElementById("_countryName").innerHTML = `<a href="#" onclick="printCountryTable(countries)" class="floatIcon backButton">
  <i class="fa fa-arrow-left my-float"></i>
</a>`;
  var apnd = document.getElementById("_countrytBody");
  apnd.innerHTML = ``;
  for (var i = 0; i < countries.length; i++) {
    apnd.innerHTML += `
    <tr onclick="showAirports('`+ countries[i].name + `',` + parseInt(i) + `)">
      <td>`+ parseInt(i + 1) + `</td>
      <td class='countryName'>`+ countries[i].dName + `</td>
      <td>`+ countries[i].countryCode + `</td>
      <td class='nOfCountries'>`+ countries[i].airportCount + `</td>
    </tr>
    `;
  }
  console.log(apnd);
}


function printAirportTable(countryName, features) {
  document.getElementById("_airportContent").style.display = "block";
  document.getElementById("_countryTable").style.display = "none";
  document.getElementById("_countryName").innerHTML += countryName;
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
      <td class='countryName airportName'>
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
    printCountryTable(countries);
  }
}

function toggleSwitch() {
  if (toggleSwitchVar === 0) {
    toggleSwitchVar = 1;
    document.getElementById("_countryBox").style.display = "block";
    document.getElementById("toggleOn").style.display = "block";
    document.getElementById("toggleOff").style.display = "none";
  }
  else {
    toggleSwitchVar = 0;
    closeBox("_countryBox");
    document.getElementById("_countryBox").style.display = "none";
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

function showAirports(country, num) {
  var map = new ZMap('MapdivId', zMapsSdk);
  map.loadMap();
  map.onLoad(async () => {
    openloading('fetching nodes...');
    var Markers = [];
    var latLonArray = [];
    var idCode;
    console.log(airportData[num], num, country)
    features = airportData[num].features;
    console.log(features);
    await delay(1000);
    printAirportTable(country, features);
    for (var i = 0; i < features.length; i++) {
      if (features[i].geometry.type === "Point") {
        latLonArray.push([features[i].geometry.coordinates[1], features[i].geometry.coordinates[0]]);
      }
      else {
        latLonArray.push([features[i].geometry.coordinates[0][0][1], features[i].geometry.coordinates[0][0][0]]);
      }
    }
    for (var i = 0; i < latLonArray.length; i++) {
      Markers[i] = new ZMarker(i, latLonArray[i][0], latLonArray[i][1]);
      Markers[i].setCustomInfoWindowView('View');
    }
    var ZMapsMarkerOptionCluster = new ZMapsMarkerOption(ZMapsMarkerType.Cluster);
    var response = map.addMarkers('ClusterId', Markers, ZMapsMarkerOptionCluster);
    closeloading();

  });
}

function showInZoom(coordinateArray, Marker) {

  var map = new ZMap('MapdivId', zMapsSdk);
  map.loadMap();
  map.onLoad(function () {

    // if (Marker !== 'false')
    map.addMarker(Marker);
    var zMapsShape = new ZMapsShape('shapeId', ZMapsShapeType.Polygon);
    zMapsShape.setCoordinatesArray(coordinateArray);

    zMapsShape.setFill(true);
    zMapsShape.setStrokeColor('black');
    zMapsShape.setFillColor('rgba(66, 153, 245,0.3)');
    zMapsShape.setStrokeWidth(2);
    zMapsShape.setShapeOpacity(1);

    map.addShape(zMapsShape);

    map.fitToShapes(zMapsShape, 20);

  });
}
