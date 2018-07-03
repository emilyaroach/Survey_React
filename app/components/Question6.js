import React from 'react';
import { Text, View, Button,StyleSheet,TouchableWithoutFeedback, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Question6 extends React.Component {

  render() {
    return (
      <View style={styles.survey_block}>

        <Text style={[styles.font_style, styles.title] }> Should the government restrict access to abortion? </Text>
        <Image style={styles.question_image} source={require('../lib/1q6.png')} />

        <View style={styles.button_row}>

          <View elevation={5} style={styles.response}>

          <Button
            onPress = {() => this.props.navigation.navigate('Home')}
            title='No'/>
          </View>

          <View elevation={5} style={styles.response}>
          <Button
            onPress = {() => this.props.navigation.navigate('Home')}
            title="Yes"/>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  survey_block: {
    flex: 1,
    backgroundColor: 'white'
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
  }
})

export default Question6;
