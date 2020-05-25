const KatakanaReducer = (state = {
    Data: {}
}, action) => {
    switch (action.type) {
        case "KATAKANA_LOAD":
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

export default KatakanaReducer;