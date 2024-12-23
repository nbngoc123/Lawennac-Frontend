const initialState = {
    isLoggedIn: false,
    userId: null,
  };


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                userId: action.userId
            };
        case 'LOGIN_FAIL':
        case 'LOGOUT':
            return {
            ...state,
            isLoggedIn: false,
            userId: null,
            };
        default:
            return state;
    }
};

export default userReducer;