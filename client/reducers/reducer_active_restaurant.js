export default function(state = null, action) {
  switch(action.type) {
    case 'RESTAURANT_SELECTED':
      return action.payload;
  }

  return state;
}