import {connect} from 'react-redux';
import Survey_start from '../components/Survey_start'
import { intensity_toggle_on, intensity_toggle_off } from '../actions/Intensity_toggle_action';


function mapStateToProps(state){
  return {
    intensity: state.intensity_toggle,
  }
}

const mapDispatchToProps = dispatch => ({
  intensity_toggle_on: () => dispatch(intensity_toggle_on()),
  intensity_toggle_off: () => dispatch(intensity_toggle_off())
})

export default connect(mapStateToProps,mapDispatchToProps)(Survey_start);
