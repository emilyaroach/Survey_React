import {connect} from 'react-redux';
import Welcome from '../components/Welcome_Component'
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

export default connect(mapStateToProps,mapDispatchToProps)(Welcome);
