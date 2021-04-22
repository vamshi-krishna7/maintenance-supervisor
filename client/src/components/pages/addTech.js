
import React, {useState, useContext} from 'react';
import LogContext from '../context/logs/logContext';
// import './addTech.css';

const AddTech = (props) => {
    const logContext = useContext(LogContext);


    const [tech, setTech] = useState({
        firstName: '',
        lastName: ''
    })


    const onChange = (e) => {
        setTech({...tech, [e.target.name] : e.target.value})
    }



const onFormSubmit = (e) => {
    e.preventDefault();
    let techName = {
        firstName: tech.firstName,
        lastName: tech.lastName
    }
    logContext.addTech(techName)
    props.history.push('/addlog')
    setTech({
        firstName: '',
        lastName: ''
    })
}

    return (
        <section className="add-tech-section">
            <form className="add-tech-form" onSubmit={onFormSubmit}> 
                <div className="add-tech-form-content">
                    <div className="add-tech-form-header">
                        <h2 className="add-tech-heading-secondary">Add Tech</h2>
                    </div>
                    <div className="add-tech-form-group">
                        <input className="form-input" type="text" name="firstName" placeholder="First Name"  onChange={onChange} value={tech.firstName} required/>
                    </div>
                    <div className="add-tech-form-group">
                        <input className="form-input" type="text" name="lastName" placeholder="Last Name" onChange={onChange} value={tech.lastName} required/>
                    </div>
                    <div className="add-tech-btn-container">
                        <button className="btn-primary">Add Tech</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AddTech;



// <form onSubmit={onFormSubmit} className="form-container-addTech">
//             <h1>Add Tech</h1>
//             <label>Firstname: </label>
//             <input type="text" name="firstName" onChange={onChange} value={tech.firstName} required></input>
//             <br></br>
//             <label>Lastname: </label>
//             <input type="text" name="lastName" onChange={onChange} value={tech.lastName} required></input>
//             <br></br>
//             <button className="submit-btn">Submit</button>
//         </form>


       