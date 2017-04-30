const apiKey = 'AIzaSyDXCE0TtYiYr7iEe1IttCS-0b3EK5FHeJ8';
console.log('Initiating Maps');
var googleMapsClient = require('@google/maps').createClient({
  key: apiKey
});
console.log('Maps instance initialized for key', apiKey);
const cache = [];
module.exports =  {
  getZipLatLon: function (zipCode) {
    console.log('Cache content', cache[zipCode]);
    if (cache[zipCode]) {
      console.log('Location Served from cache', zipCode);
      return cache[zipCode];
    }
    console.log('Location not found in cache, looking in maps...', zipCode);
    const promise = new Promise((resolve, reject)=>{
        googleMapsClient.geocode({
          address: zipCode + ' Australia ',
      }, function(err, response) {
      if (!err) {
        cache[zipCode] = response.json.results[0].geometry.location;
        console.log('Cache set in cache', cache[zipCode], zipCode);
        resolve(response.json.results[0].geometry.location);
        console.log('Found location in Maps', response.json.results[0].geometry.location);
      } else {
        reject(err);
        console.log('Error', err)
      }
    });

  });
  return promise;

  }
}
