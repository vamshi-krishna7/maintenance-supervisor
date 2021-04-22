import {
    GET_LOG,
    ADD_LOG,
    DELETE_LOG,
    ADD_CURRENT,
    UPDATE_LOG,
    ADD_TECH,
    GET_TECH,
    SET_LOADING

} from '../types';

export default(state, action) => {

    switch(action.type) {
        case GET_LOG: 
                return {
                    ...state,
                    logs: action.payload,
                    loading: false
                }
        case ADD_LOG:
                return {
                    ...state,
                    logs: [action.payload, ...state.logs],
                    loading: false
                }
        case DELETE_LOG:
                const res = state.logs.filter((singleLog) => {
                        return singleLog._id !== action.payload
                })
                return {
                        ...state,
                        logs: [...res],
                        loading: false
                }
        case ADD_CURRENT: 
        return {
            ...state,
            current: action.payload,
            loading: false
        }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map((singleLog) => {
                    return singleLog._id === action.payload._id ? action.payload : singleLog
                }),
                loading: false,
                current: null
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
            case GET_TECH:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
            case SET_LOADING:
                return {
                    ...state,
                    loading: true
                }
        default: 
            return { 
                    state
            }
    }



}