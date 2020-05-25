import React, {Component} from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';



import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";
import Button from '../components/Button';


class SquareButton extends Component {
  render(){



    const styles = StyleSheet.create({
      SquareButton: {
        flex: 0 || this.props.shouldFlex,
        borderRadius: vw(3),
        backgroundColor: "#c9e6e1",
        padding: vw(2),
        marginLeft: vw(5),
        marginRight: vw(5),
        marginTop: vw(3),
        marginBottom: vw(3),
        flexDirection: "row",
        justifyContent: "center"
      },
      ButtonText: {
        fontSize: vw(6),
        color: "#637572",
        fontFamily: "NotoSansJP-Regular",
        lineHeight: vh(5),
        letterSpacing: vw(-0.2)
    }
    });





    return (
      <Button
        parentStyle={styles.SquareButton}
        onPress={this.props.onPress}
        cooldown={this.props.cooldown}
        >
        <Text style={styles.ButtonText}>{this.props.text}</Text>
      </Button>
    );
  }
}


export default SquareButton;

