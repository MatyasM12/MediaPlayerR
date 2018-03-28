import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions
import login from './login';
let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};


// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    login
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
