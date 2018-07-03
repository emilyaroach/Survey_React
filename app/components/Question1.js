import React from 'react';
import { Text, View, Button,StyleSheet,TouchableWithoutFeedback,TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Question1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      response: null,
      intensity: null,
      style: 'row'
    }
    this.set_response = this.set_response.bind(this);
    this.set_intensity = this.set_intensity.bind(this);
  }

  set_response(answer){
    this.setState({response : answer})
  }

  set_intensity(level){
    this.setState({intensity : level})
  }

  render() {
    return (
      <View style={styles.survey_block}>
        <View>
          <Text style={[styles.font_style, styles.title] }>Should the government {"\n"}provide public healthcare {"\n"}for all Americans? </Text>
        </View>

        <Image style={styles.question_image} source={require('../lib/1.png')}/>

      <View style={styles.button_row}>

            <View elevation={5} style={styles.response}>
              <Button
                onPress = {() => this.set_response('no')}
                title="No"/>
            </View>

            <View elevation={5} style={styles.response}>
              <Button
                onPress = {() => this.props.navigation.navigate('Question6')}
                title="Yes"/>
            </View>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
          <View>
             <TouchableOpacity>
               <View style={styles.circle} onClick ={() => this.state.send1()}>
               </View>
             </TouchableOpacity>
           </View>
        </View>
                <Text>{this.state.response}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  survey_block: {
    height: 409,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  question_image: {
    marginBottom: 20
  },
  font_style: {
    fontFamily: 'Roboto',
    fontSize: 15.8,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  response: {
    flex:1,
    marginLeft:10,
    marginRight:10,

    //Shadow stuff
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  button_row: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 150/2,
    backgroundColor: '#00BCD4'
  }
})

export default Question1;
