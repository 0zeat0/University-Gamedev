import React, {Component, cloneElement } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from '../components/Button';


class InfoItem extends Component {

  render(){

    const styles = StyleSheet.create({
        item: {
            flex: 1,
            width: "100%",
            backgroundColor: "#f6f6f6",
            borderRadius: vw(8),
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: vw(2),
            margin: vw(0.8),
        },
        text: {
            marginLeft: vw(2),
            fontSize: vw(6),
            color: "#4b4b4b",
            fontFamily: "NotoSansJP-Regular",
            lineHeight: vh(5),
            letterSpacing: vw(-0.2)
        },
        comma: {
          fontSize: vw(6),
          color: "#4b4b4b",
          fontFamily: "NotoSansJP-Regular",
          lineHeight: vh(5),
          letterSpacing: vw(-0.2)
        },
        Button:{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          flex: 1,
        },
        Container:{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }
        

    
      });


      let isLink = false;
      if(this.props.isLink!=undefined){
        isLink = this.props.isLink;
      }

      let values = [];
      if(this.props.values!=undefined){
        this.props.values.forEach((value, index)=> {
          if(index==this.props.values.length-1){
            values.push(
              cloneElement(value, {key:this.props.id+index})
            );
          }
          if(index!=this.props.values.length-1){
            values.push(
              <View key={this.props.id+index+"container"} style={styles.Container}>
                {cloneElement(value, {key:this.props.id+index})}
                <Text key={this.props.id+"#"+index} style={styles.comma}>, </Text>
              </View>
            );
          }

        });
      } else {
        values.push(
          cloneElement(this.props.value, {key:this.props.id+0})
        );
      }



      return (
        <View style={styles.item}>
          <Button 
            parentStyle={styles.Button}
            isActive={isLink} 
            onPress={this.props.onPress}>
            <Text style={styles.text}>{this.props.text}</Text>
            {values}
          </Button>
        </View>
      );
  }
}




export default InfoItem;



