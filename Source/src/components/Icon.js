import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Svg, {
  Path
} from 'react-native-svg';


import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";


class Icon extends Component {
  render(){

    const styles = StyleSheet.create({
      icon: {
        backgroundColor: this.props.background,
        borderRadius: this.props.radius,
        padding: this.props.padding,
        margin: this.props.margin,
        width: this.props.width || vw(15),
        height: this.props.height || vw(15)
      }
    });

    return (
        <View style={styles.icon}>
          <Svg viewBox="0 0 512 512">
            <Path fill={this.props.fill} d={this.props.svg}/>
          </Svg>
        </View>
    );
  }
}



export default Icon;

