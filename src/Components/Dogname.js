import React from "react";
import 'bulma/css/bulma.css';
import '../stylesheets/style.css';

function Dogname({doggy, activeTab, dogid}){

    return(
<div value={dogid} className = {activeTab == dogid ? "isActive" : "isInactive"}>{doggy}</div>
    )
}

export default Dogname;