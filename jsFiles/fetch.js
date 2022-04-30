function countryCode(country) {

  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


  let resOuter;
  let prom = new Promise((res, rej) => {
    resOuter = res;
  })
  fetch(`https://nominatim.openstreetmap.org/search.php?country=` + country + `&polygon_geojson=3&format=jsonv2`, requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log("Country code fetched! " + country + "->" + JSON.parse(result)[0].osm_id);
    resOuter(JSON.parse(result)[0].osm_id);
  })
  .catch(error => console.log('error', error));
  return prom;
}