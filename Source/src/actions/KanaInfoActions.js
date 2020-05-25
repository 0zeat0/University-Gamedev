import firestore from '@react-native-firebase/firestore';
import {FindKanaInfoByUnicode} from "../utilities/DataManager";




export function kanaClear() {

    return dispatch => {
        dispatch({
            type: "KANA_INFO_CLEAR",
            payload: null
        });
    }

}



export function kanaLoadData(unicode,kana) {

    //const type = kana.charAt(0).toUpperCase() + kana.slice(1);

    // let character = null;
    // let other = null;
    // let svg = null;

    return dispatch => {
        dispatch({
        type: "KANA_INFO_LOAD_DATA",
        payload: FindKanaInfoByUnicode(kana.charAt(0).toUpperCase() + kana.slice(1), unicode)
    });


        // firestore().disableNetwork()
        // .then(function() {
            
    
        //     firestore()
        //     .collection(type)
        //     .where('unicode', '==', unicode)
        //     .get()
        //     .then(QuerySnapshotChar => {
        //         character = QuerySnapshotChar.docs[0].data();
        //         firestore()
        //         .collection("SVG")
        //         .where('unicode', '==', unicode)
        //         .get()
        //         .then(QuerySnapshotSVG => {
        //             svg = QuerySnapshotSVG.docs[0].data();
        //             firestore()
        //             .collection(character.type=="hiragana"?"Katakana":"Hiragana")
        //             .where('unicode', '==', character.otherKana)
        //             .get()
        //             .then(QuerySnapshotOther => {
        //                 other = QuerySnapshotOther.docs[0].data();
        //                 dispatch({
        //                     type: "KANA_INFO_LOAD_DATA",
        //                     payload: {character, other, svg}
        //                 });
        //             }
        //             );
        //         }
        //         );
        //     }
        //     );
    
  
    
    
        // });




    }
}
