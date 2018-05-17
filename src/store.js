import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "./reducers";

const createStoreWithMiddleware = compose(
	applyMiddleware(
		thunk,
	)
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store;
