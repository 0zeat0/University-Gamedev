import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {connect} from "react-redux";

import { testInit } from "../actions/ReadingTestActions";
import { testSetup } from "../actions/ReadingTestActions";
import { testSetShowAnswer } from "../actions/ReadingTestActions";
import { testUpdateStatus } from "../actions/ReadingTestActions";
import { testUpdateTime } from "../actions/ReadingTestActions";
import { testUpdateResponseTime } from "../actions/ReadingTestActions";
import { testClearResponseTime } from "../actions/ReadingTestActions";
import { testTogglePause } from "../actions/ReadingTestActions";
import { testSetFinished } from "../actions/ReadingTestActions";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import {PauseIcon} from '../../assets/Icons';

import Icon from '../components/Icon';
import Button from '../components/Button';
import KanjiTestAnswer from '../components/KanjiTestAnswer';
import TestStatusBar from '../components/TestStatusBar';
import KanjiTestQuestion from '../components/KanjiTestQuestion';
import SquareButton from '../components/SquareButton';
import AppContainer from '../components/AppContainer';


class KanjiReadingTest extends Component {


  componentDidMount(){
    this.props.testInit(this.props.data);
    setTimeout(()=>{
      this.setupTestIteration();
      this.TimeTimer = setInterval(
        () => this.TimeTick(),
        1000
      );
    },500);
  }


  restart(){
      if(this.props.IsFinished==true){
      this.props.testInit(this.props.data);
      setTimeout(()=>{
        this.setupTestIteration();
        this.TimeTimer = setInterval(
          () => this.TimeTick(),
          1000
        );
        this.props.testSetFinished(false);
      },500);
    }

  }


  
  componentWillUnmount() {
    clearInterval(this.TimeTimer);
    clearInterval(this.ResponseTimer);
  }


  clearResponseTimer(){
    clearInterval(this.ResponseTimer);
  }

  clearAllTimers(){
    clearInterval(this.TimeTimer);
    clearInterval(this.ResponseTimer);
  }


  RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  TimeTick() {
    if(!this.props.IsPaused){
      this.props.testUpdateTime(this.props.Time);
    }
  }

  ResponseTick() {
    if(!this.props.IsPaused){
      if(this.props.ResponseTime.toFixed(1)==10){
        this.next(false);
      } else {
        this.props.testUpdateResponseTime(this.props.ResponseTime);
      }
    }
  }
  

