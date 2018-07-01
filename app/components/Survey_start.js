import React from 'react';
import { Text, View, Button,StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

class Survey_start extends React.Component {

  render() {
    return (
      <View style={styles.survey}>

        <View>
          <Text style={[styles.font_style, styles.title] }>We'll ask a few questions {"\n"}to get to know the issues {"\n"}you care about.</Text>
        </View>
          <Text style={[styles.font_style]}>This will take 3 minutes and will {"\n"}help us find candidates and organizations that represent you.</Text>
        <View style= {styles.image_block}>
          <Image
              style={styles.image}
              source={require('../lib/noun_1696115_cc.png')}
            />
        </View>
        <View>
        </View>
        <View  >
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
  survey: {
    flex: 1,
    backgroundColor: 'blue'
  },
  get_started: {
    height: 300
  },
  title: {
    height: 100,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'red'
  },
  font_style: {
    fontFamily: 'Roboto',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'justify'
  },
  image_block: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: 120,
    height: 120
  },
  get_started_button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  get_started_text: {
    color: '#126390'
  }
})

export default Survey_start;
