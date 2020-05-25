import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import Button from "../components/Button";
import Icon from "../components/Icon";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";


import {ShearchIcon} from '../../assets/Icons';

import { setQuery } from "../actions/SearchActions";
import { search } from "../actions/SearchActions";
import { setSearchTimer } from "../actions/SearchActions";
import { clearData } from "../actions/SearchActions";
import { setIsSearching } from "../actions/SearchActions";

import AppContainer from '../components/AppContainer';
import ScrollContainer from '../components/ScrollContainer';
import KanjiSetItem from '../components/KanjiSetItem';

class Search extends Component {


  componentWillUnmount(){
    clearInterval(this.Timer);
    this.props.clearData();
    this.props.setQuery("");
    this.props.search("");
    this.props.setIsSearching(false);
  }

  
  onChangeText(text){

    this.props.clearData();
    this.props.setIsSearching(true);

    clearInterval(this.Timer);
    this.Timer = setInterval(
      () => this.Tick(),
      100
    );
    this.props.setQuery(text);
  }



  Tick(){
    if(this.props.SearchTimer!=0){
      this.props.setSearchTimer(this.props.SearchTimer-2);
    } else{
      this.props.setIsSearching(true);
      clearInterval(this.Timer);
      this.props.search(this.props.Query);
      this.props.setSearchTimer(10);
    }

  }

  clear(){
    this.props.setQuery("");
    this.props.search("");
  }
  


  render(){

    let renderNoResult = false;
    if(this.props.Found==true){
      renderNoResult = false;
    }else if(this.props.Found==false && this.props.Query.length!=0 ){
      renderNoResult=true;
    }

      return (
        <AppContainer>
          <View style={styles.Search}>
            <Icon fill="#4b4b4b" svg={ShearchIcon()} width={vw(5)} height={vw(5)} padding={vh(0)} margin={vw(2)}/>
            <TextInput
              style={styles.TextInput}
              onChangeText={(text) => {this.onChangeText(text);}}
              value={this.props.Query}
              placeholder="Search..."
            />
            <Button parentStyle={styles.SearchButton} onPress={()=>{this.clear();}}>
              <Text style={styles.SearchButtonText}>Clear</Text>
            </Button>
          </View>
          {this.props.IsSearching?<View style={styles.ActivityIndicatorContainer}>
            <ActivityIndicator size={50} color="#72c8b9" />
          </View>:null}
          {(renderNoResult)?<View style={styles.NoResult}><Text style={styles.NoResultText}>{"Sorry, no match found."}</Text></View>:null}
          <ScrollContainer shouldNotCenter={true}>
          {this.props.Data.slice(0, 20).map((data, i) => (
              <KanjiSetItem key={data.unicode} index={i+1} data={data} onPress={()=>{
                Actions.push("KanjiInfo", {
                  unicode: data.unicode,
                  useNav: false});
              }}></KanjiSetItem>
          ))}
          </ScrollContainer>
          
        </AppContainer>
      );
  }

}


const styles = StyleSheet.create({
  Search: {
      backgroundColor: "#f6f6f6",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: vw(2),
      paddingBottom: vw(2),
      borderTopLeftRadius: vw(7),
      borderTopRightRadius: vw(7)

  },
  TextInput: {
    height: vw(12), 
    flex:1,
    borderColor: '#4b4b4b', 
    borderWidth: vw(0.2),
    borderRadius: vw(1)
  },
  SearchButton:{
    borderRadius: vw(2),
    backgroundColor: "#72c8b9",
    padding: vw(2),
    margin: vw(2)
  },
  SearchButtonText:{
    fontSize: vw(5),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(3.5),
    letterSpacing: vw(-0.2)
  },
  NoResult: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: vw(5)
  },
  NoResultText: {
    fontSize: vw(6),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2),
    textAlign: "center"
    
  },
  ActivityIndicatorContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: vw(8),
  },

  });
  



const mapStateToProps = (state) => {
  return {
    Query: state.Search.Query,
    Data: state.Search.Data,
    SearchTimer: state.Search.SearchTimer,
    Found: state.Search.Found,
    IsSearching: state.Search.IsSearching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (query) => {
      dispatch(setQuery(query));
    },
    search: (query) => {
      dispatch(search(query));
    },
    setSearchTimer: (time) => {
      dispatch(setSearchTimer(time));
    },
    clearData: () => {
      dispatch(clearData());
    },
    setIsSearching: (is) => {
      dispatch(setIsSearching(is));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

