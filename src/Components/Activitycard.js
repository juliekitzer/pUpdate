import React, { useEffect } from 'react';
import { useState } from 'react';
import "../stylesheets/style.css";
import Editactivity from './Editactivity';
import Deleteactivity from "./Deleteactivity";
import { SendTimeExtension } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
function Activitycard({ activity, handleTabChange, activeTab, tabId, handleSetActivities, handleGetActivities}) {

    const [editClicked, setEditClicked] = useState(false);
    // const [deleteClicked, setDeleteClicked] = useState(false);
    const [userFirstName, setUserFirstName] = useState("");
    
    // function onInfoClick() {
    //     setInfoClicked(!infoClicked);
    // }
    const date = new Date(
        activity.date
    )
    const newdate = new Date (
        "2023-10-10"
    )
    console.log(newdate.toDateString())
    console.log(date.toDateString())
    // const time = new Date(
    //     activity.time)
    // time.getTime


    // function onDeleteClick() {
    //     DeleteThisactivity(activity.id);
    // }

    function onEditClick() {
        setEditClicked(!editClicked);
    }
    // let moreInfo = <button onClick={onInfoClick}>More information!</button>
    // if(infoClicked){
    //     moreInfo = (
    //         <div>
    //             <Modalpopup activity={activity} handleClose={onInfoClick} open={infoClicked}/>
    //             <button onClick={onInfoClick}>Less information!</button>
    //         </div>
    //     )
    // }

    // let deleteArea = <button  onClick={onDeleteClick} className="button is-small is-primary"> <DeleteIcon/> </button>
    // if (deleteClicked) {
    //     deleteArea = (<div>
    //         <Deleteactivity activity={activity}/>
    //         <button onClick={onDeleteClick}>Cancel</button>
    //     </div>)
    // }


    let editArea = <button onClick={onEditClick} className="button is-small is-primary is-light"> <EditIcon /> </button>
    if (editClicked) {
        editArea = (<div>
            <Editactivity activity={activity} editClicked={editClicked}onEditClick={onEditClick} dogid={activity.dogid} userid={activity.userid} handleGetActivities={handleGetActivities} handleSetActivities={handleSetActivities}/>
            <button onClick={onEditClick}>Cancel</button>
        </div>)
    }
async function getUserFirstName(userid) {
    let res = await fetch(`http://localhost:3005/api/user/${userid}`)
    res = await res.json()
    setUserFirstName(res.firstname)

        ;

}

useEffect(() => {
    getUserFirstName(activity.userid)
}, [])



    return (
        <div>
            <h5>{date.toDateString()}</h5>
            <div id="Rounded"class="box">
                <article class="media">
                    <div class="media-left">
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{activity.activity}</strong> <small>{activity.time}</small>
                                <br />
                                {activity.description}
                            </p>
                            <p>Created by {userFirstName}</p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">

                                {editArea}
                                {/* {deleteArea} */}
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Activitycard;


{/* <button className="button is-primary is-small" onClick={onDeleteClick}>Remove</button> 
             <button className="button is-primary is-small" onClick={onEditClick}>Edit</button>  */}

{/* <p>{activity.price.toFixed(2)}</p> */ }
{/* {moreInfo} */ }



