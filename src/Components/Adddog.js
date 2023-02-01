import React, { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import userEvent from '@testing-library/user-event';
function Adddog({ user, handleClose, open }) {
    const [formInfo, setFormInfo] = useState({
        Name: "",
        Weight: null,
        Breed: "",
        Birthday: "",
        Gotchaday: "",
        ChipID: "",
        RabiesTag: "",
        Gender: "",
        SpayedOrNeutered: false,
        Food: "",
        Allergies: "",
        Sensitivites: "",
        Medication: "",
        AdditionalInfo: ""
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3005/api/Dog/create", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "dogname": formInfo.Name,
                    "weight": formInfo.Weight,
                    "breed": formInfo.Breed,
                    "birthday": formInfo.Birthday,
                    "gotchaday": formInfo.Gotchaday,
                    "chipid": formInfo.ChipID,
                    "rabiestag": formInfo.RabiesTag,
                    "gender": formInfo.Gender,
                    "spayedorneutered": formInfo.SpayedOrNeutered,
                    "food": formInfo.Food,
                    "allergies": formInfo.Allergies,
                    "sensitivites": formInfo.Sensitivities,
                    "medication": formInfo.Medication,
                    "additional_info": formInfo.AdditionalInfo
                }),
            });
            let resJson = await res.json();
            await attachDogToUser(resJson.results.id)

            handleClose()

        } catch (err) {
            // console.log(err);
        }
    };

    async function attachDogToUser(dogid) {
        // console.log('arrived at attached user',dogid)
        let res2 = await fetch("http://localhost:3005/api/JoinTable/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "dogid": dogid,
                "userid": user,
            }),
        });
        let resJson2 = await res2.json();
    }


    const handleChange = (field, val) => {
        setFormInfo({
            ...formInfo,
            [field]: val
        });
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{ }</DialogTitle>
            <DialogContent>

                <form onSubmit={handleSubmit}>

                    <p>Name:</p>
                    <input className="input is-rounded  is-primary" type="text" placeholder="Rounded input" name="Name" onChange={(e) => handleChange('Name', e.target.value)} />
                    <p>Weight:</p>
                    <input className="input is-rounded  is-primary" type="text" name="Weight" onChange={(e) => handleChange('Weight', e.target.value)} />
                    <p>Breed:</p>
                    <input className="input is-rounded  is-primary" type="text" name="Breed" onChange={(e) => handleChange('Breed', e.target.value)} />
                    <p>Birthday:</p>
                    <input className="input is-rounded  is-primary" type="date" name="Birthday" onChange={(e) => handleChange('Birthday', e.target.value)} />
                    <p>Gotchaday:</p>
                    <input className="input is-rounded  is-primary" type="date" name="Gotchaday" onChange={(e) => handleChange('Gotchaday', e.target.value)} />
                    <p>ChipID:</p>
                    <input className="input is-rounded  is-primary" type="text" name="ChipID" onChange={(e) => handleChange('ChipID', e.target.value)} />
                    <p>RabiesTag:</p>
                    <input className="input is-rounded  is-primary" type="text" name="RabiesTag" onChange={(e) => handleChange('RabiesTag', e.target.value)} />

                    <p>Gender:</p>
                    <input type="radio" id="female" name="Gender" value="Female" onChange={(e) => handleChange('Gender', e.target.value)} />
                    <label for="female">Female</label>
                    <input type="radio" id="male" name="Gender" value="Male" onChange={(e) => handleChange('Gender', e.target.value)} />
                    <label for="male">Male</label>

                    <p>SpayedOrNeutered:</p>
                    <input type="radio" id="yes" name="SpayedOrNeutered" value={true} onChange={(e) => handleChange('SpayedOrNeutered', true)} />
                    <label for="yes">Yes</label>

                    <input type="radio" id="no" name="SpayedOrNeutered" value={false} onChange={(e) => handleChange('SpayedOrNeutered', false)} />
                    <label for="no">No</label>

                    <p>Food:</p>
                    <input className="input is-rounded  is-primary" type="text" name="Food" onChange={(e) => handleChange('Food', e.target.value)} />
                    <p>Allergies:</p>
                    <input className="input is-rounded  is-primary" type="text" name="Allergies" onChange={(e) => handleChange('Allergies', e.target.value)} />
                    <p>Sensitivities:</p>
                    <input className="input is-rounded  is-primary" type="text" name="Sensitivities" onChange={(e) => handleChange('Sensitivities', e.target.value)} />
                    <p>Medication:</p>
                    <input className="input is-rounded  is-primary" type="text" name="Medication" onChange={(e) => handleChange('Medication', e.target.value)} />
                    <p>AdditionalInfo:</p>
                    <input className="input is-rounded  is-primary" type="text" name="AdditionalInfo" onChange={(e) => handleChange('AdditionalInfo', e.target.value)} />

                    <button type="submit">Submit</button>

                </form>


            </DialogContent>
        </Dialog>
    )
}

export default Adddog;