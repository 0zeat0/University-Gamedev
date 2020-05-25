const HiraganaReducer = (state = {
    Data: {}
}, action) => {
    switch (action.type) {
        case "HIRAGANA_LOAD":
            state = {
                ...state,
                Data: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default HiraganaReducer;