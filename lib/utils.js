function cityLatLong(body) {
  return {
    'formatted_query': body[0].display_name,
    'latitude': body[0].lat,
    'longitude': body[0].lon
  };
}

function forecastTime (response) { 
  return response.body.data.slice(0, 7).map((item) => {
    return {
      forecast: item.weather.description,
      time: item.datetime
    };

  });
}

module.exports = {
  forecastTime, cityLatLong
};