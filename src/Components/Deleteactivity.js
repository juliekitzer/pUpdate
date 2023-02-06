import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Deleteactivity(activityid, userid, getAllActivitiesFunction) {



  async function DeleteThisActivity() {
    let res2 = await fetch("http://localhost:3005/api/activity/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: activityid.activityid,
      }),
    });
    getAllActivitiesFunction();

    let resJson2 = await res2.json();
  }
  console.log("this is the activity id", activityid);



  
  return (
    <div>
      <DeleteIcon onClick={() => DeleteThisActivity()} />
    </div>
  );
}

export default Deleteactivity;
