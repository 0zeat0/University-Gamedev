import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';



import {vw} from "../utilities/Responsiveness";


class ScrollContainer extends Component {
  render(){

    const styles = StyleSheet.create({
      ScrollContainer: {
        borderTopLeftRadius: vw(7),
        borderTopRightRadius: vw(7)
      },
      ScrollContainerContent: {
        flexDirection: "column",
        justifyContent: this.props.shouldNotCenter?"flex-start":"center",
        alignItems: "center",
        flexGrow: 1,
        padding: vw(6)
      }
    });


    return (
      <ScrollView
        style={styles.ScrollContainer}
        contentContainerStyle={styles.ScrollContainerContent}>
        {this.props.children}
      </ScrollView>
    );
  }
}


export default ScrollContainer;

