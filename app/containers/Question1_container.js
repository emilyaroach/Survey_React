import {connect} from 'react-redux';
import Question1 from '../components/Question1'
import {changeName} from '../actions/Actions_name';


function mapStateToProps(state){
  return {
    user_info : state.change_name_reducer
  }
}

const mapDispatchToProps = dispatch => ({
  changeName: (name) => dispatch(changeName(name))
})

export default connect(mapStateToProps,mapDispatchToProps)(Question1);
