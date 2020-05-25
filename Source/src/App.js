import React, {Component} from 'react';
import {
  StyleSheet,
  Easing,
  Animated
} from 'react-native';
import {Provider} from "react-redux";
import { Scene, Router } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';


import {vh} from "./utilities/Responsiveness";
import {vw} from "./utilities/Responsiveness";


import Store from "./Store";
import Home from './scenes/Home';
import Kana from './scenes/Kana';
import Kanji from './scenes/Kanji';
import JLPTLevel from './scenes/JLPTLevel';
import KanjiSet from './scenes/KanjiSet';
import KanjiInfo from './scenes/KanjiInfo';
import Hiragana from './scenes/Hiragana';
import Katakana from './scenes/Katakana';
import KanaTestSelect from './scenes/KanaTestSelect';
import KanjiTestSelect from './scenes/KanjiTestSelect';
import KanaInfo from './scenes/KanaInfo';
import KanaReadingTest from './scenes/KanaReadingTest';
import KanjiReadingTest from './scenes/KanjiReadingTest';
import KanjiMeaningTest from './scenes/KanjiMeaningTest';
import TestResults from './scenes/TestResults';
import Search from './scenes/Search';
import CustomSets from './scenes/CustomSets';

import NavigationButton from "./components/NavigationButton";
import Database from "./components/Database";

import logo from '../assets/logo.png';




class App extends Component {

  render(){
    const MyTransitionSpec = ({
      duration: 500,
      easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
      timing: Animated.timing,
  });
  
  const transitionConfig = () => ({
      transitionSpec: MyTransitionSpec,
      screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
          const width = layout.initWidth;
  
  
          const inputRange = [index - 1, index, index + 1];
  
          const opacity = position.interpolate({
              inputRange,
              outputRange: ([0, 1, 0]),
          });
  
          const translateX = position.interpolate({
              inputRange,
              outputRange: ([width, 0, 0]),
          });
  
          return {
              opacity,
              transform: [
                  { translateX },
              ],
          };
      }
  });


    return (
      <Provider store={Store}>
        <Database>
          <LinearGradient colors={['#d7ece9', '#81ccc1', '#81ccc1', '#81ccc1', '#81ccc1', '#81ccc1']} style={styles.linearGradient}>
            <Router sceneStyle={styles.router}>
              <Scene 
                key="root" 
                headerLayoutPreset="center"
                transitionConfig={transitionConfig}
                init={true}
                >
                <Scene 
                      key="Home" 
                      component={Home} 
                      title="Test" 
                      navigationBarStyle={styles.navBarHome} 
                      titleStyle={styles.title} 
                      navigationBarTitleImage={logo} 
                      navigationBarTitleImageStyle={styles.logo} 
                      init={true}
                />
                <Scene 
                      key="Kana" 
                      component={Kana} 
                      title="Kana"  
                      navigationBarStyle={styles.navBar} 
                      titleStyle={styles.title} 
                      renderLeftButton={<NavigationButton isHomeButton={false} />}
                      renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                      key="Kanji" 
                      component={Kanji} 
                      title="Kanji"  
                      navigationBarStyle={styles.navBar} 
                      titleStyle={styles.title} 
                      renderLeftButton={<NavigationButton isHomeButton={false} />}
                      renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                 <Scene 
                      key="JLPTLevel" 
                      component={JLPTLevel} 
                      title="Kanji level"  
                      navigationBarStyle={styles.navBar} 
                      titleStyle={styles.title} 
                      renderLeftButton={<NavigationButton isHomeButton={false} />}
                      renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                      key="KanjiSet" 
                      component={KanjiSet} 
                      title="Kanji set"  
                      navigationBarStyle={styles.navBar} 
                      titleStyle={styles.title} 
                      renderLeftButton={<NavigationButton isHomeButton={false} />}
                      renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                 <Scene 
                      key="KanjiInfo" 
                      component={KanjiInfo} 
                      title="Kanji info"  
                      navigationBarStyle={styles.navBar} 
                      titleStyle={styles.title} 
                      renderLeftButton={<NavigationButton isHomeButton={false} />}
                      renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="Hiragana" 
                    component={Hiragana} 
                    title="Hiragana"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                 <Scene 
                    key="Katakana" 
                    component={Katakana} 
                    title="Katakana"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="KanaTestSelect" 
                    component={KanaTestSelect} 
                    title="Select test"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                 <Scene 
                    key="KanjiTestSelect" 
                    component={KanjiTestSelect} 
                    title="Select test"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="KanaReadingTest" 
                    component={KanaReadingTest} 
                    title="Kana test"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="KanjiReadingTest" 
                    component={KanjiReadingTest} 
                    title="Kanji test"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="KanjiMeaningTest" 
                    component={KanjiMeaningTest} 
                    title="Kanji test"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="TestResults" 
                    component={TestResults} 
                    title="Test result"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={null}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="KanaInfo" 
                    component={KanaInfo} 
                    title="Kana Info"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="Search" 
                    component={Search} 
                    title="Search"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
                <Scene 
                    key="CustomSets" 
                    component={CustomSets} 
                    title="Custom sets"  
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    renderLeftButton={<NavigationButton isHomeButton={false} />}
                    renderRightButton={<NavigationButton isHomeButton={true} />}
                />
              </Scene>
            </Router>
          </LinearGradient>
        </Database>
      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  router: {
    backgroundColor: "rgba(0,0,0,0)"
  },
  navBarHome: {
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: vh(10),
    marginTop: vh(10)
  },
  navBar: {
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: vh(1),
    marginTop: vh(1)
  },
  title: {
    fontSize: vh(5),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(8),
    letterSpacing: vw(-0.3)
  },
  logo: {
    resizeMode : "center"
  }
});



export default App;

