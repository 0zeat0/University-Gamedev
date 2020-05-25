const CustomSetsReducer = (state = {
    Sets: [],
    ShowModal: false,
    Input: "",
    ShowError: false
}, action) => {
    switch (action.type) {
        case "CUSTOM_SET_LOAD":
            state = {
                ...state,
                Sets: action.payload
            };
            break;
        case "CUSTOM_SET_SHOW_MODAL":
            state = {
                ...state,
                ShowModal: action.payload
            };
            break;
        case "CUSTOM_SET_INPUT":
            state = {
                ...state,
                Input: action.payload
            };
            break;
        case "CUSTOM_SET_CREATE":
            state = {
                ...state,
                Sets: action.payload,
                ShowError: false
            };
            break;
        case "CUSTOM_SET_SHOW_ERROR":
            state = {
                ...state,
                ShowError: action.payload
            };
            break;
            default:
            break;
    }
    return state;
};

export default CustomSetsReducer;