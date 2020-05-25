const KanjiInfoReducer = (state = {
    Kanji: null,
    SVG: null,
    Examples: null
}, action) => {
    switch (action.type) {
        case "KANJI_INFO_CLEAR":
            state = {
                ...state,
                Kanji: action.payload,
                SVG: action.payload,
                Examples: action.payload
            };
            break;
        case "KANJI_INFO_LOAD_DATA":
            state = {
                ...state,
                Kanji: action.payload.kanji,
                SVG: action.payload.svg,
                Examples: action.payload.examples
            };
            break;
            default:
            break;
    }
    return state;
};

export default KanjiInfoReducer;