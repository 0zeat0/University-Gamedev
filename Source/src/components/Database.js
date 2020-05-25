import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import LinearGradient from 'react-native-linear-gradient';

import {connect} from "react-redux";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import logo from '../../assets/logo.png';

import { dbLoad } from "../actions/DatabaseActions";
import { setConnected } from "../actions/DatabaseActions";

class Database extends Component {

  componentDidMount(){

    this.CheckConnectivity();
  }

  componentWillUnmount(){
    this.unsubscribe();
 }


  CheckConnectivity(){
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.props.setConnected(state.isConnected);
      if(state.isConnected){
        this.props.dbLoad();
      }
    });
  }


  render(){

    if((this.props.Database.Connected==true || this.props.Database.ShouldRequestInternet==false)){
      if(!this.props.Database.Loaded){
        return (
          <View style={styles.MainContainer}>
            <LinearGradient colors={['#d7ece9', '#81ccc1', '#81ccc1', '#81ccc1', '#81ccc1', '#81ccc1']} style={styles.linearGradient}>
              <View style={styles.LogoContainer}>
                <Image style={styles.logo} source={logo} />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.TextHeader}>Loading data...</Text>
                <Text style={styles.Text}>If this is the first launch of the app, it may take some time.</Text>
              </View>
            </LinearGradient>
          </View>
      );
      } else {
      return (
          this.props.children
      );
      }
    } else{
      return (
          <View style={styles.MainContainer}>
            <LinearGradient colors={['#d7ece9', '#81ccc1', '#81ccc1', '#81ccc1', '#81ccc1', '#81ccc1']} style={styles.linearGradient}>
              <View style={styles.LogoContainer}>
                <Image style={styles.logo} source={logo} />
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.TextHeader}>Internet connection is required.</Text>
              </View>
            </LinearGradient>
          </View>
      );
    }

  }
}


const styles = StyleSheet.create({
  MainContainer: {
      width: vw(100),
      flex:1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  LogoContainer: {
      width: vw(100),
      height: vh(28),
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: vw(10),
  },
  TextContainer: {
    width: vw(100),
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: vw(7),
    borderTopRightRadius: vw(7),
    padding: vw(10)
},
  TextHeader: {
      fontSize: vw(10),
      color: "#4b4b4b",
      fontFamily: "NotoSansJP-Regular",
      lineHeight: vh(10),
      letterSpacing: vw(-0.2),
      textAlign:"center"
  },
  Text: {
    fontSize: vw(6),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2),
    textAlign:"center"
},
  linearGradient: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
  logo: {
    resizeMode : "center"
  }

});






const mapStateToProps = (state) => {
  return {
    Database: state.Database
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dbLoad: () => {
      dispatch(dbLoad());
    }, 
    setConnected: (connected) => {
      dispatch(setConnected(connected));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Database);

