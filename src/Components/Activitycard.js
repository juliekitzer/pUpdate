import {useState} from 'react';
import Editactivity from './Editactivity';
function Activitycard({activity, DeleteThisactivity, EditThisactivity}){
   
    const [editClicked, setEditClicked] = useState(false);
    // function onInfoClick() {
    //     setInfoClicked(!infoClicked);
    // }

    function onDeleteClick(){
        DeleteThisactivity(activity.id);
    }

    function onEditClick(){
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


 

    let editArea = <button onClick={onEditClick}  className="button is-primary is-light"> Edit </button>
    if(editClicked){
        editArea = (<div>
            <Editactivity activity={activity} EditThisactivity={EditThisactivity}/>
            <button className="button is-primary"onClick={onEditClick}>Cancel</button>
        </div>)
    }
    return(
        <div className="buttons are small">
             <h3>{activity.activity}</h3>
            <button className="button is-primary" onClick={onDeleteClick}>Remove</button>
            {editArea}
           
            {/* <p>{activity.price.toFixed(2)}</p> */}
            {/* {moreInfo} */}
        </div>
    )
}

export default Activitycard;