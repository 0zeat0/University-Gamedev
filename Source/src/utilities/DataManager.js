import data from "../../assets/data.json";



export function GetHiragana(){
    return data.Hiragana;
}


export function GetKatakana(){
    return data.Katakana;
}



export function FindKanaInfoByUnicode(type, unicode){

    let Kana;
    let OtherKana;
    let character = null;
    let other = null;
    let svg = null;


    if(type=="Hiragana"){
        Kana = data.Hiragana.docs;
        OtherKana = data.Katakana.docs;
    } else if(type=="Katakana"){
        Kana = data.Katakana.docs;
        OtherKana = data.Hiragana.docs;
    }

    Kana.forEach(element => {
        if(element.data.unicode == unicode){
            character = element.data;
        }
    });

    OtherKana.forEach(element => {
        if(element.data.unicode == character.otherKana){
            other = element.data;
        }
    });

    data.SVG.docs.forEach(element => {
        if(element.data.unicode == unicode){
            svg = element.data;
        }
    });


    let result = {
        character,
        other,
        svg
    }

    return result;
}




  function CompareKanjiByPosition(a, b) {
    if (a.data.position < b.data.position) {
      return -1;
    }
    if (a.data.position > b.data.position) {
      return 1;
    }
    return 0;
  }


export function FindKanjiByLevelAndSet(level, set){

    let Data = {
        docs: []
    };

    data.Kanji.docs.forEach(element => {
        if(element.data.jlpt == level && element.data.set == set){
            Data.docs.push(element);
        } 
    });

   Data.docs.sort(CompareKanjiByPosition);

    return Data;
}


export function FindKanjiByUnicodes(unicodes){

    let Data = {
        docs: []
    };

    data.Kanji.docs.forEach(element => {
        if(unicodes.includes(element.data.unicode)){
            Data.docs.push(element);
        } 
    });

    return Data;
}






export function FindKanjiInfoByUnicode(unicode){

    let kanji = null;
    let svg = null;
    let examples = [];


    data.Kanji.docs.forEach(element => {
        if(element.data.unicode == unicode){
            kanji = element.data
        } 
    });

    data.SVG.docs.forEach(element => {
        if(element.data.unicode == unicode){
            svg = element.data
        } 
    });

    data.Examples.docs.forEach(element => {
        if(kanji.examples.includes(element.data.id)){
            examples.push(element.data);
        } 
    });


    let result = {
        kanji,
        svg,
        examples
    }

    return result;
}


export function SearchKanjiByQuery(query){

    let resdata = [];
    let found = null;

    data.Kanji.docs.forEach(element => {
        if(query!=""){
            query=query.toLowerCase();
            
            if(element.data.unicode.includes(query)){
                if(!resdata.includes(element.data)){
                    resdata.push(element.data);
                }
            }
            if(element.data.japanese.includes(query)){
                if(!resdata.includes(element.data)){
                    resdata.push(element.data);
                }
            }

            element.data.meaning.forEach(item => {
                if(item.includes(query)){
                    if(!resdata.includes(element.data)){
                        resdata.push(element.data);
                    }
                }
            });

            element.data.kunYomi.forEach(item => {
                if(item.includes(query)){
                    if(!resdata.includes(element.data)){
                        resdata.push(element.data);
                    }
                }
            });


            element.data.kunYomiRomaji.forEach(item => {
                if(item.includes(query)){
                    if(!resdata.includes(element.data)){
                        resdata.push(element.data);
                    }
                }
            });

            element.data.onYomi.forEach(item => {
                if(item.includes(query)){
                    if(!resdata.includes(element.data)){
                        resdata.push(element.data);
                    }
                }
            });

            element.data.onYomiRomaji.forEach(item => {
                if(item.includes(query)){
                    if(!resdata.includes(element.data)){
                        resdata.push(element.data);
                    }
                }
            });
        }
        
    });


    if(resdata.length>0){
        found=true;
    }else if(resdata.length<=0){
        found=false;
    }
    if(query.length==0){
        found=null;
    }

    let result = {
        data: resdata,
        found: found
    }

    return result;
}