const tagReducer = (state = false, action) => {
    switch (action.type) {
        case 'TAG':
            return action;
        default:
            return state;
    }
};

export default tagReducer;