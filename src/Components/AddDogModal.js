// import React, { useState } from 'react'
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import 'bulma/css/bulma.css';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';

// function Modalpopup({ handleClose, open, dog, user, activities }) {
//     const [newActivity, setNewActivity] = useState({
//         Activity: "",
//         Date: "",
//         Time: "",
//         Description: "",
//         dogid: ""
//     })

//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             let res = await fetch("http://localhost:3005/api/Activity/create", {
//                 method: "POST",
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     "activity": newActivity.Activity,
//                     "date": newActivity.Date,
//                     "time": newActivity.Time,
//                     "description": newActivity.Description,
//                     "dogid": newActivity.dogid,
//                     "userid": user
//                 }),
//             });
//             let resJson = await res;
//             handleClose()
//         } catch (err) {
//         console.log(err);
//         }
//     };

//     const handleChange = (field, val) => {
//         setNewActivity({
//             ...newActivity,
//             [field]: val
//         });
//     }
//     let dogOptions
//     if (dog != []) {
//         dogOptions = dog.map(function (dog) {
//             return (
//                 <option name="dogid" value={dog['Dog'].id}>{dog['Dog'].dogname}</option>
//             )
//         })
//         // console.log(dogOptions)

//     }

//     return (

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Open Child Modal</Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default function NestedModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}>
//           <h2 id="parent-modal-title">Text in a modal</h2>
//           <p id="parent-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <ChildModal />
//         </Box>
//       </Modal>
//     </div>
//   );
// }

//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>{ }</DialogTitle>
//             <DialogContent>

//                 <form onSubmit={handleSubmit}>
//                     <div className="field">
//                         <label className="label">Pup:</label>
//                         <div className="control">
//                             <div className="select">
//                                 <select required="required" onChange={(e) => handleChange('dogid', e.target.value)}>
//                                     <option name="Dog name" value="Dog name">

//                                         Select a Dog

//                                     </option>
//                                     {dogOptions}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="field">
//                         <label className="label">Activity</label>
//                         <div className="control">
//                             <div className="select">
//                                 <select required="required" onChange={(e) => handleChange('Activity', e.target.value)}>
//                                     <option name="Vet Visit" value="Vet Visit">

//                                         Select an Activity

//                                     </option>
//                                     <option name="Vet Visit" value="Vet Visit">

//                                         Vet Visit

//                                     </option>
//                                     <option name="Vaccination">
//                                         Vaccination

//                                     </option>
//                                     <option name="Medication">
//                                         Medication

//                                     </option>
//                                     <option name="Health & Wellness">
//                                         Health & Wellness

//                                     </option>
//                                     <option name="Weight">
//                                         Weight

//                                     </option>
//                                     <option name="Feeding">
//                                         Feeding

//                                     </option>
//                                     <option name="Exercise">
//                                         Exercise

//                                     </option>
//                                     <option name="Grooming">
//                                         Grooming

//                                     </option>
//                                     <option name="Training">
//                                         Training

//                                     </option>
//                                     <option name="Special moment">
//                                         Special Moment

//                                     </option>
//                                     <option name="Other">
//                                         Other

//                                     </option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="field">
//                         <label className="label">Date</label>
//                         <div className="control">
//                             <input className="input" type="date" placeholder="Text input" required="required" onChange={(e) => handleChange('Date', e.target.value)} />
//                         </div>
//                     </div>

//                     <div className="field">
//                         <label className="label">Time</label>
//                         <div className="control">
//                             <input className="input" type="time" placeholder="Text input" required="required" onChange={(e) => handleChange('Time', e.target.value)} />
//                         </div>
//                     </div>

//                     <div className="field">
//                         <label className="label">Description</label>
//                         <div className="control">
//                             <textarea className="textarea" placeholder="Textarea" onChange={(e) => handleChange('Description', e.target.value)} ></textarea>
//                         </div>
//                     </div>

//                     <div className="field is-grouped">
//                         <div className="control">
//                             <button className="button is-link"> Submit </button>
//                         </div>
//                         <div className="control">
//                             <button className="button is-link is-light" onClick={handleClose}>Cancel</button>
//                         </div>
//                     </div>
//                 </form>

//             </DialogContent>
//         </Dialog>
//     );
// }

// export default Modalpopup;
