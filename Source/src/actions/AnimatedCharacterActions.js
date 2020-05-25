import { Animated } from 'react-native';

export function animatedCharacterCount(svg) {
    const count = svg.paths.length;
    return dispatch => {
            dispatch({
                type: "ANIMATED_CHARACTER_COUNT",
                payload: count
            });
    };
}

export function animatedCharacterInit(svg) {

    const count = svg.paths.length;
    const newObject = {};

    for(let i = 0; i < count; i++){
      newObject['id' + i] = new Animated.Value(3339);
    }

    return dispatch => {
            dispatch({
                type: "ANIMATED_CHARACTER_INIT",
                payload: newObject
            });
    };
}



