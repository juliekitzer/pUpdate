import React from "react";
import '../stylesheets/style.css';
import 'bulma/css/bulma.css'
import Activitycard from "./Activitycard";


function TabComponent({ activity, dogName, activeTab, handleTabChange, dogId, tabId, DogPhoto }) {


    // let activitiescards;
    // if (activity.length > 0) {
    //     activitiescards = activity.map(function (activity) {

    //         return (
    //             <>
    //             <div className={activeTab == dogId ? "isActive" : "isInactive"}>

    //             {/* <Activitycard key={activity.id} activity={activity}
    //             // DeleteThisActivity={DeleteThisActivity} 
    //             // EditThisActivity={EditThisActivity}
    //             /> */}
    //             </div>
    //             </>

    //         )
    //     })
    // }



    return (
        <div>
            <li className={activeTab == tabId ? "is-active" : ""} onClick={() => handleTabChange(tabId)} value={tabId}>
         
                    <a className="title media-left">
                        <div className="Circle"><img src={DogPhoto} className="DogPhotoTab"></img></div>

                    </a>
               
            </li>


            {/* {activitiescards} */}

        </div>
    )
}

export default TabComponent;

