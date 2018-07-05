import React from 'react';
import { Text, View, Button,StyleSheet,TouchableWithoutFeedback, Image, Easing , Animated} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import Survey_start from '../containers/Survey_start_container';
import Question1 from '../containers/Question1_container'
import Question6 from './Question6.js'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(5)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const RootStack = createStackNavigator(
  {
    Home: Survey_start,
    Question1: Question1,
    Question6: Question6
  },
  {
    initialRouteName: 'Home',
    navigationOptions:  {
      header: null
    },
  }
);



let bool = true;
 class Welcome_Component extends React.Component {

   constructor(props){
     super(props);
     this.state = {
       survey_dimensions : {
         width: 330,
         height: this.props.intensity.toggle ? 513 : 409
       }
     }
   }

  render() {

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>

        {/* This is the first row */}
        <View style={{flex: 1, backgroundColor: '#2D9CDB'}}>
          <Text style={styles.appbar_text}> Candidate Match Survey</Text>
        </View>

        <View style={styles.container}>
          <View style={[styles.survey_block,{
            width: 330,
            height: this.props.intensity.toggle ? 513 : 409
          }]}>
            {/* Here goes the things */}
            <RootStack />
          </View>
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    //Combined the two container styles so they didn't override each other
    paddingTop: 20,
    alignItems: 'center',
    flex: 7,
    //Aligned items flex-start so that they go to the top of the screen (leaving room for survey progress, etc)
    justifyContent: 'flex-start',
    //Grey
    backgroundColor: '#E5E5E5'
  },

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    padding: 20,
    color: 'blue'
  },

  appbar_text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 23,
    marginTop: 45,
    marginLeft: 50,
    color: 'white'
  },

  //The white rectangle that holds the questions
  survey_block: {
    //originally 360, 550, borderwidth 50
    borderRadius: 20,
    overflow: 'hidden',
  }
})

export default Welcome_Component;
