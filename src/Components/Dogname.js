import React from "react";
import 'bulma/css/bulma.css';
import '../stylesheets/style.css';
import { SwitchGroup } from "@headlessui/vue";

function Dogname({doggy, activeTab, dogid}){

    const date = new Date(
        doggy.birthday
    )
function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    console.log("age function", getAge("2018-08-18"))
console.log(doggy.birthDate)

    return(
        <div className = {activeTab == dogid ? "isActive" : "isInactive"}>
<div value={dogid} >{doggy.dogname}</div>

<div className="dogInfo"> 
{doggy.breed} • {doggy.gender} • {getAge(date.toDateString())} years old
</div>
</div>
    )

}

export default Dogname;