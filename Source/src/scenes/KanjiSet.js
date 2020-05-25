import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import { kanjiLoad } from "../actions/KanjiActions";
import { kanjiClear } from "../actions/KanjiActions";
import { kanjiLoadCustom } from "../actions/KanjiActions";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import KanjiSetItem from '../components/KanjiSetItem';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';
import SquareButton from '../components/SquareButton';


class KanjiSet extends Component {



  componentDidMount() {


    if(this.props.custom != true){
      this.props.kanjiLoad(this.props.level, this.props.set);
    } else {
      if(this.props.unicodes != null){
        this.props.kanjiLoadCustom(this.props.unicodes);
      } else {
        this.props.kanjiLoadCustom(null);
      }
      
    }


 }


 componentWillUnmount(){
  this.props.kanjiClear();
}

  render(){


    let items = [];

    if(this.props.Kanji){
      this.props.Kanji.docs.forEach((Kanji, i) => {
        let data = this.props.Kanji.docs[i].data;
        items.push({
          key: "Item"+i,
          index: i+1,
          data: data,
          onPress: ()=>{
            Actions.push("KanjiInfo", {
              unicode: data.unicode,
              useNav: true,
              data: this.props.Kanji.docs
            });
          }
        });
      });
    }



    return (
      <AppContainer>
        {(items.length>0 || this.props.custom != true)?<ScrollContainer>
          {items.map((item) => (
            <KanjiSetItem 
              key={item.key} 
              index={item.index} 
              data={item.data} 
              onPress={item.onPress}>
            </KanjiSetItem>
          ))}
        </ScrollContainer>:null}
        {(this.props.custom == true && this.props.Loaded == true && items.length==0)?<View style={styles.NoResultView}>
            <Text style={styles.NoResultViewTextHeader}>This set is empty.</Text>
            <Text style={styles.NoResultViewText}>To add items to this set you can go to "Kanji Info" page and tap on "Custom set" button. </Text>
        </View>:null}
        {(items.length>=5)?<SquareButton text="TEST" onPress={()=>{
            Actions.push("KanjiTestSelect", {data: this.props.Kanji.docs});
        }} />:null}
      </AppContainer>
    );
  }
}



const styles = StyleSheet.create({
  NoResultView: {
    width: "100%",
    flex: 1,
    padding: vw(5),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  NoResultViewText: {
    fontSize: vw(5),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(4),
    letterSpacing: vw(-0.2),
    textAlign: "center",
  },
  NoResultViewTextHeader: {
    fontSize: vw(7),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(7),
    letterSpacing: vw(-0.2),
    textAlign: "center",
  },
});



const mapStateToProps = (state) => {
  return {
    Kanji: state.Kanji.Data,
    Loaded: state.Kanji.Loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kanjiLoad: (level, set) => {
      dispatch(kanjiLoad(level, set));
    },
    kanjiClear: () => {
      dispatch(kanjiClear());
    },
    kanjiLoadCustom: (unicodes) => {
      dispatch(kanjiLoadCustom(unicodes));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KanjiSet);

