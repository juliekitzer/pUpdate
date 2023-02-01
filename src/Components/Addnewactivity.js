import {useState} from 'react';
import 'bulma/css/bulma.css';
function Addnewactivity({AddThisactivity}){
    const [formInfo, setFormInfo] = useState({
        Activity: "",
        Date:"",
        Time:"",
        Description:""
    });
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }

    function onFormSubmit(event){
        event.preventDefault();
        AddThisactivity(formInfo)
    }

    return(
        <form onSubmit={onFormSubmit}>


            <p>Activity:</p>
            <input className="input is-rounded  is-primary" type="text" placeholder="Rounded input" name="Activity" onChange={onInputChange}/>
            <p>Date:</p>
            <input className="input is-rounded  is-primary" type="text"  name="Date" onChange={onInputChange}/>
            <p>Time</p>
            <input className="input is-rounded  is-primary" type="text" name="Time" onChange={onInputChange}/>
            <p>Description:</p>
            <input className="input is-rounded  is-primary" type="text" name="Description" onChange={onInputChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Addnewactivity;