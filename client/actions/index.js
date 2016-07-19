import axios from 'axios';

// const API_KEY = 'AIzaSyDFurjykPrxOxl6PmGBjqJuwy4GcdCsrrs';
// const API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}`;

export const LOCATION_SELECTED = 'LOCATION_SELECTED';
export const FOOD_TYPE_SELECTED = 'FOOD_TYPE_SELECTED';
export const RESTAURANT_SELECTED = 'RESTAURANT_SELECTED';

export function selectLocation(location) {
  return {
    type: LOCATION_SELECTED,
    payload: location.location
  }
}

export function foodTypeSelected(type, location) {
  const request = axios.post('/fetch_rest', {foodType: type, location: location});

  return {
    type: FOOD_TYPE_SELECTED,
    payload: request
  }
}

export function restaurantSelected(placeId) {
  console.log('wassup', placeId);
  const request = axios.post('/fetch_details', {placeId: placeId});

  return {
    type: RESTAURANT_SELECTED,
    payload: request
  }
}