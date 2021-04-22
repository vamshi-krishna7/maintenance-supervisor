import React, { useContext, useEffect } from 'react';
import './logItem.css';
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import ContextLog from '../context/logs/logContext';
import {Link} from 'react-router-dom';
const LogItem = (props) => {

const contextLog = useContext(ContextLog);
// const {log :{id, tech, date, attention, message}} = props;
let {_id, date, attention, message, tech} = props.log;

const deleteLogItem = (_id) => {
    contextLog.deleteLog(_id);
}

    return(
        <div className={`log-card ${attention ? 'red' : 'blue'}`}>
            <div className="message-detail-card">
                {
                    attention === true ? 
                    <p className="log-message-red" onClick={() => contextLog.addCurrent(props.log)}><Link to="/addLog">{message}</Link></p>
                    : <p className="log-message-green" onClick={() => contextLog.addCurrent(props.log)}><Link to="/addLog">{message}</Link></p>
                } 
                <div className ="log-detail">
                        <p>ID #{_id} was last updated by <span>{tech}</span> on {date}</p>
                </div>
            </div>
                <BsTrash className="trash-icon" onClick={() => deleteLogItem(_id)}/>
                <Link to="/addLog" onClick={() => contextLog.addCurrent(props.log)}><FiEdit className="update-icon" /></Link>
        </div>
    )
}

export default LogItem;