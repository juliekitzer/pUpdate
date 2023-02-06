import React from 'react';
import "../stylesheets/style.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';

function DogPhotoModal({ handleSetDogPhoto }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>
                <div className="profilePhotoHeading">
                    <img src="https://www.linkpicture.com/q/dog_8.png" style={{width:"80px"}}/><br/>
                    <p>Click to choose a pet profile photo!</p></div></Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 500 }}>
                    <center><h2 id="child-modal-title">Chose your pet profile photo</h2></center>
                    
                   


                    <div id="child-modal-description" className="DogPhotoContainer">
                        <img className="DogPhoto"   onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/001-bulldog.png"); handleClose()}} src="https://www.linkpicture.com/q/001-bulldog.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/002-english-mastiff.png"); handleClose()}} src="https://www.linkpicture.com/q/002-english-mastiff.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/003-corgi.png"); handleClose()}} src="https://www.linkpicture.com/q/003-corgi.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/004-pomeranian.png"); handleClose()}} src="https://www.linkpicture.com/q/004-pomeranian.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/005-Rottweiler.png"); handleClose()}} src="https://www.linkpicture.com/q/005-Rottweiler.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/006-dachshund.png"); handleClose()}} src="https://www.linkpicture.com/q/006-dachshund.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/007-Doberman.png"); handleClose()}} src="https://www.linkpicture.com/q/007-Doberman.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/008-shih-tzu.png"); handleClose()}} src="https://www.linkpicture.com/q/008-shih-tzu.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/009-bull-terrier.png"); handleClose()}} src="https://www.linkpicture.com/q/009-bull-terrier.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/010-mastiff.png"); handleClose()}} src="https://www.linkpicture.com/q/010-mastiff.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/011-border-collie.png"); handleClose()}} src="https://www.linkpicture.com/q/011-border-collie.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/012-german-shepherd.png"); handleClose()}} src="https://www.linkpicture.com/q/012-german-shepherd.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/013-french-bulldog.png"); handleClose()}} src="https://www.linkpicture.com/q/013-french-bulldog.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/014-malamute.png"); handleClose()}} src="https://www.linkpicture.com/q/014-malamute.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/015-Basset-Hound.png"); handleClose()}} src="https://www.linkpicture.com/q/015-Basset-Hound.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/016-english-cocker.png"); handleClose()}} src="https://www.linkpicture.com/q/016-english-cocker.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/017-chow-chow.png"); handleClose()}} src="https://www.linkpicture.com/q/017-chow-chow.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/018-springer-spaniel.png"); handleClose()}} src="https://www.linkpicture.com/q/018-springer-spaniel.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/019-american-staffordshire-terrier.png"); handleClose()}} src="https://www.linkpicture.com/q/019-american-staffordshire-terrier.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/020-akita.png"); handleClose()}} src="https://www.linkpicture.com/q/020-akita.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/021-bichon-frise.png"); handleClose()}} src="https://www.linkpicture.com/q/021-bichon-frise.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/022-newfoundland.png"); handleClose()}} src="https://www.linkpicture.com/q/022-newfoundland.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/023-poodle.png"); handleClose()}} src="https://www.linkpicture.com/q/023-poodle.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/024-pudelpointer.png"); handleClose()}} src="https://www.linkpicture.com/q/024-pudelpointer.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/025-greyhound.png"); handleClose()}} src="https://www.linkpicture.com/q/025-greyhound.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/026-bernese-mountain.png"); handleClose()}} src="https://www.linkpicture.com/q/026-bernese-mountain.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/027-shetland-sheepdog.png"); handleClose()}} src="https://www.linkpicture.com/q/027-shetland-sheepdog.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/028-jack-russell-terrier.png"); handleClose()}} src="https://www.linkpicture.com/q/028-jack-russell-terrier.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/029-bullmastiff.png"); handleClose()}} src="https://www.linkpicture.com/q/029-bullmastiff.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/030-saint-bernard.png"); handleClose()}} src="https://www.linkpicture.com/q/030-saint-bernard.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/031-schnauzer.png"); handleClose()}} src="https://www.linkpicture.com/q/031-schnauzer.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/032-airedale-terrier.png"); handleClose()}} src="https://www.linkpicture.com/q/032-airedale-terrier.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/033-bedlington-terrier.png"); handleClose()}} src="https://www.linkpicture.com/q/033-bedlington-terrier.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/034-husky.png"); handleClose()}} src="https://www.linkpicture.com/q/034-husky.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/035-tibetan-mastiff.png"); handleClose()}} src="https://www.linkpicture.com/q/035-tibetan-mastiff.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/036-Collie.png"); handleClose()}} src="https://www.linkpicture.com/q/036-Collie.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/037-shar-pei.png"); handleClose()}} src="https://www.linkpicture.com/q/037-shar-pei.png"></img>
                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/038-afghan-hound.png"); handleClose()}} src="https://www.linkpicture.com/q/038-afghan-hound.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/039-dalmatian.png"); handleClose()}} src="https://www.linkpicture.com/q/039-dalmatian.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/040-japanese-chin.png"); handleClose()}} src="https://www.linkpicture.com/q/040-japanese-chin.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/041-saluki.png"); handleClose()}} src="https://www.linkpicture.com/q/041-saluki.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/042-chinese-crested.png"); handleClose()}} src="https://www.linkpicture.com/q/042-chinese-crested.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/043-pharaoh-hound.png"); handleClose()}} src="https://www.linkpicture.com/q/043-pharaoh-hound.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/044-bergamasco.png"); handleClose()}} src="https://www.linkpicture.com/q/044-bergamasco.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/045-yorkshire-terrier.png"); handleClose()}} src="https://www.linkpicture.com/q/045-yorkshire-terrier.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/046-xoloitzcuintle.png"); handleClose()}} src="https://www.linkpicture.com/q/046-xoloitzcuintle.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/047-beagle.png"); handleClose()}} src="https://www.linkpicture.com/q/047-beagle.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/048-Chihuahua.png"); handleClose()}} src="https://www.linkpicture.com/q/048-Chihuahua.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/049-boxer.png"); handleClose()}} src="https://www.linkpicture.com/q/049-boxer.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/050-pug.png"); handleClose()}} src="https://www.linkpicture.com/q/050-pug.png"></img>

                        <img className="DogPhoto" onClick={(e) => {handleSetDogPhoto("https://www.linkpicture.com/q/turkish-angora.png"); handleClose()}} src="https://www.linkpicture.com/q/turkish-angora.png"></img>

                        <CloseIcon style={{color:"#74E7D9"}} className="dogPhotoModal" onClick={handleClose} />
                    </div>
                    
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default DogPhotoModal;