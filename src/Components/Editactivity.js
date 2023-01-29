import {useState} from 'react';
function Editactivity({EditThisactivity, activity}){
    const [formInfo, setFormInfo] = useState({
        Activity:activity.Activity,
        Date:activity.Date,
        Time:activity.Time,
       Description:activity.Description,
        menusection:activity.menusection
    });
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }

    function onFormSubmit(event){
        event.preventDefault();
        EditThisactivity(formInfo, activity.id)
    }
    return(
        <form onSubmit={onFormSubmit}>
        <p>Activity:</p>
        <input name="Activity" onChange={onInputChange} value={formInfo.Activity}/>
        <p>Date:</p>
        <input name="Date" onChange={onInputChange} value={formInfo.Date}/>
        <p>Time:</p>
        <input name="Time" onChange={onInputChange} value={formInfo.Time}/>
        <p>Allergy Info:</p>
        <input name="Description" onChange={onInputChange} value={formInfo.Description}/>
        <button type="submit">Submit</button>
    </form>
    )
}

export default Editactivity;