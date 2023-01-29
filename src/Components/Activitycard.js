import {useState} from 'react';


import Editactivity from './Editactivity';
import Modalpopup from './Modalpopup';
function Foodcard({activity, DeleteThisactivity, EditThisactivity}){
    const [infoClicked, setInfoClicked] = useState(false);
    const [editClicked, setEditClicked] = useState(false);
    function onInfoClick(){
        setInfoClicked(!infoClicked);
    }

    function onDeleteClick(){
        DeleteThisactivity(activity.id);
    }

    function onEditClick(){
        setEditClicked(!editClicked);
    }
    let moreInfo = <button onClick={onInfoClick}>More information!</button>
    if(infoClicked){
        moreInfo = (
            <div>
                <Modalpopup activity={activity} handleClose={onInfoClick} open={infoClicked}/>
                <button onClick={onInfoClick}>Less information!</button>
            </div>
        )
    }
    let editArea = <button onClick={onEditClick}>Edit Food below!</button>
    if(editClicked){
        editArea = (<div>
            <Editactivity activity={activity} EditThisactivity={EditThisactivity}/>
            <button onClick={onEditClick}>Cancel</button>
        </div>)
    }
    return(
        <div>
            <button onClick={onDeleteClick}>Remove the below activity.</button>
            {editArea}
            <h3>{activity.activityname}</h3>
            {/* <p>{activity.price.toFixed(2)}</p> */}
            {moreInfo}
        </div>
    )
}

export default Foodcard;