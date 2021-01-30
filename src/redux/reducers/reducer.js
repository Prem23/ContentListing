import {
    SET_DATA
} from '../actions/types'

const initialState = {
    title: 'Romantic Comedy',
    data: []
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case SET_DATA: 
            return { ...state, data: action.payload }
        default: 
            return state
    }
}

export default reducer