import React from 'react';
import { Text, View, Button,StyleSheet,TouchableWithoutFeedback, Image, Easing , Animated} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator,createSwitchNavigator,createMaterialTopTabNavigator,createBottomTabNavigator, NavigationActions} from 'react-navigation';
import Survey_start from './Survey_start';
import Question1 from '../containers/Question1_container'

var RootStack = createStackNavigator(
  {
    Home: {screen: Survey_start},
    Question1: {screen: Question1},
    test: {screen: Question1}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle : {
      backgroundColor: 'transparent',
      alignItems:'center',
      justifyContent:'center'
    }
  }
);

 class Welcome_Component extends React.Component {

   constructor(props){
     super(props);
     this.state = {
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
          <View style={[styles.survey_block]}>
            {/* Here goes the things */}
            <RootStack/>
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
    width: 360,
    height: 549,
  }
})

export default Welcome_Component;
