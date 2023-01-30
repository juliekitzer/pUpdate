import { useState } from 'react';
import 'bulma/css/bulma.css';
function Editactivity({ EditThisactivity, activity }) {
    const [formInfo, setFormInfo] = useState({
        Activity: activity.Activity,
        Date: activity.Date,
        Time: activity.Time,
        Description: activity.Description,
        menusection: activity.menusection
    });
    function onInputChange(event) {
        setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
    }

    function onFormSubmit(event) {
        event.preventDefault();
        EditThisactivity(formInfo, activity.id)
    }
    return (

        <form onSubmit={onFormSubmit}>
            <input class="input is-rounded is-primary" type="text" placeholder="Rounded input" name="Activity" onChange={onInputChange} />


            <p>Activity:</p>
            <select class="dropdown-item, dropdown-content" id="dropdown-menu" role="menu">
                <option onChange={onInputChange} name="Vet Visit" value="Vet Visit">
                   
                        Vet Visit
                  
                </option>
                <option onChange={onInputChange} name="Vaccination" value={formInfo.Vaccination}>
                        Vaccination
                    
                </option>
                <option onChange={onInputChange} name="Medication">
                        Medication
                   
                </option>
                <option onChange={onInputChange} name="Health & Wellness">
                        Health & Wellness
                   
                </option>
                <option onChange={onInputChange} name="Weight">
                        Weight
                   
                </option>
                <option onChange={onInputChange} name="Feeding">
                        Feeding
                    
                </option>
                <option onChange={onInputChange} name="Exercise">
                        Exercise
                    
                </option>
                <option onChange={onInputChange} name="Grooming">
                        Grooming
                 
                </option>
                <option onChange={onInputChange} name="Training">
                        Training
                    
                </option>
                <option onChange={onInputChange} name="Special moment">
                        Special Moment
                    
                </option>
                <option onChange={onInputChange} name="Other">
                        Other
                   
                </option>

            </select>

            
            <p>Date:</p>
            <input name="Date" class="input is-rounded  is-primary" type="text" onChange={onInputChange} value={formInfo.Date} />
            <p>Time:</p>
            <input name="Time" class="input is-rounded  is-primary" type="text" onChange={onInputChange} value={formInfo.Time} />
            <p>Description:</p>
            <input name="Description" class="input is-rounded  is-primary" type="text" onChange={onInputChange} value={formInfo.Description} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Editactivity;