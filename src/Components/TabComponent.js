import React from "react";
import 'bulma/css/bulma.css'
import Activitycard from "./Activitycard";

function TabComponent({ activity, dogName, activeTab, handleTabChange, dogId, tabId }) {

    let activitiescards;
    if (activity.length > 0) {
        activitiescards = activity.map(function (activity) {

            return (
                <Activitycard key={activity.id} activity={activity}
                // DeleteThisActivity={DeleteThisActivity} 
                // EditThisActivity={EditThisActivity}
                />

            )
        })
    }

    return (
        <div>
        <li className={activeTab == tabId ? "is-active" : ""} onClick={() => handleTabChange(tabId)} value={tabId}>

            <a>
                <span className="icon is-small "><i className="fas fa-music" aria-hidden="true"></i></span>
                <span>{dogName}</span>
            </a>
        </li>
                {activitiescards}
</div>
    )
}

export default TabComponent;

