const KanjiReducer = (state = {
    Data: null,
    Loaded: false
}, action) => {
    switch (action.type) {
        case "KANJI_LOAD":
            state = {
                ...state,
                Data: action.payload,
                Loaded: true
            };
            break;
        case "KANJI_CLEAR":
            state = {
                ...state,
                Data: null,
                Loaded: false
            };
            break;
            default:
            break;
    }
    return state;
};

export default KanjiReducer;