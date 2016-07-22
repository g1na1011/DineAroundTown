import axios from 'axios';

export const LOCATION_SELECTED = 'LOCATION_SELECTED';
export const FOOD_TYPE_SELECTED = 'FOOD_TYPE_SELECTED';
export const RESTAURANT_SELECTED = 'RESTAURANT_SELECTED';
export const RESET_RESTAURANTS = 'RESET_RESTAURANTS';
export const RESET_LOCATION = 'RESET_LOCATION';
export const RESET_ACTIVE_RESTAURANT = 'RESET_ACTIVE_RESTAURANT';

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
  const request = axios.post('/fetch_details', {placeId: placeId});

  return {
    type: RESTAURANT_SELECTED,
    payload: request
  }
}

export function resetRestaurants() {
  return {
    type: RESET_RESTAURANTS,
    payload: []
  }
}

export function resetLocation() {
  return {
    type: RESET_LOCATION,
    payload: null
  }
}

export function resetActiveRestaurant() {
  return {
    type: RESET_ACTIVE_RESTAURANT,
    payload: null
  }
}