import React, { useDebugValue, useEffect, useState } from "react";
import Activitycard from "../Components/Activitycard";
import Addnewactivity from "../Components/Addnewactivity";
import Modalpopup from "../Components/Modalpopup";
import Adddog from "../Components/Adddog";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TabComponent from "../Components/TabComponent";
import 'bulma/css/bulma.css'



function Dashboard({ isAuthenticated, setIsAuthenticated, user, setUser }) {

    const [dog, setDog] = useState([]);
    const [activities, setActivities] = useState([]);
    const [infoClicked, setInfoClicked] = useState(false);
    const [dogInfoClicked, setDogInfoClicked] = useState(false);
    const [dogsExist, setDogsExist] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    useEffect(() => {
        if (isAuthenticated) {
            (async () => {
                const dogs = await getDogsByUser(user.id)
                setDog(dogs)
                setDogsExist(true)
                // console.log(dogs)
            })();

            // console.log("we've arrived")
            // console.log("activities", activities);
        }
    }, [])

    // let dogList = dog.map

    useEffect(() => {
        if (dogsExist == true) {
            // console.log("second condition");
            dog.forEach(doggy => {
                // console.log("tesinggggg", doggy.dogname);

                getActivitesByDog(doggy.dogid);
                // setActivities(activityList)
            })
        }
    }, [dogsExist])


    function onInfoClick() {
        setInfoClicked(!infoClicked);
    }

    function onDogInfoClick() {
        setDogInfoClicked(!dogInfoClicked);
    }

    async function getDogsByUser(userid) {
        let res = await fetch(`http://localhost:3005/api/Dog/${userid}`)
        res = await res.json()
            //setDog(res)
            ;
        return res
    }

    async function getActivitesByDog(dogid) {
        // console.log('saving information for', dogid)
        let res = await fetch(`http://localhost:3005/api/Activity/${dogid}`)
        res = await res.json()
        setActivities(activities => [...activities, res]);
    }

    function handleTabChange(value) {
        setActiveTab(value)
    }


    let tabs
    console.log("test", activities)

    tabs = activities.map((activity, index) => {
        console.log("testing again", activity)
        if (activity.length > 0) {
            return (

                <TabComponent key={activity.id} tabId={index} activity={activity} dogName={activity[0].Dog.dogname} dogId={activity[0]['Dog'].id} activeTab={activeTab} handleTabChange={handleTabChange}
                />)

        }
    })


let moreInfo = <button className="button is-primary" onClick={onInfoClick}>Add activity</button>
if (infoClicked) {
    moreInfo = (
        <div>
            <Modalpopup handleClose={onInfoClick} open={infoClicked} dog={dog} activities={activities} user={user.id} />
            <button onClick={onInfoClick}>Cancel</button>
        </div>
    )
}

let addDog = <button className="button is-primary" onClick={onDogInfoClick}>Add Dog</button>
if (dogInfoClicked) {
    addDog = (
        <div>
            <Adddog handleClose={onDogInfoClick} open={dogInfoClicked} user={user.id} />
            <button onClick={onDogInfoClick}>Cancel</button>
        </div>
    )
}

let activitiescards;
activities.forEach(dog => {
    if (dog.length > 0) {
        activitiescards = dog.map(function (activity) {

            return (
                <Activitycard key={activity.id} activity={activity}
                // DeleteThisActivity={DeleteThisActivity} 
                // EditThisActivity={EditThisActivity}
                />

            )
        })
    }
})


// if (loggedIn) {
//     (async () => {
//         const dogs = await getDogsByUser(user.id);
//         const activities = await getActivitesByDog(dog.id);
//         setDog(dogs)
//     })();

// }

return (
    <div>
        <h1 className="title">Welcome, {user.firstname}!</h1>
        {moreInfo}
        <div className="tabs is-boxed">
            
            <ul>
                {tabs}
                
                <li className={activeTab == 1 ? "is-active" : ""}>

                    <a>
                        <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                        <span>{addDog}</span>
                    </a>
                </li>

            </ul>
            <p>test</p>
        </div>
        <div>

            {/* {moreinfo}</div> */}
            
        </div>
        
    </div>


)

}
export default Dashboard;