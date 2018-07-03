import React from 'react';
import { Text, View, Button,StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

class Survey_start extends React.Component {

  render() {
    return (
      <View style={styles.survey}>

        <View style={styles.block1}>
          <Text style={[styles.font_style, styles.title] }>We'll ask a few questions {"\n"}to get to know the issues {"\n"}you care about.</Text>
        </View>
        <View style={styles.block2}>
          <Text style={[styles.font_style]}>This will take 3 minutes and will {"\n"}help us find candidates and organizations that represent you.</Text>
        </View>

        <View style= {styles.image_block}>
          <Image
              style={styles.image}
              source={require('../lib/noun_1696115_cc.png')}
            />
        </View>

        <View >
          <TouchableWithoutFeedback
            onPressIn = {() => {this.props.navigation.navigate('Question1')}} >
          <View style={styles.get_started_button}><Text style={styles.get_started_text}>GET STARTED</Text></View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  // General survey block style
  survey: {
    flex: 1,
    height: 513,
    borderWidth: 10,
    alignItems: 'center',
    borderColor: 'blue',
    backgroundColor: 'white',
    borderRadius: 20,
    //Shadow stuff
    shadowColor: '#E5E5E5',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    overflow: 'hidden'
  },

  // Each block dividing the sections
  block1:{
    marginTop:32,
    height:107,
    width: 276,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  block2:{
    height: 64,
    width: 279,
    marginTop:9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    marginBottom:41.54,
    backgroundColor: 'white'
  },

  // Style for general font
  font_style: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'justify'
  },

  // Style for independent items
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  image: {
    width: 155,
    height: 154
  },
  get_started_button: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  get_started_text: {
    color: '#126390',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default Survey_start;
