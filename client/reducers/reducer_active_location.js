export default function(state = null, action) {
  switch(action.type) {
    case 'LOCATION_SELECTED':
      return action.payload;
    case 'RESET_LOCATION':
      return action.payload;
    default:
      return state;
  };
};