import { useState } from 'react';
import Editactivity from './Editactivity';
import Deleteactivity from "./Deleteactivity";
import { SendTimeExtension } from '@mui/icons-material';
function Activitycard({ activity, DeleteThisactivity, EditThisactivity, handleTabChange, activeTab, tabId }) {

    const [editClicked, setEditClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    // function onInfoClick() {
    //     setInfoClicked(!infoClicked);
    // }
    const date = new Date(
        activity.date
    )
    // const time = new Date(
    //     activity.time)
    // time.getTime


    function onDeleteClick() {
        DeleteThisactivity(activity.id);
    }

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

    let deleteArea = <button onClick={onDeleteClick} className="button is-small is-primary"> Remove </button>
    if (deleteClicked) {
        deleteArea = (<div>
            <Deleteactivity activity={activity} DeleteThisactivity={DeleteThisactivity} />
            <button onClick={onDeleteClick}>Cancel</button>
        </div>)
    }


    let editArea = <button onClick={onEditClick} className="button is-small is-primary is-light"> Edit </button>
    if (editClicked) {
        editArea = (<div>
            <Editactivity activity={activity} EditThisactivity={EditThisactivity} />
            <button onClick={onEditClick}>Cancel</button>
        </div>)
    }
    return (
        <div>
            <h5>{date.toDateString()}</h5>
            <div class="box">
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
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">

                                {editArea}
                                {deleteArea}
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



