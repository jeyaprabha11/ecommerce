import { createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import Rootreducer from "./Rootreducer";

const store=createStore(Rootreducer,applyMiddleware(thunk));

export default store;
