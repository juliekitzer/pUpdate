import React, {useState} from 'react';



function Register() {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        username: "",
        birthday: ""
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3005/Register", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "email": user.email,
                    "username": user.username,
                    "password": user.password,
                    "birthday": user.birthday
                }),
            });
            let resJson = await res.json();
            //   if (res.status === 200) {
            //     setName("");
            //     setEmail("");
            //     setMessage("User created successfully");
            //   } else {
            //     setMessage("Some error occured");
            //   }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (field, val) => {
        setUser({
            ...user,
            [field]: val
        });
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>First name</label>
                <input type="text" name="firstname"  placeholder="First Name" onChange={(e) => handleChange('firstname', e.target.value)}/>

                <label>Last name:</label>
                <input type="text" name="lastname" placeholder="Last Name" onChange={(e) => handleChange('lastname', e.target.value)}/>

                <label>Email</label>
                <input type="text" name="email"  placeholder="Email" onChange={(e) => handleChange('email', e.target.value)} />

                <label>Username</label>
                <input type="text" name="username" placeholder="Username" onChange={(e) => handleChange('username', e.target.value)} />

                <label> Password: </label>
                <input type="text" name="password" placeholder="Password" onChange={(e) => handleChange('password', e.target.value)}/>

                <label> Birthday </label>
                <input type="date" name="birthday" onChange={(e) => handleChange('birthday', e.target.value)} />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;





            // const Register = () => { 

// //Javascript goes here -- usehooks or your own js function. We will have our fetch, post reqest etc here 

//     return(
//         //html goes here. anything that needs to be rendered to the page. every component will have this and everything that will be displayed will be within this function
//         <></>
//     )
// }

