
const generateImageReducer = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_IMAGE_SUCCESS':
            return {
                status: action.status,
            };
        default:
            return state;
    }
};  

export default generateImageReducer;