import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from '../components/Button';


class KanaItem extends Component {

  
  render(){
    if(this.props.isEmpty==false){
      return (
        <Button parentStyle={styles.item} onPress={this.props.onPress}>
          <View style={styles.top}>
              <Text style={styles.japanese}>{this.props.jap}</Text>
          </View> 
          <View style={styles.bot}>
              <Text style={styles.english}>{this.props.eng.toLowerCase()}</Text>
          </View>
        </Button>
      );
    } else {
      return (
        <Button parentStyle={[styles.item, styles.empty]} isActive={false}>
          <View style={styles.top}>
              <Text style={styles.japanese}></Text>
          </View> 
          <View style={styles.bot}>
              <Text style={styles.english}></Text>
          </View>
        </Button>
      );
    }

  }
}

const styles = StyleSheet.create({
    item: {
        width: vw(16),
        height: vh(14),
        backgroundColor: "#f6f6f6",
        borderRadius: vw(2),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: vw(0.8)
    },
    top: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    bot: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    japanese: {
        fontSize: vw(7),
        color: "#4b4b4b",
        marginLeft: "10%",
        fontFamily: "NotoSerifJP-Regular",
        lineHeight: vh(6),
        letterSpacing: vw(-0.2)
    },
    english: {
        fontSize: vw(6),
        color: "#a3a3a3",
        marginRight: "10%",
        fontFamily: "NotoSansJP-Regular",
        lineHeight: vh(6),
        letterSpacing: vw(-0.2)
    },
    empty: {
      opacity: 0
    }
        
  });

export default KanaItem;

