const ButtonReducer = (state = {
    IsButtonDisabled: false
}, action) => {
    switch (action.type) {
        case "BUTTON_SET_DISABLED":
            state = {
                ...state,
                IsButtonDisabled: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default ButtonReducer;