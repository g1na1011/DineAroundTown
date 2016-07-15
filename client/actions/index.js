export function selectRestaurant(rest) {
  return {
    type: 'RESTAURANT_SELECTED',
    payload: rest
  };
}