const SearchReducer = (state = {
    Query: "",
    Data: [],
    SearchTimer: 10,
    Found: null,
    IsSearching: false
}, action) => {
    switch (action.type) {
        case "SEARCH_SET_QUERY":
            state = {
                ...state,
                Query: action.payload
            };
            break;
        case "SEARCH_SET_DATA":
            state = {
                ...state,
                Data: action.payload.data,
                Found: action.payload.found,
                IsSearching: false
            };
            break;
        case "SEARCH_SET_SEARCH_TIMER":
            state = {
                ...state,
                SearchTimer: action.payload
            };
            break;
        case "SEARCH_SET_IS_SEARCHING":
            state = {
                ...state,
                IsSearching: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default SearchReducer;