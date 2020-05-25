import {Dimensions} from 'react-native';


export function vw(value){
    const windowWidth = Dimensions.get('window').width;
    const result = (windowWidth/100)*value;
    return result;
}


export function vh(value){
    const windowHeight = Dimensions.get('window').height;
    const result = (windowHeight/100)*value;
    return result;
}