  setupTestIteration(){

    let Index = this.RandomInt(0,this.props.Data.length);
    let Item = this.props.Data[Index].data;
    let AnswersType = this.RandomInt(0,2)==1?"jap":"eng";
    let Answers = [];
    let PossibleAnswers = [];
    let NumberOfQuestions = 1;


    for(let i = 0; i < this.props.data.length; i++){
        PossibleAnswers.push(this.props.data[i]);
    }

    NumberOfQuestions = PossibleAnswers.length;
    let impossibleIndex = PossibleAnswers.indexOf(this.props.Data[Index]);
    PossibleAnswers.splice(impossibleIndex, 1);

    for(let i = 0; i<4; i++){

      let RandomIntTemp = this.RandomInt(0, PossibleAnswers.length);

      if(AnswersType=="eng"){


        let onYomi = PossibleAnswers[RandomIntTemp].data.onYomi;
        let kunYomiData = PossibleAnswers[RandomIntTemp].data.kunYomi;

        let answer = "";

        onYomi =  onYomi.slice(0, 2);
    
    
        onYomi.forEach((item, index) => {
          if(index!=onYomi.length-1){
            answer += item+", ";
          } else {
            answer += item;
          }
        });
    
        answer += "; ";



  let kuns = [];

  kunYomiData.forEach(kunYomi => {
    if(!kunYomi.includes("-")){
      if(!kunYomi.includes(".")){
        kuns.push({
          value: kunYomi.replace("-",""),
          optional: null
        });
      }
      if(kunYomi.includes(".")){
      let kunParts =  kunYomi.split(".");
      let found = kuns.findIndex(element => element.value == kunParts[0]);
      if(found!=-1){
        kuns[found].optional = kunParts[1];
      }else{
        kuns.push({
          value: kunParts[0],
          optional: kunParts[1]
        });
      }
      }
    }
  });

  kuns = kuns.slice(0, 2);

  kuns.forEach((item, index) => {
    if(index!=kuns.length-1){
        answer += item.value + (item.optional?item.optional:"")  + ", ";
    } else {
      answer += item.value + (item.optional?item.optional:"");
    }
  });

        Answers.push(
          {
            value: answer,
            isCorect: false
          }
        );
      } else if(AnswersType=="jap"){

        Answers.push(
          {
            value: PossibleAnswers[RandomIntTemp].data.japanese,
            isCorect: false
          }
        );
      }

      let deleteIndex = PossibleAnswers.indexOf(PossibleAnswers[RandomIntTemp]);
      PossibleAnswers.splice(deleteIndex, 1);
    }



    if(AnswersType=="eng"){



    let onYomi = Item.onYomi;
    let kunYomiData = Item.kunYomi;

    let answer = "";

    onYomi =  onYomi.slice(0, 2);


    onYomi.forEach((item, index) => {
      if(index!=onYomi.length-1){
        answer += item+", ";
      } else {
        answer += item;
      }
    });




    let kuns = [];

    kunYomiData.forEach(kunYomi => {
    if(!kunYomi.includes("-")){
    if(!kunYomi.includes(".")){
    kuns.push({
      value: kunYomi.replace("-",""),
      optional: null
    });
    }
    if(kunYomi.includes(".")){
    let kunParts =  kunYomi.split(".");
    let found = kuns.findIndex(element => element.value == kunParts[0]);
    if(found!=-1){
    kuns[found].optional = kunParts[1];
    }else{
    kuns.push({
      value: kunParts[0],
      optional: kunParts[1]
    });
    }
    }
    }
    });

    kuns = kuns.slice(0, 2);


    if(kuns.length>0){
      answer += "; ";
    }



    kuns.forEach((item, index) => {
    if(index!=kuns.length-1){
    answer += item.value + (item.optional?item.optional:"")  + ", ";
    } else {
    answer += item.value + (item.optional?item.optional:"");
    }
    });



      let tempRand = this.RandomInt(0,Answers.length);
      Answers[tempRand].value = answer;
      Answers[tempRand].isCorect = true;
    } else if(AnswersType=="jap"){
      let tempRand = this.RandomInt(0,Answers.length);
      Answers[tempRand].value = Item.japanese;
      Answers[tempRand].isCorect = true;
    }


    this.ResponseTimer = setInterval(
      () => this.ResponseTick(),
      1000/10
    );
    
    setTimeout(()=>{
      this.props.testSetup(this.props.Data, Index, Item, Answers, AnswersType, NumberOfQuestions);
    },0);


    
  
  }


  next(isCorect){
    this.clearResponseTimer();
    if(this.props.ShouldShowAnswer==false){
      this.props.testSetShowAnswer(true);
      setTimeout(()=>{
        if( this.props.ReadingTest.QuestionNumber+1> this.props.ReadingTest.NumberOfQuestions){
              this.clearAllTimers();
              this.props.testSetFinished(true);
              let sceneToPop = "KanjiSet";
             Actions.push("TestResults", {
               sceneToPop: sceneToPop,
               numberOfQuestions: this.props.ReadingTest.NumberOfQuestions,
               answeredQuestions: this.props.ReadingTest.QuestionNumber+1,
               corectAnswers: this.props.ReadingTest.CorectAnswers+1,
               wrongAnswers: this.props.ReadingTest.WrongAnswers,
               time: this.props.ReadingTest.Time,
               responseTimeSum: this.props.ReadingTest.ResponseTimeSum,
               restart: ()=>{this.restart();}
              });
        } else {
        this.props.testSetShowAnswer(false);
        this.props.testUpdateStatus(
          this.props.ReadingTest.QuestionNumber, 
          this.props.ReadingTest.CorectAnswers, 
          this.props.ReadingTest.WrongAnswers,  
          isCorect,  
          this.props.ReadingTest.ResponseTimeSum,
          this.props.ReadingTest.ResponseTime
        );
        this.props.testClearResponseTime();
        this.setupTestIteration();
        }
      }, 1000);
    }
  }


