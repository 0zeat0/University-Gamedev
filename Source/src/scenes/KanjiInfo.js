import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';
import Tts from 'react-native-tts';

import {vw} from "../utilities/Responsiveness"; 
import {vh} from "../utilities/Responsiveness"; 

import {PlayIcon, SoundIcon, CustomSetIcon} from '../../assets/Icons';


import { kanjiLoadData } from "../actions/KanjiInfoActions";
import { kanjiClear } from "../actions/KanjiInfoActions";


import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';
import AnimatedCharacter from '../components/AnimatedCharacter';
import RoundButton from '../components/RoundButton';
import SquareButton from '../components/SquareButton';
import InfoItem from '../components/InfoItem';
import KanjiExample from '../components/KanjiExample';


class KanjiInfo extends Component {

  componentDidMount(){


   this.props.kanjiLoadData(this.props.unicode);

  }




  componentWillUnmount(){

    this.props.kanjiClear();
  }




  playSound(string){

    Tts.setDefaultLanguage('ja-JP');
    Tts.getInitStatus().then(() => {
      Tts.speak(string);
    });

  }



  render(){


     let kanjiDoc = null;
     let isFirst = true;
     let isLast = true;
     let Next = null;
     let Prev = null;

     
      if(this.props.useNav){
       kanjiDoc = this.props.data.find(element => element.data.unicode == this.props.unicode);
       isFirst = this.props.data.indexOf(kanjiDoc)==0;
       isLast = this.props.data.indexOf(kanjiDoc)==this.props.data.length-1;
       if(!isFirst){
         Prev = this.props.data[this.props.data.indexOf(kanjiDoc)-1].data;
       }
  
       if(!isLast){
         Next = this.props.data[this.props.data.indexOf(kanjiDoc)+1].data;
       }
      }

      let sound = "";
      let unicode;
      let jlpt;
      let strokes;
      let meanings = [];
      let onYomis = [];
      let kunYomis = [];

      if(this.props.Kanji){

      this.props.Kanji.onYomi.forEach(reading => {
        sound += reading + ", ";
      });
      this.props.Kanji.kunYomi.forEach(reading => {
        reading = reading.replace("-","");
        reading = reading.replace(".","");
        sound += reading + ", ";
      });



      unicode = <Text style={styles.EnglishInfoItem}>{this.props.Kanji.unicode}</Text>
      jlpt = <Text style={styles.EnglishInfoItem}>{"N"+this.props.Kanji.jlpt}</Text>
      strokes = <Text style={styles.EnglishInfoItem}>{this.props.Kanji.strokes}</Text>


      this.props.Kanji.meaning.forEach(meaning => {
        meanings.push(
          <Text style={styles.EnglishInfoItem}>{meaning}</Text>
        );
      });


      this.props.Kanji.onYomi.forEach(onYomi => {
        onYomis.push(
          <Text style={styles.JapaneseInfoItem}>{onYomi}</Text>
        );
      });


      let kuns = [];

      this.props.Kanji.kunYomi.forEach(kunYomi => {
        if(!kunYomi.includes("-")){
          if(!kunYomi.includes(".")){
            kuns.push({
              value: kunYomi.replace("-",""),
              optional: null
            });
          }
          if(kunYomi.includes(".")){

          let kunParts =  kunYomi.split(".");

          let found = kuns.findIndex(element => element.value == kunParts[0]);
          
          if(found!=-1){
            kuns[found].optional = kunParts[1];
          }else{
            kuns.push({
              value: kunParts[0],
              optional: kunParts[1]
            });
          }
          }
        }
      });

      kuns.forEach(kun => {
        if(kun.optional!=null){
          kunYomis.push(
            <View style={styles.ViewInfoItem}>
              <Text style={styles.JapaneseInfoItem}>{kun.value}</Text>
              <Text style={styles.JapaneseOptionalInfoItem}>{kun.optional}</Text>
            </View>
          );
        }else if(kun.optional==null){
          kunYomis.push(
            <View style={styles.ViewInfoItem}>
              <Text style={styles.JapaneseInfoItem}>{kun.value}</Text>
            </View>
          );
        }
        
      });

    }


  
     if(this.props.Kanji){
      return (
        <AppContainer>
        <ScrollContainer>
          {this.props.SVG?<AnimatedCharacter svg={this.props.SVG} setPlay={play => this.playChild = play} setUpdate={update => this.updateChild = update} />:null}
          <View style={styles.RoundButtonsList}>
            <RoundButton fill="#99c3c3" icon={SoundIcon()} onPress={() => {this.playSound(sound);}} />  
            <RoundButton fill="#abd9aa" icon={PlayIcon()} onPress={() => {this.playChild();}} />  
            <RoundButton fill="#e1b6b6" icon={CustomSetIcon()} onPress={() => { Actions.push("CustomSets", {shouldEdit: true, unicode: this.props.Kanji.unicode});}} />  
          </View>
          <Text style={styles.Header}>Info:</Text>
          <View style={styles.InfoList}>
            <InfoItem 
              id="Meaning"
              text="Meaning:" 
              values={meanings} 
            />
            <InfoItem 
              id="On-yomi"
              text="On-yomi:" 
              values={onYomis} 
            />
            <InfoItem 
              id="Kun-yomi"
              text="Kun-yomi:" 
              values={kunYomis} 
            />
            <InfoItem 
              id="Strokes"
              text="Strokes:" 
              value={strokes} 
            />
            <InfoItem 
              id="JLPT"
              text="JLPT:" 
              value={jlpt} 
            />
            <InfoItem 
              id="Unicode"
              text="Unicode:" 
              value={unicode} 
            />
          </View>
          <Text style={styles.Header}>Examples:</Text>
          <View style={styles.InfoList}>
            {this.props.Examples.map((example, index) => (
              <KanjiExample key={example.english+index} jap={example.japanese} eng={example.english} fur={example.furigana} />
            ))}
          </View>
        </ScrollContainer>
        
  
        {this.props.useNav == true &&
          <View style={styles.SquareButtonsList}>
          {!isFirst?<SquareButton shouldFlex={1} text="PREV" cooldown={50} onPress={()=>{
      
            this.props.kanjiClear();
            Actions.refresh({
              unicode: Prev.unicode, 
              data: this.props.data,
              useNav: true
            });
            this.props.kanjiLoadData(Prev.unicode);
            this.updateChild();
            }}  />:null}
          {!isLast?<SquareButton shouldFlex={1} text="NEXT" cooldown={50} onPress={()=>{
       
            this.props.kanjiClear();
            Actions.refresh({
              unicode: Next.unicode,
              data: this.props.data,
              useNav: true
            });
            this.props.kanjiLoadData(Next.unicode);
            this.updateChild();
            }}  />:null}
        </View>
        }
      </AppContainer>
      );

     }else {
      return (
        <AppContainer>
        </AppContainer>
      );
     }
  




  }
}


const styles = StyleSheet.create({
  RoundButtonsList: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
  },
  InfoList: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: vw(1)
  },
  SquareButtonsList: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  Header: {
    fontSize: vw(6),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(0.2),
    margin: vw(1)
  },
  JapaneseInfoItem:{
    marginLeft: vw(2),
    fontSize: vw(6.5),
    color: "#4b4b4b",
    fontFamily: "NotoSerifJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2)
  },
  EnglishInfoItem:{
    marginLeft: vw(2),
    fontSize: vw(6),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2),
  },
  JapaneseOptionalInfoItem:{
    fontSize: vw(6.5),
    color: "#979797",
    fontFamily: "NotoSerifJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2)
  },
  ViewInfoItem:{
    flexDirection: "row",
    justifyContent: "space-between"
  }

  });



  const mapStateToProps = (state) => {
    return {
      Kanji: state.KanjiInfo.Kanji,
      SVG: state.KanjiInfo.SVG,
      Examples: state.KanjiInfo.Examples,
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      kanjiLoadData: (unicode) => {
        dispatch(kanjiLoadData(unicode));
      },
      kanjiClear: () => {
        dispatch(kanjiClear());
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(KanjiInfo);

