import { combineReducers } from 'redux';

const firstReducer = (state = 0, action) => {
    switch(action.type){
        case ('BUTTON_ONE'):
            return state += 1;
        case ('BUTTON_TWO'):
            return state -= 1;
        default:
            return state;
    }
}

const elementReducer = (state = [], action) => {
    switch(action.type){
        case('ADD_ELEMENT'):
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    firstReducer,
    elementReducer
})