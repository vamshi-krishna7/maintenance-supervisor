import { PromiseProvider } from 'mongoose';
import React, {useState, useContext, useEffect} from 'react';
import ContextLog from '../context/logs/logContext';

const AddLog = (props) => {
    const contextLog = useContext(ContextLog);
    const [log, setLog] = useState({
        message: '',
        attention: true,
        tech: 'suraj verma'
    })

    const onChange = (e) => {
        
        setLog({...log, [e.target.name]: e.target.value})
    }
    const onChangeAttention = () => {
        setLog({...log, attention: !log.attention})
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if(contextLog.current === null){
            contextLog.addLog(log);
            props.history.push('/')
        }else {
            contextLog.updateLog({
                ...log,
                _id:contextLog.current._id
            });
            props.history.push('/')
        }
        setLog({
            message: '',
            attention: true,
            tech: ''
        })
    }

    useEffect(() => {
        contextLog.getTech()
    }, [])


    useEffect(() => {
        if(contextLog.current !== null) {
            setLog({
                message: contextLog.current.message,
                date: contextLog.current.date,
                attention: contextLog.current.attention,
            })
        }
    }, [contextLog.addCurrent])

    return (
        <section className="add-log-section">
            <form onSubmit={onSubmit} className="addLog-form-container">
            {
                contextLog.current === null ? 
                (
                <React.Fragment>
                <h1 className="add-log-primary-header">Add New Log</h1>
                <div className="add-log-form-group">
                    <label>Message: </label>
                    <br></br>
                    <textarea className="add-log-textarea" name="message" type="text" value={log.message} rows="5" cols="20" onChange={onChange} placeholder="write your message..." required/>
                    <br></br>
                </div>
                <div className="add-log-form-group"> 
                    <label>Technician: </label>
                    <select name="tech" value={log.tech} onChange={onChange}>
                        {   
                            contextLog.techs.length === 0 ? (<option>Add Tech First</option>)
                            : contextLog.techs.map((singleTech) => (
                            <option key={singleTech._id} value={`${singleTech.firstName} ${singleTech.lastName}`}>{`${singleTech.firstName} ${singleTech.lastName}`}</option>
                        ))
                    }
                    </select>
                    <br></br>
                </div>
                <div className="add-log-form-group">
                    <label className="add-log-label">Need's Attention ? </label>
                    <input name="attention" type="radio" checked={log.attention === true} onChange={onChangeAttention} value={true}/>{' '}Yes{' '}
                    <input name="attention" type="radio" checked={log.attention === false} onChange={onChangeAttention} value={false}/>{' '}No
                    <br></br>
                </div>
                <button type="submit" className="submit-btn">Submit Log</button>
                </React.Fragment> ) 
                :
                (
                    <React.Fragment>
                    <h1 className="add-log-primary-header">Update Log</h1>
                <div className="add-log-form-group">
                    <label>Message: </label>
                    <br></br>
                    <textarea className="add-log-textarea" name="message" type="text" value={log.message} rows="5" cols="20" onChange={onChange} placeholder="write your message..." required/>
                    <br></br>
                </div>
                <div className="add-log-form-group"> 
                    <label>Technician: </label>
                    <select name="tech" value={log.tech} onChange={onChange}>
                        {   
                            contextLog.techs.length === 0 ? (<option>Add Tech First</option>)
                            : contextLog.techs.map((singleTech) => (
                            <option key={singleTech._id} value={`${singleTech.firstName} ${singleTech.lastName}`}>{`${singleTech.firstName} ${singleTech.lastName}`}</option>
                        ))
                    }
                    </select>
                    <br></br>
                </div>
                <div className="add-log-form-group">
                    <label className="add-log-label">Need's Attention ? </label>
                    <input name="attention" type="radio" checked={log.attention === true} onChange={onChangeAttention} value={true}/>{' '}Yes{' '}
                    <input name="attention" type="radio" checked={log.attention === false} onChange={onChangeAttention} value={false}/>{' '}No
                    <br></br>
                </div>
                <button type="submit" className="submit-btn">Update Log</button>
                    </React.Fragment> )
            }
            
            </form>
        </section>
    )
}

export default AddLog;

