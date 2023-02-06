import React, {useState} from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import '../index.css';
import "../stylesheets/style.css";
import 'bulma/css/bulma.css';

function AddCareTaker({activeTab}) {
    const [open, setOpen] = React.useState(false);
    const [careTaker, setCareTaker] = useState("");
    const [careTakerId, setCareTakerId] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
      };

      console.log('2', careTakerId);


      async function getUserByUsername(username){
        let res = await fetch (`http://localhost:3005/api/user/username/${username}`)
        res = await res.json()
        setCareTakerId(res.id)
      }


      async function attachDogToCaretaker (activeTab, careTakerId) {
        // console.log('arrived at attached user',dogid)
        let res2 = await fetch("http://localhost:3005/api/JoinTable/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "dogid": activeTab,
                "userid": careTakerId
            }),
        });
        let resJson2 = await res2.json();
    }

    async function handleSubmit (e){
        e.preventDefault();
        await getUserByUsername(careTaker)
        await attachDogToCaretaker(activeTab, careTakerId)
    }









  return (
    <div className="careTakerModal">
           <Button className="button is-primary is-small" onClick={handleOpen}><PersonAddIcon style={{paddingRight:"8px"}}/> Add CareTaker</Button>
 

 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <center>
      <h6 className="careTakeTitle">
            Would you like to add a care taker to this pet? </h6>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}><input className="input is-rounded" onChange={(e) => setCareTaker( e.target.value)} placeholder="Enter the caretakers username here"></input>
           <br/><button className="button is-primary is-small" type="submit">Add care taker</button></form>
         
          </Typography>  </center>
        </Box>
      </Modal>
    </div>
   
  );
}

export default AddCareTaker;
