import {connect} from 'react-redux';
import Welcome from '../components/Welcome_Component'
import { addCounter, removeCounter } from '../actions/Actions';


function mapStateToProps(state){
  return {
    count: state.counterReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: () => dispatch(removeCounter())
})

export default connect(mapStateToProps,mapDispatchToProps)(Welcome);
