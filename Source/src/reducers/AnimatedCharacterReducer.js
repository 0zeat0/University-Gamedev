const AnimatedCharacterReducer = (state = {
    object: {},
    count: 0
}, action) => {
    switch (action.type) {
        case "ANIMATED_CHARACTER_COUNT":
            state = {
                ...state,
                count: action.payload
            };
            break;
        case "ANIMATED_CHARACTER_INIT":
            state = {
                ...state,
                object: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default AnimatedCharacterReducer;