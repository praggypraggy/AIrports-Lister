import fs from 'fs';
import fetch from 'node-fetch';
import { Headers } from 'node-fetch';
import osmtogeojson from '../osmtogeojson.js';
var fileWriter = JSON.parse(fs.readFileSync('./features.json'));
console.log(fileWriter)
var countries = JSON.parse(fs.readFileSync('./coords.json'));

var Null = {
  "type": "FeatureCollection",
  "features": []
}
function writeFile(fileWriter) {
  fs.writeFileSync('./features.json', JSON.stringify(fileWriter), err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
}



async function getInfo() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  for (let x = 0; x < countries.length; x++) {
    if (countries[x].osm_id === 0 || countries[x].airportCount === 0) {
      var url = `https://nominatim.openstreetmap.org/search.php?country=` + String(countries[x].name) + `&polygon_geojson=3&format=jsonv2`;
      try {
        var result = await (await fetch(url, requestOptions)).text();
        result = JSON.parse(result);
        var idCode = result[0].osm_id;
        countries[x].osm_id = idCode;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        var keyValue = '["aeroway"="aerodrome"]["iata"]';
        var reqBody = `
        [out:json];
        area(id:`+ String(idCode + 3600000000) + `)->.searchArea;
        (
          node`+ keyValue + `(area.searchArea);
          way`+ keyValue + `(area.searchArea);
          relation`+ keyValue + `(area.searchArea);
        );
        out body;
        >;
        out skel qt;
        `;
        var urlencoded = new URLSearchParams();
        urlencoded.append(
          "data",
          reqBody
        );
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        var data = await (await fetch("https://overpass-api.de/api/interpreter", requestOptions)).text();
        data = osmtogeojson(JSON.parse(data));
        countries[x].airportCount = data.features.length;
        fileWriter[x] = data;
        writeFile(fileWriter);
      }
      catch (err) {
        fileWriter[x] = Null;
        writeFile(fileWriter)
      }
      console.log(x, countries[x].name, countries[x].osm_id, countries[x].airportCount);

    }
  }
  fs.writeFileSync('./coords.json', JSON.stringify(countries));
  console.log("all done boss")
}
getInfo();