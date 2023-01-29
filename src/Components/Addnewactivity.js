import {useState} from 'react';

function Addnewactivity({AddThisactivity}){
    const [formInfo, setFormInfo] = useState({
        Activity: "",
        Date:"",
        Time:"",
        Description:""
    });
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }

    function onFormSubmit(event){
        event.preventDefault();
        AddThisactivity(formInfo)
    }
    return(
        <form onSubmit={onFormSubmit}>
            <p>Dishname:</p>
            <input name="dishname" onChange={onInputChange}/>
            <p>Price:</p>
            <input name="price" onChange={onInputChange}/>
            <p>Description:</p>
            <input name="description" onChange={onInputChange}/>
            <p>Allergy Info:</p>
            <input name="allergyinfo" onChange={onInputChange}/>
            <p>Menu Section:</p>
            <input name="menusection" onChange={onInputChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Addnewactivity;