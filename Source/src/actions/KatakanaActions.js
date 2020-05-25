import firestore from '@react-native-firebase/firestore';
import {GetKatakana} from "../utilities/DataManager";

export function katakanaLoad() {
    return dispatch => {



        dispatch({
            type: "KATAKANA_LOAD",
            payload: GetKatakana()
        });


        // firestore().disableNetwork()
        // .then(function() {
            
    
        //     firestore()
        //     .collection('Katakana')
        //     .orderBy('position', 'asc')
        //     .get()
        //     .then((QuerySnapshot)=>{
        //         dispatch({
        //             type: "KATAKANA_LOAD",
        //             payload: QuerySnapshot
        //         });
        //     }, (error)=>{
        //         console.log("Error:" + error);
        //         dispatch({
        //             type: "KATAKANA_LOAD",
        //             payload: {}
        //         });
        //     });

            
    
            
        // });



    };
}



