// reducers/formReducer.js
const initialState = {
    prompt: '',
    mode: '',
    style: '',
    effects: '',
    character: '',
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FORM_DATA':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  