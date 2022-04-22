function bruh(idCode,key,value) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  myHeaders.append("Sec-Fetch-Mode", "cors");

  var urlencoded = new URLSearchParams();
  urlencoded.append(
    "data",
    `[out:json];
    area(id:`+String(idCode)+`)->.searchArea;
    (
      node["`+ key +`"="`+ value +`"](area.searchArea);
      way["`+ key +`"="`+ value +`"](area.searchArea);
      relation["`+ key +`"="`+ value +`"](area.searchArea);
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

  let resOuter;
  let prom = new Promise((res, rej) => {
    resOuter = res;
  })

  console.log("calling API");
  
  console.log(`[out:json];
  area(id:`+String(idCode)+`)->.searchArea;
  (
    node["`+ key +`"="`+ value +`"](area.searchArea);
    way["`+ key +`"="`+ value +`"](area.searchArea);
    relation["`+ key +`"="`+ value +`"](area.searchArea);
  );
  out body;
  >;
  out skel qt;`);
  fetch("https://overpass-api.de/api/interpreter", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log("All data nodes fetched!");
      resOuter(JSON.parse(result));
    })
    .catch(error => console.log('error', error));
  return prom;

}