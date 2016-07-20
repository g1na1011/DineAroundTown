export default function(state = null, action) {
  switch(action.type) {
    case 'RESTAURANT_SELECTED':
      return action.payload;
    case 'RESET_ACTIVE_RESTAURANT':
      return action.payload;
    default:
      return state;
  };
};