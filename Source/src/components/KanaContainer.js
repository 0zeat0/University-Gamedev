import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList  
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";

import KanaItem from '../components/KanaItem';


class KanaContainer extends Component {
  render(){
    return (
      <FlatList 
        style={styles.KanaContainer}
        contentContainerStyle={styles.KanaContainerContent}
        data={this.props.data}
        numColumns={5}
        initialNumToRender={5}
        renderItem={({ item }) => <KanaItem  
          key={item.data.position}
          onPress={()=>{Actions.push("KanaInfo", {
            unicode: item.data.unicode,
            kana: item.data.type,
            useNav: true,
            data: this.props.data
          });}} 
          jap={item.data.japanese} 
          eng={item.data.romaji} 
          isEmpty={item.data.isEmpty} 
        />}
        keyExtractor={item => item.data.position}
      />
    );
  }
}

const styles = StyleSheet.create({
  KanaContainer: {
    flex: 1,
    borderTopLeftRadius: vw(7),
    borderTopRightRadius: vw(7)
  },
  KanaContainerContent: {
    alignItems: "center",
    flexGrow: 1,
    padding: vw(6)
  }
});



export default KanaContainer;

