import { useState } from 'react';
import 'bulma/css/bulma.css';
import '../stylesheets/style.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


function Editactivity({ activity, editClicked, onEditClick, dogid, userid, handleSetActivities, handleGetActivities }) {
        const [formInfo, setFormInfo] = useState({
                Activity: activity.activity,
                Date: activity.date,
                Time: activity.time,
                Description: activity.description,
        });
        const handleChange = (field, val) => {
                setFormInfo({
                        ...formInfo,
                        [field]: val
                });
        }

        async function updateActivity(activityid) {
                let res2 = await fetch("http://localhost:3005/api/activity/update", {
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                                dogid: dogid,
                                userid: userid,
                                activity: formInfo.Activity,
                                date: formInfo.Date,
                                time: formInfo.Time,
                                description: formInfo.Description,
                                activityid: activityid
                        }),
                });
                handleSetActivities([])
                handleGetActivities()
                let resJson2 = await res2.json();
        }

        function onInputChange(event) {
                setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
        }

        function onFormSubmit(event) {
                event.preventDefault();
                updateActivity(activity.id)
                onEditClick()
        }
        return (

                <Dialog onClose={onEditClick} open={editClicked}>
                        <DialogTitle>{ }</DialogTitle>
                        <DialogContent>

                                <form onSubmit={onFormSubmit}>


                                        <div className="field">
                                                <label className="label">Activity</label>
                                                <div className="control">
                                                        <div className="select">
                                                                <select required="required" onChange={(e) => handleChange('Activity', e.target.value)}>
                                                                        <option name="Vet Visit" value="Vet Visit">

                                                                                Select an Activity

                                                                        </option>
                                                                        <option name="Vet Visit" value="Vet Visit">

                                                                                Vet Visit

                                                                        </option>
                                                                        <option name="Vaccination">
                                                                                Vaccination

                                                                        </option>
                                                                        <option name="Medication">
                                                                                Medication

                                                                        </option>
                                                                        <option name="Health & Wellness">
                                                                                Health & Wellness

                                                                        </option>
                                                                        <option name="Weight">
                                                                                Weight

                                                                        </option>
                                                                        <option name="Feeding">
                                                                                Feeding

                                                                        </option>
                                                                        <option name="Exercise">
                                                                                Exercise

                                                                        </option>
                                                                        <option name="Grooming">
                                                                                Grooming

                                                                        </option>
                                                                        <option name="Training">
                                                                                Training

                                                                        </option>
                                                                        <option name="Special moment">
                                                                                Special Moment

                                                                        </option>
                                                                        <option name="Other">
                                                                                Other

                                                                        </option>
                                                                </select>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="field">
                                                <label className="label">Date</label>
                                                <div className="control">
                                                        <input className="input" type="date" placeholder="Text input" required="required" onChange={(e) => handleChange('Date', e.target.value)} value="2022-10-05" />
                                                </div>
                                        </div>

                                        <div className="field">
                                                <label className="label">Time</label>
                                                <div className="control">
                                                        <input className="input" type="time" placeholder="Text input" required="required" onChange={(e) => handleChange('Time', e.target.value)} />
                                                </div>
                                        </div>

                                        <div className="field">
                                                <label className="label">Description</label>
                                                <div className="control">
                                                        <textarea className="textarea" placeholder="Textarea" onChange={(e) => handleChange('Description', e.target.value)} value={formInfo.Description} ></textarea>
                                                </div>
                                        </div>

                                        <div className="field is-grouped">
                                                <div className="control">
                                                        <button className="button is-link"> Submit </button>
                                                </div>
                                                <div className="control">
                                                        <button className="button is-link is-light" onClick={onEditClick}>Cancel</button>
                                                </div>
                                        </div>
                                </form>


                        </DialogContent>
                </Dialog>
        );
}

export default Editactivity;



