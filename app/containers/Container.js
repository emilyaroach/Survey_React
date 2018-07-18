import {connect} from 'react-redux';
import Welcome from '../components/Welcome_Component'


function mapStateToProps(state){
  return {
    intensity: 1,
  }
}



export default connect(mapStateToProps)(Welcome);
