import {connect} from 'react-redux';
import Question1 from '../components/Question1'
import { intensity_toggle_on, intensity_toggle_off } from '../actions/Intensity_toggle_action';


function mapStateToProps(state){
  return {
    intensity: state.intensity_toggle,
  }
}

const mapDispatchToProps = dispatch => ({
  intensity_toggle_on: () => dispatch(intensity_toggle_on()),
  intensity_toggle_on: () => dispatch(intensity_toggle_on())
})

export default connect(mapStateToProps,mapDispatchToProps)(Question1);
