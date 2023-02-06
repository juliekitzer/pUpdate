import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../stylesheets/loginStyle.css";

function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    birthday: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3005/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          username: user.username,
          password: user.password,
          birthday: user.birthday,
        }),
      });
      let resJson = await res;
      if ((resJson = "success")) {
        navigate("/Login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (field, val) => {
    setUser({
      ...user,
      [field]: val,
    });
  };

  return (
    <div className="Registration">
      <div id="Register" className="tile is-parent-tile is-4 centered">
        <article className="tile is-child notification is-primary">
          <div>
            <center>
              <h1 className="subtitle">Register</h1>
            </center>
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <label>First name</label>
                </li>
                <li>
                  <input
                    className="input is-rounded is-primary"
                    required="required"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={(e) => handleChange("firstname", e.target.value)}
                  />
                </li>

                <li>
                  <label>Last name:</label>
                </li>
                <li>
                  <input
                    className="input is-rounded is-primary"
                    required="required"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={(e) => handleChange("lastname", e.target.value)}
                  />
                </li>

                <li>
                  <label>Email</label>
                </li>
                <li>
                  <input
                    className="input is-rounded is-primary"
                    required="required"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </li>

                <li>
                  <label>Username</label>
                </li>
                <li>
                  <input
                    className="input is-rounded is-primary"
                    required="required"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => handleChange("username", e.target.value)}
                  />
                </li>

                <li>
                  <label> Password: </label>
                </li>
                <li>
                  <input
                    className="input is-rounded is-primary"
                    required="required"
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </li>

                <li>
                  <label> Birthday </label>
                </li>
                <li>
                  <input
                    className="input is-rounded is-primary"
                    required="required"
                    type="date"
                    name="birthday"
                    onChange={(e) => handleChange("birthday", e.target.value)}
                  />
                </li>
              </ul>
              <center>
                {" "}
                <button type="submit" className="button is-light">
                  Login
                </button>
              </center>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Register;

// const Register = () => {

// //Javascript goes here -- usehooks or your own js function. We will have our fetch, post reqest etc here

//     return(
//         //html goes here. anything that needs to be rendered to the page. every component will have this and everything that will be displayed will be within this function
//         <></>
//     )
// }
