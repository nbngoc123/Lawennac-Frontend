const imageReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_SELECTED_IMAGE':
        return action.status; 
      default:
        return state; 
    }
  };
export default imageReducer;
