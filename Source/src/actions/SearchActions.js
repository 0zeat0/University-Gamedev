import firestore from '@react-native-firebase/firestore';
import {SearchKanjiByQuery} from "../utilities/DataManager";

export function search(query) {
    return dispatch => {

        let payload = SearchKanjiByQuery(query);

        dispatch({
            type: "SEARCH_SET_DATA",
            payload: {data: payload.data, found: payload.found}
        });


        // let data = [];
        // let found = null;



        // firestore().disableNetwork()
        // .then(function() {
            
    

        //     firestore()
        //     .collection('Kanji')
        //     .get()
        //     .then((QuerySnapshot)=>{
        //         for(let i = 0; i<QuerySnapshot.docs.length; i++){
        //             if(query!=""){
    
        //                 query=query.toLowerCase();
                        
        //                 if(QuerySnapshot.docs[i].data().unicode.includes(query)){
        //                     if(!data.includes(QuerySnapshot.docs[i].data())){
        //                         data.push(QuerySnapshot.docs[i].data());
        //                     }
        //                 }
        //                 if(QuerySnapshot.docs[i].data().japanese.includes(query)){
        //                     if(!data.includes(QuerySnapshot.docs[i].data())){
        //                         data.push(QuerySnapshot.docs[i].data());
        //                     }
        //                 }
    
        //                 QuerySnapshot.docs[i].data().meaning.forEach(item => {
        //                     if(item.includes(query)){
        //                         if(!data.includes(QuerySnapshot.docs[i].data())){
        //                             data.push(QuerySnapshot.docs[i].data());
        //                         }
        //                     }
        //                 });
    
        //                 QuerySnapshot.docs[i].data().kunYomi.forEach(item => {
        //                     if(item.includes(query)){
        //                         if(!data.includes(QuerySnapshot.docs[i].data())){
        //                             data.push(QuerySnapshot.docs[i].data());
        //                         }
        //                     }
        //                 });
    
            
        //                 QuerySnapshot.docs[i].data().kunYomiRomaji.forEach(item => {
        //                     if(item.includes(query)){
        //                         if(!data.includes(QuerySnapshot.docs[i].data())){
        //                             data.push(QuerySnapshot.docs[i].data());
        //                         }
        //                     }
        //                 });
    
        //                 QuerySnapshot.docs[i].data().onYomi.forEach(item => {
        //                     if(item.includes(query)){
        //                         if(!data.includes(QuerySnapshot.docs[i].data())){
        //                             data.push(QuerySnapshot.docs[i].data());
        //                         }
        //                     }
        //                 });
    
        //                 QuerySnapshot.docs[i].data().onYomiRomaji.forEach(item => {
        //                     if(item.includes(query)){
        //                         if(!data.includes(QuerySnapshot.docs[i].data())){
        //                             data.push(QuerySnapshot.docs[i].data());
        //                         }
        //                     }
        //                 });
        //             }
        //         }
        //         if(data.length>0){
        //             found=true;
        //         }else if(data.length<=0){
        //             found=false;
        //         }
        //         if(query.length==0){
        //             found=null;
        //         }

        //         dispatch({
        //             type: "SEARCH_SET_DATA",
        //             payload: {data, found}
        //         });


            // });
            
    
            
        // });



  
    };
}




export function setQuery(query) {
    return dispatch => {
            dispatch({
                type: "SEARCH_SET_QUERY",
                payload: query
            });
    };
}
export function setSearchTimer(time) {
    return dispatch => {
            dispatch({
                type: "SEARCH_SET_SEARCH_TIMER",
                payload: time
            });
    };
}

export function setIsSearching(is) {
    return dispatch => {
            dispatch({
                type: "SEARCH_SET_IS_SEARCHING",
                payload: is
            });
    };
}

export function clearData() {
    return dispatch => {
        let found = null;
        let data = [];
        dispatch({
            type: "SEARCH_SET_DATA",
            payload: {data, found}
        });
    };
}