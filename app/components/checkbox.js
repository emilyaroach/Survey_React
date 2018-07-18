import React from 'react';
import { Text, View, Button,StyleSheet,TouchableHighlight,TouchableOpacity, Image, BackHandler} from 'react-native';

class checkbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        response_option : {
          strongly_disagree : false,
          disagree: false,
          no_opinion: false,
          agree: false,
          strongly_agree: false
        },
        previous_response: null
      }
      this.toggle_selection = this.toggle_selection.bind(this)
  }


  toggle_selection(current_response){

    var response_option = {...this.state.response_option}

    if(this.state.previous_response === null){
      response_option[current_response] = true;
    } else {
      response_option[this.state.previous_response] = false;
      response_option[current_response] = true;
    }
    this.setState({response_option});
    this.setState({previous_response: current_response});
  }

  render(){
    return(
      <View style= {styles.option_box}>
        <View style={styles.line}></View>
         <View style={styles.circles_bar}>
            <TouchableHighlight style= {styles.outer_circle} onPress = {() => {this.toggle_selection('strongly_disagree'); this.props.setResponse('Strongly disagree')}}>
              <View>{this.state.response_option['strongly_disagree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} onPress = {() => {this.toggle_selection('disagree'); this.props.setResponse('Disagree')}}>
              <View>{this.state.response_option['disagree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} onPress = {() => {this.toggle_selection('no_opinion');this.props.setResponse('No Opinion')}}>
              <View>{this.state.response_option['no_opinion'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} onPress = {() => {this.toggle_selection('agree'); this.props.setResponse('Agree')}}>
              <View>{this.state.response_option['agree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} onPress = {() => {this.toggle_selection('strongly_agree'); this.props.setResponse('Strongly agree')}}>
              <View>{this.state.response_option['strongly_agree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  option_box:{
    width: 262,
    height:30 ,
    marginTop: 57
  },
  line:{
    width: 262,
    position: 'absolute',
    borderBottomColor: '#2D9CDB',
    borderBottomWidth: 2
  },
  circles_bar :{
    width: 262,
    position: 'absolute',
    top:-14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  outer_circle: {
    width: 30,
    height: 30,
    borderRadius: 150/2,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_circle: {
    width: 20,
    height: 20,
    borderRadius: 150/2,
    backgroundColor: '#2D9CDB'
  }
})

export default checkbox;
