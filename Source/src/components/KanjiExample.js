import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Tts from 'react-native-tts';


import {SoundIcon} from '../../assets/Icons';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from './Button';
import Icon from '../components/Icon';


class KanjiExample extends Component {



  playSound(string){
    Tts.setDefaultLanguage('ja-JP');
    Tts.getInitStatus().then(() => {
      Tts.speak(string);
    });
  }

  
  render(){

      return (
        <View style={styles.item}>
          <View style={styles.jap}>
            <Text style={styles.furText}>{this.props.fur}</Text>
            <Text style={styles.japText}>{this.props.jap}</Text>
          </View>
          <View style={styles.eng}>
            <Text style={styles.engText}>{this.props.eng}</Text>
          </View>
          <Button parentStyle={styles.sound} onPress={()=>{this.playSound(this.props.jap);}}>
            <Icon fill="#c2c2c2" svg={SoundIcon()} width={vw(10)} height={vw(10)} padding={vh(1)}/>
          </Button>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  item: {
      width: "100%",
      backgroundColor: "#f6f6f6",
      borderRadius: vw(3),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: vw(3),
      margin: vw(0.8),
  },
  eng: {
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jap: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
},
  sound: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  engText: {
      margin: vw(2),
      fontSize: vw(6),
      color: "#4b4b4b",
      fontFamily: "NotoSansJP-Regular",
      lineHeight: vh(5),
      letterSpacing: vw(-0.2),
      textAlign: "center"
  },
  japText: {
      fontSize: vw(7),
      color: "#4b4b4b",
      fontFamily: "NotoSerifJP-Regular",
      lineHeight: vh(6),
      letterSpacing: vw(-0.2),
      textAlign: "center"
  },
  furText: {
      fontSize: vw(4),
      color: "#979797",
      fontFamily: "NotoSerifJP-Regular",
      lineHeight: vh(3),
      letterSpacing: vw(-0.2),
      textAlign: "center"
  }



});




export default KanjiExample;



