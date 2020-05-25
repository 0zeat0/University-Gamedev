import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

export function dbLoad() {
    return dispatch => {

        dispatch({
            type: "DATABASE_SET_LOADED",
            payload: true
        });

        //   let getData = async () => {
        //     try {
        //       const value = await AsyncStorage.getItem('DataLoaded')
        //       if(value !== null) {
        //           return value;
        //       }
        //     } catch(e) {
        //         console.log(e);
        //     }
        //   }


        //   let storeData = async (value) => {
        //     try {
        //       await AsyncStorage.setItem('DataLoaded', value)
        //     } catch (e) {
        //         console.log(e);
        //     }
        //   }
          
        //   getData()
        //   .then((data)=>{
        //     if(data=="true"){
        //         dispatch({
        //             type: "DATABASE_SET_LOADED",
        //             payload: true
        //         });
        //     } else if(data==undefined || data=="false") {



                // firestore().enableNetwork()
                // .then(function() {

                // firestore()
                // .collection('Hiragana')
                // .get()
                // .then(()=>{
                //     firestore()
                //     .collection('Katakana')
                //     .get()
                //     .then(()=>{
                //         firestore()
                //         .collection('Kanji')
                //         .get()
                //         .then(()=>{
                //             firestore()
                //             .collection('SVG')
                //             .get()
                //             .then(()=>{
                //                 firestore()
                //                 .collection('Examples')
                //                 .get()
                //                 .then(()=>{
                //                     storeData("true")
                //                     .then(()=>{
                //                         dispatch({
                //                             type: "DATABASE_SET_LOADED",
                //                             payload: true
                //                         });
                //                     });
                //                 });
                //             });
                //         });
                //     });
                // });

                // });
                
        //     }

        //   });

    }
}



export function setConnected(connected) {
    return dispatch => {
            dispatch({
                type: "DATABASE_SET_CONNECTED",
                payload: connected
            });
    };
}



