import React, { useEffect, useState } from "react";
import Activitycard from "../Components/Activitycard";
import Addnewactivity from "../Components/Addnewactivity";

function Dashboard({ isAuthenticated, setIsAuthenticated, user, setUser }) {

    const [dog, setDog] = useState([]);
    const [activities, setActivities] = useState([]);
    

    useEffect(() => {
        if (isAuthenticated) {
            (async () => {
                const dogs = await getDogsByUser(user.id)
                setDog(dogs)
            })();
        }
    }, [])

    useEffect(() => {
        if (dog != []) {
          (async () => {
            const activityList = await  getActivitesByDog(dog[0].dogid)
            setActivities(activityList)
            console.log('activities fetch')
        })();
      }
      }, [dog])


    async function getDogsByUser(userid) {
        let res = await fetch(`http://localhost:3005/api/Dog/${userid}`)
        res = await res.json()
        //setDog(res)
        console.log('res from dog', res[0]);
        return res
    }

    async function getActivitesByDog(dogid) {
        let res = await fetch(`http://localhost:3005/api/Activity/${dogid}`)
        res = await res.json()
        //setActivities(res)
        return res
    }

    return (
        <div>
        <h1>Welcome, user!</h1>
        {/* {moreinfo}</div> */}
        </div>
    )
}

export default Dashboard;