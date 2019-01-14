import { setItems, filterItems } from './redux/actions'
import { connect } from 'react-redux'
import Container from './containers/Container'
import './scss/App.scss'

function mapStateToProps (state) {
  return { ...state }
}
function mapDispatchToProps (dispatch) {
  return {
    filterItems: (field, value) => dispatch(filterItems(field, value)),
    setItems: (items) => dispatch(setItems(items))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container)
export default App
