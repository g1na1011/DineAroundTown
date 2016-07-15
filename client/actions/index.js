const API_KEY = 'AIzaSyDFurjykPrxOxl6PmGBjqJuwy4GcdCsrrs';

export function selectRestaurant(rest) {
  return {
    type: 'RESTAURANT_SELECTED',
    payload: rest
  };
}