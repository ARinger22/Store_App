import { createStore } from 'redux'
import Reducer from './Reducer'

const ConfigureStore = createStore(Reducer);
export default ConfigureStore