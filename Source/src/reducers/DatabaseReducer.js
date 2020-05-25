const DatabaseReducer = (state = {
    Loaded: true,
    Connected: true,
    ShouldRequestInternet: false
}, action) => {
    switch (action.type) {
        case "DATABASE_SET_LOADED":
            state = {
                ...state,
                Loaded: action.payload,
                ShouldRequestInternet: false
            };
            break;
        case "DATABASE_SET_CONNECTED":
            state = {
                ...state,
                Connected: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default DatabaseReducer;