export default function(state = [], action) {
  switch(action.type) {
    case 'FOOD_TYPE_SELECTED':
      return action.payload;
    case 'RESET_RESTAURANTS':
      return action.payload;
    default:
      return state; 
  };
};