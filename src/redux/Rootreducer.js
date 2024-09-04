import {combineReducers} from 'redux';
import Cartreducer from './Cartreducer';

const Rootreducer=combineReducers({
    cart:Cartreducer,
});
export default Rootreducer;
