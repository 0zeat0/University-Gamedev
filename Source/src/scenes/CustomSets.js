import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import {CustomSetIcon} from '../../assets/Icons';

import { customSetsLoad } from "../actions/CustomSetsActions";
import { customSetsShowModal } from "../actions/CustomSetsActions";
import { customSetsShowError } from "../actions/CustomSetsActions";
import { customSetsInput } from "../actions/CustomSetsActions";
import { customSetsCreate } from "../actions/CustomSetsActions";
import { customSetsDelete } from "../actions/CustomSetsActions";
import { customSetsClear } from "../actions/CustomSetsActions";
import { customSetsAddUnicode } from "../actions/CustomSetsActions";
import { customSetsRemoveUnicode } from "../actions/CustomSetsActions";

import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';
import SquareButton from '../components/SquareButton';
import CustomSetsItem from '../components/CustomSetsItem';


class CustomSets extends Component {



  componentDidMount(){

    this.props.customSetsLoad();

  }




  onChangeText(text){
    this.props.customSetsInput(text);
  }


  render(){
  
      return (
        <AppContainer>
          {(this.props.ShowModal==false && this.props.Sets.length>0)?<ScrollContainer>
          {this.props.Sets.map((set, index) => (
              <CustomSetsItem key={set.name+index} 
                shouldEdit={this.props.shouldEdit}
                unicode={this.props.unicode}
                set={set.data}
                text={set.name} 
                icon={CustomSetIcon()} 
                background="#e3e3e3" 
                color="#a4a4a4" 
                href={()=>{
                  Actions.push("KanjiSet", {custom: true, unicodes: set.data});
                }}
                add={()=>{
                  this.props.customSetsAddUnicode(set.name, this.props.Sets, this.props.unicode);
                  Actions.pop();
                }}
                remove={()=>{
                  this.props.customSetsRemoveUnicode(set.name, this.props.Sets, this.props.unicode);
                  Actions.pop();
                }}
                delete={()=>{
                  this.props.customSetsDelete(set.name, this.props.Sets);
                }}>
              </CustomSetsItem>
          ))}
          </ScrollContainer>:null}
          {(this.props.Sets.length==0 && this.props.ShowModal==false)?<View style={styles.NoResultView}>
            <Text style={styles.NoResultViewTextHeader}>You do not have custom sets.</Text>
          </View>:null}
          {this.props.ShowModal==false?<SquareButton text="ADD" onPress={()=>{
              this.props.customSetsShowModal(true);
          }} />:null}
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.ShowModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Enter set name</Text>
                </View>
                {this.props.ShowError?<View style={styles.modalError}>
                  <Text style={styles.modalErrorText}>Error: This name is not available.</Text>
                </View>:null}
                <View style={styles.modalInput}>
                  <TextInput
                    style={styles.modalInputText}
                    onChangeText={(text) => {this.onChangeText(text);}}
                    value={this.props.Input}
                    placeholder="Name..."
                  />
                </View>
                <View style={styles.modalButtons}>
                  <SquareButton shouldFlex={1} text="OK" onPress={()=>{
                    if((this.props.Sets.length==0 && this.props.Input!="") || (!this.props.Sets.some(e => e.name == this.props.Input)) && this.props.Input!=""){
                      this.props.customSetsCreate(this.props.Input, this.props.Sets);
                      this.props.customSetsShowModal(false);
                      this.props.customSetsInput("");
                    }else{
                      this.props.customSetsShowError(true);
                    }
                  }} />
                  <SquareButton shouldFlex={1} text="CANCEL" onPress={()=>{
                    this.props.customSetsShowModal(false);
                    this.props.customSetsInput("");
                    this.props.customSetsShowError(false);
                  }} />
                </View>
              </View>
            </View>
          </Modal>
        </AppContainer>
      );
  }
}


const styles = StyleSheet.create({
  modalContainer: {
    width: vw(100),
    height: vh(100),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: vw(7),
    marginBottom: vh(30)
  },
  modalButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalInput: {
    width: "90%",
    borderRadius: vw(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4d0d0"
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#72c8b9",
    padding: vw(2),
    marginBottom: vw(3),
    borderTopLeftRadius: vw(7),
    borderTopRightRadius: vw(7),
  },
  modalError: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: vw(0),
    paddingBottom: vw(2)
  },
  modalHeaderText: {
    fontSize: vw(6),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2)
  },
  modalInputText: {
    fontSize: vw(5),
    color: "#4b4b4b",
    lineHeight: vh(4),
  },
  modalErrorText: {
    fontSize: vw(4),
    color: "#e82929",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(3),
    letterSpacing: vw(-0.2),
    textAlign: "center"
  },
  NoResultView: {
    width: "100%",
    flex: 1,
    padding: vw(12),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  NoResultViewText: {
    fontSize: vw(5),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(4),
    letterSpacing: vw(-0.2),
    textAlign: "center",
  },
  NoResultViewTextHeader: {
    fontSize: vw(8),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(7),
    letterSpacing: vw(-0.2),
    textAlign: "center",
  },
});



const mapStateToProps = (state) => {
  return {
    Sets: state.CustomSets.Sets,
    ShowModal: state.CustomSets.ShowModal,
    Input: state.CustomSets.Input,
    ShowError: state.CustomSets.ShowError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    customSetsLoad: () => {
      dispatch(customSetsLoad());
    },
    customSetsShowModal: (show) => {
      dispatch(customSetsShowModal(show));
    },
    customSetsShowError: (show) => {
      dispatch(customSetsShowError(show));
    },
    customSetsInput: (input) => {
      dispatch(customSetsInput(input));
    },
    customSetsCreate: (name, sets) => {
      dispatch(customSetsCreate(name, sets));
    },
    customSetsDelete: (name, sets) => {
      dispatch(customSetsDelete(name, sets));
    },
    customSetsAddUnicode: (name, sets, unicode) => {
      dispatch(customSetsAddUnicode(name, sets, unicode));
    },
    customSetsRemoveUnicode: (name, sets, unicode) => {
      dispatch(customSetsRemoveUnicode(name, sets, unicode));
    },
    customSetsClear: () => {
      dispatch(customSetsClear());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSets);

