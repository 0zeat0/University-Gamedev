
export function setIsDisabled(is) {
    return dispatch => {
            dispatch({
                type: "BUTTON_SET_DISABLED",
                payload: is
            });
    };
}
