import React, { useState } from 'react'
import 'bulma/css/bulma.css';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DogPhotoModal from './DogPhotoModal';

function Adddog({ user, handleClose, open, getDogsByUser, handleSetDogs }) {
    const [formInfo, setFormInfo] = useState({
        DogPhoto:"",
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
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

    function handleSetDogPhoto(value){
        setFormInfo({
            ...formInfo,
            DogPhoto: value
        });
    }

    async function handleSubmitDog(e) {
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
                    "additional_info": formInfo.AdditionalInfo,
                    "Profilephoto": formInfo.DogPhoto
                }),
            });
            let resJson = await res.json();
            await attachDogToUser(resJson.results.id)
            await createFirstPost(resJson.results.id)
            await handleSetDogs([])
            console.log("await over")
            // getDogsByUser(user)
            handleClose()

        } catch (err) {
            // console.log(err);
        }
    };

    async function createFirstPost(dogid) {
        let res = await fetch("http://localhost:3005/api/activity/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "activity": `${formInfo.Name} was born on ${formInfo.Birthday}`,
                "date": Date(),
                "time": "12:56:00",
                "description": "",
                "dogid": dogid,
                "userid": user
            }),
        });

    }

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
        <div>
            <Button onClick={open}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">

                        <form onSubmit={handleSubmitDog}>
                        <DogPhotoModal handleSetDogPhoto={handleSetDogPhoto}/>
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
                    </p>
                   
                </Box>
            </Modal>
        </div>

    )
}

export default Adddog;


