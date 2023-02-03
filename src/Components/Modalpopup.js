import React, { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import 'bulma/css/bulma.css';
function Modalpopup({ handleClose, open, dog, user, activities, rerender, handleRerender, handleSetActivities, handleGetDogs}) {
    const [newActivity, setNewActivity] = useState({
        Activity: "",
        Date: "",
        Time: "",
        Description: "",
        dogid: ""
    })
    

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3005/api/Activity/create", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "activity": newActivity.Activity,
                    "date": newActivity.Date,
                    "time": newActivity.Time,
                    "description": newActivity.Description,
                    "dogid": newActivity.dogid,
                    "userid": user
                }),
            });
            let resJson = await res;
            // handleSetActivities([])
            // handleGetDogs()
            handleClose()


        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (field, val) => {
        setNewActivity({
            ...newActivity,
            [field]: val
        });
    }
    let dogOptions
    if (dog != []) {
        dogOptions = dog.map(function (dog) {
            return (
                <option name="dogid" value={dog['Dog'].id}>{dog['Dog'].dogname}</option>
            )
        })
        // console.log(dogOptions)

    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{ }</DialogTitle>
            <DialogContent>

                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Pup:</label>
                        <div className="control">
                            <div className="select">
                                <select required="required" onChange={(e) => handleChange('dogid', e.target.value)}>
                                    <option name="Dog name" value="Dog name">

                                        Select a Dog

                                    </option>
                                    {dogOptions}
                                </select>
                            </div>
                        </div>
                    </div>

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
                            <input className="input" type="date" placeholder="Text input" required="required" onChange={(e) => handleChange('Date', e.target.value)} />
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
                            <textarea className="textarea" placeholder="Textarea" onChange={(e) => handleChange('Description', e.target.value)} ></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link"> Submit </button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </form>


            </DialogContent>
        </Dialog>
    );
}


export default Modalpopup;