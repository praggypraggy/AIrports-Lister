function initCallback() {

  var map = new ZMap('MapdivId', zMapsSdk);
  map.loadMap();
  printCountryTable(countries);
  loadingRender();
}

function showAirport(coordinateArray) {
  if (typeof (coordinateArray[0]) === "number") {
    var temp = [coordinateArray[1], coordinateArray[0]];
    coordinateArray = [];
    coordinateArray.push(temp)
    var Marker = new ZMarker('id', temp[0], temp[1]);
    showInZoom(coordinateArray, Marker);
    console.log(coordinateArray);

  }
  else {
    for (let i = 0; i < coordinateArray.length; i++) {
      for (let k = 0; k < coordinateArray[i].length; k++) {
        let temp = coordinateArray[i][k][0];
        coordinateArray[i][k][0] = coordinateArray[i][k][1];
        coordinateArray[i][k][1] = temp;
      }
      var Marker = new ZMarker('id', coordinateArray[0][0][0], coordinateArray[0][0][1]);
      showInZoom(coordinateArray[i], Marker);
    }
  }

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

function showAirports(country, num) {
  var map = new ZMap('MapdivId', zMapsSdk);
  map.loadMap();
  map.onLoad(async () => {
    openloading('fetching nodes...');
    var Markers = [];
    var latLonArray = [];
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

function loadingRender(){
  document.getElementById("_loadingBox").innerHTML=
  `
  <div class="pin" id="pin"></div>
  <div class="pulse" id="pulse"></div>
  <h3 id="_loadingScript"></h3>
  `;
  document.getElementById("_loadingBox").className="loadingBox";
}