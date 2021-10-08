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

function nameImagePriceRatingUrl (response) {
  return response.body.businesses.map((business) => {
    return {
      name: business.name,
      image_url: business.image_url,
      price: business.price,
      rating: business.rating,
      url: business.url
    };
  }
  );
}



module.exports = {
  forecastTime, cityLatLong, nameImagePriceRatingUrl
};