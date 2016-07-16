export default function(state = [], action) {
  switch(action.type) {
    case 'FOOD_TYPE_SELECTED':
      return action.payload;
  };

  return state;
};