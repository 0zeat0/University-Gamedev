import firestore from '@react-native-firebase/firestore';
import {FindKanjiInfoByUnicode} from "../utilities/DataManager";


export function kanjiClear() {
    return dispatch => {
        dispatch({
            type: "KANJI_INFO_CLEAR",
            payload: null
        });
    }
}

export function kanjiLoadData(unicode) {

    // let kanji = null;
    // let svg = null;
    // let examples = [];

    return dispatch => {


        dispatch({
            type: "KANJI_INFO_LOAD_DATA",
            payload: FindKanjiInfoByUnicode(unicode)
        });



        // firestore().disableNetwork()
        // .then(function() {
            
    
 
        //     firestore()
        //     .collection("Kanji")
        //     .where('unicode', '==', unicode)
        //     .get()
        //     .then(QuerySnapshotKanji => {
        //         kanji = QuerySnapshotKanji.docs[0].data();
        //         firestore()
        //         .collection("SVG")
        //         .where('unicode', '==', unicode)
        //         .get()
        //         .then(QuerySnapshotSVG => {
        //             svg = QuerySnapshotSVG.docs[0].data();
        //             firestore()
        //             .collection("Examples")
        //             .where('id', 'in', kanji.examples)
        //             .get()
        //             .then(QuerySnapshotExamples => {
        //                 for(let i = 0; i <QuerySnapshotExamples.docs.length; i++ ){
        //                     examples.push(QuerySnapshotExamples.docs[i].data());
        //                 }
        //                 dispatch({
        //                     type: "KANJI_INFO_LOAD_DATA",
        //                     payload: {kanji, svg, examples}
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