  render(){



    if(!this.props.IsPaused){
      return (
        <AppContainer>
         <TestStatusBar currentQuestion={this.props.QuestionNumber} numberOfQuestions={this.props.NumberOfQuestions} time={this.props.ResponseTime} />
         {this.props.QuestuonItem?<KanjiTestQuestion answersType={this.props.AnswersType} item={this.props.QuestuonItem} />:null} 
          <View style={styles.Answers}>
          {this.props.Answers.map((answer, i) => {          
                  return (
                  <KanjiTestAnswer 
                      key={"A"+i} 
                      type={this.props.AnswersType}
                      text={answer.value}
                      isCorect={answer.isCorect}
                      onPress={()=>{this.next(answer.isCorect);}}
                  />
                  ) 
                  })}
          </View>
          <View style={styles.SquareButtonsList}>
          <SquareButton shouldFlex={1} text="FINISH" onPress={()=>{
              this.clearAllTimers();
             
              this.props.testSetFinished(true);

  
              let sceneToPop = "KanjiSet";
      
             Actions.push("TestResults", {
               sceneToPop: sceneToPop,
               numberOfQuestions: this.props.ReadingTest.NumberOfQuestions,
               answeredQuestions: this.props.ReadingTest.QuestionNumber,
               corectAnswers: this.props.ReadingTest.CorectAnswers,
               wrongAnswers: this.props.ReadingTest.WrongAnswers,
               time: this.props.ReadingTest.Time,
               responseTimeSum: this.props.ReadingTest.ResponseTimeSum,
               restart: ()=>{this.restart();}
              });
          }} />
          <SquareButton shouldFlex={1} text="PAUSE" onPress={()=>{
            this.props.testTogglePause(this.props.IsPaused);
          }} />
          </View>
        </AppContainer>
      );
    } else {
      return (
        <AppContainer>
          <TestStatusBar currentQuestion={this.props.QuestionNumber} numberOfQuestions={this.props.NumberOfQuestions} time={this.props.ResponseTime} />
          <View style={styles.Pause}>
            <Button onPress={()=>{
              this.props.testTogglePause(this.props.IsPaused);
            }}>
              <Icon fill="#c9e6e1" svg={PauseIcon()} width={vw(50)} height={vw(50)} padding={vh(2)}/>
            </Button>
          </View>
          <View style={styles.SquareButtonsList}>
          <SquareButton shouldFlex={1} text="FINISH" onPress={()=>{
   

              this.clearAllTimers();

    
              this.props.testSetFinished(true);

              let sceneToPop = "KanjiSet";

             Actions.push("TestResults", {
               sceneToPop: sceneToPop,
               numberOfQuestions: this.props.ReadingTest.NumberOfQuestions,
               answeredQuestions: this.props.ReadingTest.QuestionNumber,
               corectAnswers: this.props.ReadingTest.CorectAnswers,
               wrongAnswers: this.props.ReadingTest.WrongAnswers,
               time: this.props.ReadingTest.Time,
               responseTimeSum: this.props.ReadingTest.ResponseTimeSum,
               restart: ()=>{this.restart();}
              });

          }} />
          <SquareButton shouldFlex={1} text={this.props.IsPaused==false?"PAUSE":"RESUME"} onPress={()=>{
            this.props.testTogglePause(this.props.IsPaused);
          }} />
          </View>
        </AppContainer>
      );
    }


  }
}


const styles = StyleSheet.create({
  Answers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent:"space-between",
    margin: vw(4),
  },
  SquareButtonsList: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  Pause: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});


const mapStateToProps = (state) => {
  return {
    ReadingTest: state.ReadingTest,
    Data: state.ReadingTest.Data,
    QuestionNumber: state.ReadingTest.QuestionNumber,
    AnswersType: state.ReadingTest.AnswersType,
    Answers: state.ReadingTest.Answers,
    QuestuonItem: state.ReadingTest.QuestuonItem,
    PerQuestionTime: state.ReadingTest.PerQuestionTime,
    ShouldShowAnswer: state.ReadingTest.ShouldShowAnswer,
    NumberOfQuestions: state.ReadingTest.NumberOfQuestions,
    Time: state.ReadingTest.Time,
    ResponseTime: state.ReadingTest.ResponseTime,
    IsPaused: state.ReadingTest.IsPaused,
    IsFinished: state.ReadingTest.IsFinished
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    testInit: (data) => {
      dispatch(testInit(data));
    },
   testSetup: (data, indexToDelete, questionItem, answers, answersType, numberOfQuestions) => {
      dispatch(testSetup(data, indexToDelete, questionItem, answers, answersType, numberOfQuestions));
    },
    testSetShowAnswer: (should) => {
      dispatch(testSetShowAnswer(should));
    },
    testUpdateStatus: (questionNumber, corectAnswers, wrongAnswers,  isCorect, responseTimeSum, responseTime) => {
      dispatch(testUpdateStatus(questionNumber, corectAnswers, wrongAnswers,  isCorect, responseTimeSum, responseTime));
    },
    testUpdateTime: (time) => {
      dispatch(testUpdateTime(time));
    },
    testUpdateResponseTime: (responseTime) => {
      dispatch(testUpdateResponseTime(responseTime));
    },
    testClearResponseTime: () => {
      dispatch(testClearResponseTime());
    },
    testTogglePause: (isPaused) => {
      dispatch(testTogglePause(isPaused));
    },
    testSetFinished: (finished) => {
      dispatch(testSetFinished(finished));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KanjiReadingTest);



