import AsyncStorage from '@react-native-community/async-storage';

export function customSetsLoad() {
    return dispatch => {
        let getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('CustomSets')
              return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch(e) {
              console.log(e);
            }
          }
          getData()
          .then((data)=>{
            let payload = [];
            if(data!=null && data!=undefined && data.items.length>0){
                payload = data.items;
            }
            dispatch({
                type: "CUSTOM_SET_LOAD",
                payload: payload
            });
          });
           
    };
}


export function customSetsShowModal(show) {
    return dispatch => {
            dispatch({
                type: "CUSTOM_SET_SHOW_MODAL",
                payload: show
            });
    };
}

export function customSetsShowError(show) {
    return dispatch => {
            dispatch({
                type: "CUSTOM_SET_SHOW_ERROR",
                payload: show
            });
    };
}


export function customSetsInput(input) {
    return dispatch => {
            dispatch({
                type: "CUSTOM_SET_INPUT",
                payload: input
            });
    };
}


export function customSetsCreate(name, sets) {
    return dispatch => {


        let newSets = {
            items: []
        };

        if(sets != null && sets.length>0){
        newSets.items = sets;
        }else{
            newSets.items = [];
        }

        newSets.items.push(
            {
                name: name,
                data: null, 
            }
        );

        let payload = newSets.items;

        let storeData = async () => {
            try {
              const jsonValue = JSON.stringify(newSets)
              await AsyncStorage.setItem("CustomSets", jsonValue);
            } catch (e) {
              console.log(e);
            }
        }
        storeData()
        .then(()=>{
                dispatch({
                    type: "CUSTOM_SET_CREATE",
                    payload: payload
                });
            }
        );

       
    
    };
}



export function customSetsClear() {
    return dispatch => {
        let clearAll = async () => {
            try {
              await AsyncStorage.clear()
            } catch(e) {
                console.log(e);
            }
          }
          let payload = [];
          clearAll()
          .then(()=>{
            dispatch({
                type: "CUSTOM_SET_LOAD",
                payload: payload
            });
          });

    };
}







export function customSetsDelete(name, sets) {
    return dispatch => {


        let newSets = {
            items: []
        };

        sets.forEach(element => {
            if(element.name != name){
                newSets.items.push(element);
            }
        });

        let payload = newSets.items


        let storeData = async () => {
            try {
              const jsonValue = JSON.stringify(newSets)
              await AsyncStorage.setItem("CustomSets", jsonValue);
            } catch (e) {
              console.log(e);
            }
        }
        storeData()
        .then(()=>{
                dispatch({
                    type: "CUSTOM_SET_LOAD",
                    payload: payload
                });
            }
        );

       
    
    };
}


export function customSetsAddUnicode(name, sets, unicode) {

    
    return dispatch => {

        let newSets = {
            items: []
        };

        sets.forEach(element => {
            if(element.name == name){
                if(element.data == null){
                    element.data = [];
                }
                element.data.push(unicode);
            }
            newSets.items.push(element);
        });

        let payload = newSets.items


        let storeData = async () => {
            try {
              const jsonValue = JSON.stringify(newSets)
              await AsyncStorage.setItem("CustomSets", jsonValue);
            } catch (e) {
              console.log(e);
            }
        }
        storeData()
        .then(()=>{
                dispatch({
                    type: "CUSTOM_SET_LOAD",
                    payload: payload
                });
            }
        );

       
    
    };
}




export function customSetsRemoveUnicode(name, sets, unicode) {

    
    return dispatch => {

        let newSets = {
            items: []
        };

        sets.forEach(element => {
            if(element.name == name){
                if(element.data == null){
                    element.data = [];
                }
                const index = element.data.indexOf(unicode);
                if (index > -1) {
                    element.data.splice(index, 1);
                }
            }
            newSets.items.push(element);
        });

        let payload = newSets.items


        let storeData = async () => {
            try {
              const jsonValue = JSON.stringify(newSets)
              await AsyncStorage.setItem("CustomSets", jsonValue);
            } catch (e) {
              console.log(e);
            }
        }
        storeData()
        .then(()=>{
                dispatch({
                    type: "CUSTOM_SET_LOAD",
                    payload: payload
                });
            }
        );

       
    
    };
}

