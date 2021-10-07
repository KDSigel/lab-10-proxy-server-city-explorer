function cityLatLong(body) {
  return {
    'formatted_query': body[0].display_name,
    'latitude': body[0].lat,
    'longitude': body[0].lon
  };
}

module.exports = {
  cityLatLong
};