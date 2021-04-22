import React, {useReducer} from 'react';
import logContext from './logContext';
import logReducer from './logReducer';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
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


const LogState = (props) => {
    
    const initialState = {
        logs: [],
        techs: [],
        current: null,
        loading: false
    };
    

    const [state, dispatch] = useReducer(logReducer, initialState);
    
    //set loading
    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    // get logs
    const getLog = async() => {
        setLoading();
        try {
            const res = await axios.get('/api/logs')
            dispatch({ type: GET_LOG, payload: res.data.data})
        }catch(err){
            console.error(err.message)
        }
    }

    // add log
    const addLog = async(log) => {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/logs', log, config)
            // log.id = uuidv4();
            dispatch({type: ADD_LOG, payload: res.data})

        }catch(err) {
            console.error(err.message)
        }
    }

    //Update log 
    const updateLog = async(updatedLog) => {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/logs/${updatedLog._id}`,updatedLog, config)
        
            dispatch({type: UPDATE_LOG, payload: res.data.data})
        }catch(err){
            console.error(err.message)
        }
        
    }

    // delete log
    const deleteLog = async(_id) => {
        const config = {
            headers: {
                'Context-Type': 'application/json'
            }
        }

        try {
            await axios.delete(`/api/logs/${_id}`, config);
            dispatch({type:DELETE_LOG, payload:_id})
        }catch(err){
            console.error(err.message)
        }
    }

    // addcurrent
    const addCurrent = (currentValues) => {
        dispatch({type: ADD_CURRENT, payload: currentValues})
    }

                                            // techs
    //get techs
    const getTech = async() => {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.get('/api/techs',config)
        dispatch({ type: GET_TECH, payload: res.data.data})
        }catch(err) {
            console.error(err.message)
        }
    }

    //addTech
    const addTech = async(tech) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/techs', tech, config);
            dispatch({ type: ADD_TECH, payload: res.data })

        }catch(err){
            console.error(err.message);
        }
    }             

    return (
        <logContext.Provider value={{
            logs: state.logs,
            techs: state.techs,
            current: state.current,
            loading: state.loading,
            error: state.error,
            getLog,
            addLog,
            deleteLog,
            addCurrent,
            updateLog,
            addTech,
            getTech,
            setLoading
        }}> 
            {props.children}
        </logContext.Provider>
    )
}

export default LogState;
