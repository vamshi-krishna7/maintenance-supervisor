import React, {useContext, useEffect, Fragment} from 'react';
import LogContext from '../context/logs/logContext';
import LogItem from './logItem';
import './logs.css';
import {Link} from 'react-router-dom';

const Logs = () => {
    const logContext = useContext(LogContext);

    useEffect(() => {
        logContext.getLog()
    }, [])

    
    const {logs, loading} = logContext;
    return(
        <section className="logs-section">
            {
                (loading === true) ? (<h1>Loading...</h1>)
                    : 
                    (
                        logs.length === 0 ? (<div className="no-logs-container">
                            <h1>No Logs Available</h1>
                            <Link to="/addLog" className="btn-create-log">Create Log</Link>
                            </div>) 
                        : 
                        (logs.map((singleLog) => (
                            <LogItem key={singleLog._id} log={singleLog}/>
                        ))
                        )
                    )
            }
        </section>
    )
}

export default Logs;