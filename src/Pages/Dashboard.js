import React, { useDebugValue, useEffect, useState } from "react";
import Activitycard from "../Components/Activitycard";
import Addnewactivity from "../Components/Addnewactivity";
import Modalpopup from "../Components/Modalpopup";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import 'bulma/css/bulma.css'

function Dashboard({ isAuthenticated, setIsAuthenticated, user, setUser }) {
    
    const [dog, setDog] = useState([]);
    const [activities, setActivities] = useState([]);
    const [infoClicked, setInfoClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         (async () => {
    //             const dogs = await getDogsByUser(user.id)
    //             setDog(dogs)
    //         })();
    //     }
    // }, [])

    // let dogList = dog.map

    useEffect(() => {
        if (dog != []) {
            dog.forEach(doggy => {
                console.log("tesinggggg", doggy.dogname);
                getActivitesByDog(doggy.dogid);
                // setActivities(activityList)
            })

        }
    }, [])

    function onInfoClick() {
        setInfoClicked(!infoClicked);
    }


    async function getDogsByUser(userid) {
        let res = await fetch(`http://localhost:3005/api/Dog/${userid}`)
        res = await res.json()
            //setDog(res)
            ;
        return res
    }

    async function getActivitesByDog(dogid) {
        let res = await fetch(`http://localhost:3005/api/Activity/${dogid}`)
        res = await res.json()
        setActivities([...activities,res] );

    }

    let activitiescards;
    if (activities.length > 0) {
        console.log(activities);
        activitiescards = activities.map(function (activity) {

            return (
                <Activitycard key={activity.id} activity={activity}
                // DeleteThisActivity={DeleteThisActivity} 
                // EditThisActivity={EditThisActivity}
                />

            )
        })
    }

    let moreInfo = <button class="button is-primary" onClick={onInfoClick}>Add activity</button>
    if (infoClicked) {
        moreInfo = (
            <div>
                <Modalpopup handleClose={onInfoClick} open={infoClicked} dog={dog} activities={activities} user={user.id} />
                <button onClick={onInfoClick}>Cancel</button>
            </div>
        )
    }

    return (
        <div>
       <div class="tabs is-boxed">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Add Dog</span>
      </a>
    </li>
    
  </ul>
</div>
        <div>
            <h1 className="title">Welcome, {user.firstname}!</h1>
            {/* {moreinfo}</div> */}
            {activitiescards}
            {moreInfo}
        </div>
        </div>
    )

}
export default Dashboard;