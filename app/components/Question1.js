import React from 'react';
import { Text, View, Button,StyleSheet,TouchableHighlight,TouchableOpacity, Image, BackHandler} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Checkbox from './checkbox';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index: 1,
  actions: [NavigationActions.navigate({ routeName: 'Question1' })],
});

class Question1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      response: 'default',
      next_screen: false,
      num_question: 1,
      questions: {
        1 :{
          qtext: 'dsffds',
          img: 'dsfdf'
        },
        2: {
          qtext:'dsifdsf',
          img:'dsfsdf'
        }
      }
    }
    this.set_response = this.set_response.bind(this)
    this.next_screen = this.next_screen.bind(this)
    this.change_screen = this.change_screen.bind(this)
  }


  set_response(new_response) {
    this.setState({response: new_response});
  }

  change_screen(page, check){
    this.setState({next_screen: check});
    this.props.navigation.navigate(page)
  }

  reset(){
    return (this.props.navigation
               .dispatch(StackActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Question1'})
                    ]
                  })));
  }

  next_screen(){
     {this.state.next_screen ?  this.change_screen('Question1',false) : this.change_screen('test', true)  }
  }

  render() {
    return (
      <View style={styles.survey_block} elevation={5}>
        <View style={styles.block1}>
          <Text style={[styles.font_style, styles.title] }>Should the government {"\n"}provide public healthcare {"\n"}for all Americans? </Text>
        </View>

        <Text> this.state.questions[this.num_question].qtext</Text>

        <Image style={styles.question_image} source={require('../lib/1.png')}/>

        <Checkbox  setResponse={this.set_response}/>

        <Text> Response: {this.state.response} </Text>

        <TouchableHighlight onPress = {() => this.reset()}><Text>Next</Text></TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  survey_block: {
    width: 330,
    height: 519,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    //Shadow stuff
    shadowColor: '#E5E5E5',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  block1: {
    width:292,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  question_image: {
  },
  font_style: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'justify'
  },
  response: {
    width: 127,
    height: 44,
    backgroundColor: '#2D9CDB',
    marginLeft:10,
    marginRight:10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    //Shadow stuff
    shadowColor: '#000000',
    shadowOffset: {
      width: 130,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  response_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  button_row: {
    flex: 0.25,
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block2: {
    marginTop: 44
  },
  block3: {
    width: 260,
    height: 36,
    borderRadius: 27,
    borderWidth: 1
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 150/2,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Question1;
