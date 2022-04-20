var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
myHeaders.append("Sec-Fetch-Mode", "cors");

var urlencoded = new URLSearchParams();
urlencoded.append(
  "data",
  `[out:json];
  area(id:3600304716)->.searchArea;
  (
    node["aeroway"="terminal"](area.searchArea);
    way["aeroway"="terminal"](area.searchArea);
    relation["aeroway"="terminal"](area.searchArea);
  );
  out body;
  >;
  out skel qt;`
);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

var cod;


// fetch("https://overpass-api.de/api/interpreter", requestOptions)
//   .then(response => response.text())
//   .then(result => {
//     cod = result;
//     console.log("result")
//   })
//   .catch(error => console.log('error', error));
function bruh() {
  return requestOptions;
  
}