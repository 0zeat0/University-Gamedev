import firestore from '@react-native-firebase/firestore';
import {FindKanjiByLevelAndSet, FindKanjiByUnicodes} from "../utilities/DataManager";


export function kanjiLoad(level, set) {
    
    return dispatch => {

        dispatch({
            type: "KANJI_LOAD",
            payload: FindKanjiByLevelAndSet(level, set)
        });


        // firestore().disableNetwork()
        // .then(function() {
            
    
            
        // firestore()
        // .collection('Kanji')
        // .where('jlpt', '==', level).where('set', '==', set)
        // .orderBy('position', 'asc')
        // .get()
        // .then((QuerySnapshot)=>{
        //     dispatch({
        //         type: "KANJI_LOAD",
        //         payload: QuerySnapshot
        //     });
        // }, (error)=>{
        //     console.log("Error:" + error);
        //     dispatch({
        //         type: "KANJI_LOAD",
        //         payload: null
        //     });
        // });
    
    
            
        // });




    };
}



export function kanjiClear() {
    return dispatch => {
        dispatch({
            type: "KANJI_CLEAR",
            payload: null
        });
    };
}


export function kanjiLoadCustom(unicodes) {
    return dispatch => {
        
        if(unicodes!=null){

            dispatch({
                type: "KANJI_LOAD",
                payload: FindKanjiByUnicodes(unicodes)
            });
        }else{
            dispatch({
                type: "KANJI_LOAD",
                payload: null
            });
        }



        //     firestore().disableNetwork()
        //     .then(function() {
                
        
        //         firestore()
        //         .collection('Kanji')
        //         .where('unicode', 'in', unicodes)
        //         .get()
        //         .then((QuerySnapshot)=>{
        //             dispatch({
        //                 type: "KANJI_LOAD",
        //                 payload: QuerySnapshot
        //             });
        //         }, (error)=>{
        //             console.log("Error:" + error);
        //             dispatch({
        //                 type: "KANJI_LOAD",
        //                 payload: null
        //             });
        //         });
                
        
                
        //     });


        // } else {
        //     dispatch({
        //         type: "KANJI_LOAD",
        //         payload: null
        //     });
        // }


    };
}






