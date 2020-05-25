import firestore from '@react-native-firebase/firestore';
import {GetHiragana} from "../utilities/DataManager";


export function hiraganaLoad() {
    return dispatch => {

        dispatch({
            type: "HIRAGANA_LOAD",
            payload: GetHiragana()
        });





    // firestore().disableNetwork()
    // .then(function() {
    
    //     firestore()
    //     .collection('Hiragana')
    //     .orderBy('position', 'asc')
    //     .get()
    //     .then((QuerySnapshot)=>{
    //         dispatch({
    //             type: "HIRAGANA_LOAD",
    //             payload: QuerySnapshot
    //         });
    //     }, (error)=>{
    //         console.log("Error:" + error);
    //         dispatch({
    //             type: "HIRAGANA_LOAD",
    //             payload: {}
    //         });
    //     });


    // });





    };
}



