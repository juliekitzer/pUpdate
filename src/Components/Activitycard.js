import React, { useEffect } from "react";
import { useState } from "react";
import "../index.css";
import "../stylesheets/style.css";
import Editactivity from "./Editactivity";
import Deleteactivity from "./Deleteactivity";
import { Padding, SendTimeExtension } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

function Activitycard({
  activity,
  handleTabChange,
  activeTab,
  tabId,
  handleSetActivities,
  handleGetActivities,
}) {
  const [editClicked, setEditClicked] = useState(false);
  // const [deleteClicked, setDeleteClicked] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");

  // function onInfoClick() {
  //     setInfoClicked(!infoClicked);
  // }
  const date = new Date(activity.date);
  const newdate = new Date("2023-10-10");

  const iconMap = {
    "Vet Visit": "https://www.linkpicture.com/q/VetVisit.png",
    Vaccination: "https://www.linkpicture.com/q/Vaccination.png",
    Medication: "https://www.linkpicture.com/q/Medicartion.png",
    "Health & Wellness": "https://www.linkpicture.com/q/HealthAndWellness.png",
    Weight: "https://www.linkpicture.com/q/Weight.png",
    Feeding: "https://www.linkpicture.com/q/Feeding.png",
    Exercise: "https://www.linkpicture.com/q/exercise.png",
    Grooming: "https://www.linkpicture.com/q/Grooming.png",
    Training: "https://www.linkpicture.com/q/training_2.png",
    "Special Moment": "https://www.linkpicture.com/q/SpecialMoment.png",
    Other: "https://www.linkpicture.com/q/other_2.png",
  };

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

  let editArea = (
    <EditIcon onClick={onEditClick} style={{ color: "#74E7D9" }} />
  );
  if (editClicked) {
    editArea = (
      <div>
        <Editactivity
          activity={activity}
          editClicked={editClicked}
          onEditClick={onEditClick}
          dogid={activity.dogid}
          userid={activity.userid}
          handleGetActivities={handleGetActivities}
          handleSetActivities={handleSetActivities}
        />
        <button onClick={onEditClick}>Cancel</button>
      </div>
    );
  }

  async function DeleteThisActivity() {
    let res2 = await fetch("http://localhost:3005/api/activity/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: activity.id,
      }),
    });
    handleGetActivities();

    let resJson2 = await res2.json();
  }

  console.log("the activity is right here", activity);

  async function getUserFirstName(userid) {
    let res = await fetch(`http://localhost:3005/api/user/${userid}`);
    res = await res.json();
    setUserFirstName(res.firstname);
  }

  useEffect(() => {
    getUserFirstName(activity.userid);
  }, []);

  return (
    <div>
      <h5 style={{fontSize:"14px", color:"#3f4343"}}>{date.toDateString()}</h5>
      <div id="Rounded" class="box">
        <article class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <div class="content">
            <div className="completeHeading">
              <div className="cardHeading">
                <img
                  className="activityIcon"
                  src={iconMap[activity.activity]}
                ></img>{" "}
                <p style={{ paddingRight: "10px" }}>
                  {" "}
                  <strong>{activity.activity}</strong>
                </p>
                <p style={{ fontSize: "13px" }}>{activity.time}</p>
                <div className="topLeft"></div>
                {/* <Deleteactivity activityid={activity.id} userid={activity.userid} getAllActivitiesFunction={handleGetActivities}/> */}
             
              <div className="topLine">
                {editArea}{" "}
                <DeleteIcon
                  onClick={() => DeleteThisActivity()}
                  style={{ color: "#1ad2bc" }}
                />
              </div>
              </div>
               </div>
              <div>{activity.description}</div>
              <br />
              <p style={{ color: "#cb997e", fontSize: "14px" }}>
                Created by {userFirstName}
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">{/* {deleteArea} */}</div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Activitycard;

{
  /* <button className="button is-primary is-small" onClick={onDeleteClick}>Remove</button> 
             <button className="button is-primary is-small" onClick={onEditClick}>Edit</button>  */
}

{
  /* <p>{activity.price.toFixed(2)}</p> */
}
{
  /* {moreInfo} */
}
