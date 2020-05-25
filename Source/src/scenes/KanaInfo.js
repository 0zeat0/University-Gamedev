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

import {PlayIcon, SoundIcon} from '../../assets/Icons';


import { kanaLoad } from "../actions/KanaInfoActions";
import { kanaLoadData } from "../actions/KanaInfoActions";
import { kanaClear } from "../actions/KanaInfoActions";
import { otherKanaLoad } from "../actions/KanaInfoActions";
import { svgLoad } from "../actions/KanaInfoActions";
import { setUpdate } from "../actions/KanaInfoActions";

import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';
import AnimatedCharacter from '../components/AnimatedCharacter';
import RoundButton from '../components/RoundButton';
import SquareButton from '../components/SquareButton';
import InfoItem from '../components/InfoItem';



class KanaInfo extends Component {

  componentDidMount(){

    this.props.kanaLoadData(this.props.unicode, this.props.kana);
  }




  componentWillUnmount(){
    this.props.kanaClear();
  }




  playSound(string){

    Tts.setDefaultLanguage('ja-JP');
    Tts.getInitStatus().then(() => {
      Tts.speak(string);
    });

  }



  render(){

     let characterDoc = null;
     let isFirst = true;
     let isLast = true;
     let Next = null;
     let Prev = null;
     let Data = [];
     this.props.data.forEach(item => {
       if(item.data.isEmpty!=true){
        Data.push(item.data)
       }
     });

     if(this.props.useNav){
      characterDoc = Data.find(element => element.unicode == this.props.unicode);
      isFirst = Data.indexOf(characterDoc)==0;
      isLast = Data.indexOf(characterDoc)==Data.length-1;
      if(!isFirst){
        Prev = Data[Data.indexOf(characterDoc)-1];
      }
  
      if(!isLast){
        Next = Data[Data.indexOf(characterDoc)+1];
      }
     }


     if(this.props.Kana){

      let unicode =  <Text style={styles.EnglishInfoItem}>{this.props.Kana.unicode}</Text>
      let strokes =  <Text style={styles.EnglishInfoItem}>{this.props.Kana.strokes}</Text>
      let romaji =  <Text style={styles.EnglishInfoItem}>{this.props.Kana.romaji}</Text>
      let otherKana = <Text style={styles.JapaneseLinkInfoItem}>{""}</Text>; 
      let otherKanaOnPress = ()=>{};
      if(this.props.OtherKana){
        otherKana = <Text style={styles.JapaneseLinkInfoItem}>{this.props.OtherKana.japanese}</Text>; 
        otherKanaOnPress = ()=>{ 
          this.props.kanaClear();
          Actions.refresh({unicode: this.props.OtherKana.unicode, kana: this.props.OtherKana.type, useNav:false });
          this.props.kanaLoadData(this.props.OtherKana.unicode, this.props.OtherKana.type);
         } 
      }


      return (
        <AppContainer>
        <ScrollContainer>
          {this.props.SVG?<AnimatedCharacter svg={this.props.SVG} setPlay={play => this.playChild = play} setUpdate={update => this.updateChild = update} />:null}
          <View style={styles.RoundButtonsList}>
            <RoundButton fill="#99c3c3" icon={SoundIcon()} onPress={() => {this.playSound(this.props.Kana.japanese);}} />  
            <RoundButton fill="#abd9aa" icon={PlayIcon()} onPress={() => {this.playChild();}} />  
          </View>
          <Text style={styles.Header}>Info:</Text>
          <View style={styles.InfoList}>
            <InfoItem 
              id="Romaji"
              text="Romaji:" 
              value={romaji} 
            /> 
            <InfoItem 
              id={this.props.Kana.type=="hiragana"?"Katakana:":"Hiragana:"} 
              text={this.props.Kana.type=="hiragana"?"Katakana:":"Hiragana:"}  
              value={otherKana} 
              isLink={true} 
              onPress={otherKanaOnPress} 
            />                     
            <InfoItem 
              id="Strokes"
              text="Strokes:" 
              value={strokes} 
            />
            <InfoItem 
              id="Unicode"
              text="Unicode:" 
              value={unicode} 
            />
          </View> 
        </ScrollContainer>
        
  
        {this.props.useNav == true &&
          <View style={styles.SquareButtonsList}>
          {!isFirst?<SquareButton shouldFlex={1} text="PREV" cooldown={50} onPress={()=>{
            this.props.kanaClear();
            Actions.refresh({
              unicode: Prev.unicode, 
              kana: Prev.type,
              data: this.props.data,
              useNav: true
            });
            this.props.kanaLoadData(Prev.unicode, Prev.type);
            this.updateChild();
            }}  />:null}
          {!isLast?<SquareButton shouldFlex={1} text="NEXT" cooldown={50} onPress={()=>{
            this.props.kanaClear();

            Actions.refresh({
              unicode: Next.unicode, 
              kana: Next.type,
              data: this.props.data,
              useNav: true
            });
            this.props.kanaLoadData(Next.unicode, Next.type);
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
  JapaneseLinkInfoItem:{
    marginLeft: vw(2),
    fontSize: vw(6.5),
    color: "#78cabb",
    fontFamily: "NotoSerifJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2)
  },

  });



  const mapStateToProps = (state) => {
    return {
      Kana: state.KanaInfo.Kana,
      SVG: state.KanaInfo.SVG,
      OtherKana: state.KanaInfo.OtherKana,
      shouldUpdate: state.KanaInfo.shouldUpdate
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      kanaLoad: (unicode, kana) => {
        dispatch(kanaLoad(unicode, kana));
      },
      kanaLoadData: (unicode, kana) => {
        dispatch(kanaLoadData(unicode, kana));
      },
      kanaClear: () => {
        dispatch(kanaClear());
      },
      otherKanaLoad: (unicode, kana) => {
        dispatch(otherKanaLoad(unicode, kana));
      },
      svgLoad: (unicode) => {
        dispatch(svgLoad(unicode));
      },
      setUpdate: (update) => {
        dispatch(setUpdate(update));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(KanaInfo);

